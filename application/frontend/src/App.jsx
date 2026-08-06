import EmailForm from "./components/EmailForm";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-slate-800 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-white mb-6">
          DevOps Job Mail Sender
        </h1>

        <EmailForm />
      </div>
    </div>
  );
}

export default App;