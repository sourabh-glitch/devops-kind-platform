export const templates = [
  {
    id: 1,
    name: "DevOps Engineer",
    subject: "Application for DevOps Engineer Position",
    body: `
<div style="font-family: Arial, Helvetica, sans-serif; max-width: 700px; margin: auto; color: #333; line-height: 1.6;">

  <h2 style="color: #2563eb;">
    Application for DevOps Engineer Position
  </h2>

  <p>Hello Hiring Team,</p>

  <p>I hope you are doing well.</p>

  <p>
    I am writing to express my interest in the
    <strong>DevOps Engineer</strong> position.
  </p>

  <p>
    I have hands-on experience in AWS Cloud, DevOps automation,
    CI/CD pipelines, containerization, Kubernetes orchestration,
    Infrastructure as Code, monitoring, logging, and DevSecOps practices.
  </p>

  <h3 style="color: #2563eb;">
    Technical Skills
  </h3>

  <table style="width:100%; border-collapse: collapse;">
    <tr>
      <td style="padding:8px; border:1px solid #ddd;"><strong>AWS</strong></td>
      <td style="padding:8px; border:1px solid #ddd;">EC2, S3, IAM, VPC, EKS</td>
    </tr>

    <tr>
      <td style="padding:8px; border:1px solid #ddd;"><strong>Containers</strong></td>
      <td style="padding:8px; border:1px solid #ddd;">Docker, Kubernetes</td>
    </tr>

    <tr>
      <td style="padding:8px; border:1px solid #ddd;"><strong>Infrastructure as Code</strong></td>
      <td style="padding:8px; border:1px solid #ddd;">Terraform, Ansible</td>
    </tr>

    <tr>
      <td style="padding:8px; border:1px solid #ddd;"><strong>CI/CD</strong></td>
      <td style="padding:8px; border:1px solid #ddd;">Jenkins and GitHub Actions</td>
    </tr>

    <tr>
      <td style="padding:8px; border:1px solid #ddd;"><strong>Monitoring</strong></td>
      <td style="padding:8px; border:1px solid #ddd;">Prometheus, Grafana</td>
    </tr>

    <tr>
      <td style="padding:8px; border:1px solid #ddd;"><strong>Logging</strong></td>
      <td style="padding:8px; border:1px solid #ddd;">ELK Stack</td>
    </tr>

    <tr>
      <td style="padding:8px; border:1px solid #ddd;"><strong>DevSecOps</strong></td>
      <td style="padding:8px; border:1px solid #ddd;">SonarQube, Trivy, OWASP</td>
    </tr>
  </table>

  <h3 style="color: #2563eb; margin-top: 25px;">
    Key Projects & Experience
  </h3>

  <ul>
    <li>
      Designed and deployed a Kubernetes-based three-tier application with automated CI/CD pipelines.
    </li>

    <li>
      Provisioned AWS infrastructure using Terraform following Infrastructure as Code principles.
    </li>

    <li>
      Implemented monitoring and alerting using Prometheus and Grafana.
    </li>

    <li>
      Integrated SonarQube and Trivy into CI/CD pipelines for DevSecOps automation.
    </li>

    <li>
      Deployed and managed workloads on Kubernetes and Amazon EKS.
    </li>

    <li>
      Worked on scalable, secure, and highly available cloud infrastructure deployments.
    </li>
  </ul>

  <p>
    I am passionate about building scalable, secure, and automated cloud infrastructure and would welcome the opportunity to contribute to your team.
  </p>

  <div style="
      margin-top:30px;
      padding:20px;
      background:#f8fafc;
      border-left:4px solid #2563eb;
      border-radius:4px;
  ">
    <h3 style="margin-top:0; color:#2563eb;">
      Professional Profiles
    </h3>

    <p>
      <strong>Resume:</strong><br>
      <a href="{{RESUME_LINK}}">
        View Resume
      </a>
    </p>

    <p>
      <strong>LinkedIn:</strong><br>
      <a href="{{LINKEDIN}}">
        LinkedIn Profile
      </a>
    </p>

    <p>
      <strong>GitHub:</strong><br>
      <a href="{{GITHUB}}">
        GitHub Portfolio
      </a>
    </p>
  </div>

  <p style="margin-top:25px;">
    Thank you for your time and consideration.
    I look forward to hearing from you.
  </p>

  <hr style="margin:25px 0;" />

  <div>
    <strong>{{NAME}}</strong><br>
    DevOps Engineer<br><br>

    📞 {{PHONE}}<br>
    📧 {{EMAIL}}<br><br>

    LinkedIn:
    <a href="{{LINKEDIN}}">
      LinkedIn Profile
    </a><br>

    
    Resume:
    <a href="{{RESUME_LINK}}">
      View Resume
    </a>
  </div>

</div>
`
  }
];