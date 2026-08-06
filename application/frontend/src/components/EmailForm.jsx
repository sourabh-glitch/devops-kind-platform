import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { templates } from "../data/templates";
import { API_URL } from "../config";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [bcc, setBcc] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailHistory, setEmailHistory] = useState([]);

  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [body, setBody] = useState(templates[0].body);

  const emailInputRef = useRef(null);

  // ===== YOUR DETAILS =====

  const NAME = "Sourabh Upadhyay";
  const PHONE = "+91-8506913424";
  const EMAIL = "upadhaysourav14@gmail.com";

  const RESUME_LINK =
    "https://drive.google.com/file/d/1_-GvEO7Dwdg4mF9Zd4j4V-MwClkgv9a5/view?usp=sharing";

  const LINKEDIN =
    "https://www.linkedin.com/in/upadhaysourabh";

  const GITHUB =
    "https://github.com/upadhaysourabh";

  // ========================

  useEffect(() => {
    loadEmailHistory();
  }, []);

  const loadEmailHistory = async () => {
    try {
      const res = await axios.get(`${API_URL}/email-history`);

      const emails = [
        ...new Set(
          res.data
            .map((item) => item.to)
            .filter((item) => item)
        ),
      ];

      setEmailHistory(emails);
    } catch (err) {
      console.error(err);
    }
  };

  const sendEmail = async () => {
    if (!email && !bcc) {
      alert("Please enter at least one To or BCC email");
      return;
    }

    const finalBody = body
      .replaceAll("{{NAME}}", NAME)
      .replaceAll("{{PHONE}}", PHONE)
      .replaceAll("{{EMAIL}}", EMAIL)
      .replaceAll("{{RESUME_LINK}}", RESUME_LINK)
      .replaceAll("{{LINKEDIN}}", LINKEDIN)
      .replaceAll("{{GITHUB}}", GITHUB);

    try {
      setLoading(true);

      await axios.post(`${API_URL}/send-email`, {
        to: email,
        bcc,
        subject: selectedTemplate.subject,
        body: finalBody,
      });

      await loadEmailHistory();

      alert("Email sent successfully!");

      emailInputRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      emailInputRef.current?.focus();

      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Failed to send email");
    } finally {
      setLoading(false);
    }
  };

  const previewBody = body
    .replaceAll("{{NAME}}", NAME)
    .replaceAll("{{PHONE}}", PHONE)
    .replaceAll("{{EMAIL}}", EMAIL)
    .replaceAll("{{RESUME_LINK}}", RESUME_LINK)
    .replaceAll("{{LINKEDIN}}", LINKEDIN)
    .replaceAll("{{GITHUB}}", GITHUB);

  return (
    <div className="space-y-4">

      {emailHistory.length > 0 && (
        <select
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
        >
          <option value="">
            Previously Used Emails
          </option>

          {emailHistory.map((emailItem, index) => (
            <option key={index} value={emailItem}>
              {emailItem}
            </option>
          ))}
        </select>
      )}

      <input
        ref={emailInputRef}
        type="text"
        placeholder="Recruiter Email (Optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
      />

      <input
        type="text"
        placeholder="BCC Emails (comma separated)"
        value={bcc}
        onChange={(e) => setBcc(e.target.value)}
        className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
      />

      <select
        className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600"
        value={selectedTemplate.id}
        onChange={(e) => {
          const template = templates.find(
            (t) => t.id === Number(e.target.value)
          );

          setSelectedTemplate(template);
          setBody(template.body);
        }}
      >
        {templates.map((template) => (
          <option key={template.id} value={template.id}>
            {template.name}
          </option>
        ))}
      </select>

      <div>
        <h3 className="text-white font-semibold mb-2">
          Subject
        </h3>

        <div className="bg-slate-700 p-3 rounded-lg text-gray-200">
          {selectedTemplate.subject}
        </div>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">
          HTML Template
        </h3>

        <textarea
          rows="15"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-4 rounded-lg bg-slate-700 text-white border border-slate-600"
        />
      </div>

      <div>
        <h3 className="text-white font-semibold mb-2">
          Email Preview
        </h3>

        <div
          className="bg-white text-black p-6 rounded-lg overflow-auto max-h-[600px]"
          dangerouslySetInnerHTML={{
            __html: previewBody,
          }}
        />
      </div>

      <div className="bg-slate-700 p-4 rounded-lg text-sm text-gray-300">
        Resume, LinkedIn, GitHub, Name, Phone and Email are automatically inserted into the template before sending.
      </div>

      <button
        type="button"
        onClick={sendEmail}
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 px-6 py-3 rounded-lg text-white font-semibold"
      >
        {loading ? "Sending..." : "Send Email"}
      </button>

    </div>
  );
}

export default EmailForm;