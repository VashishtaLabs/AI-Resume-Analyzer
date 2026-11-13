import Dashboard from "/components/Dashboard";
import { useState } from "react";
import {
  FileText,
  UploadCloud,
  BrainCircuit,
  Target,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

import "./App.css";

function App() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [message, setMessage] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!validTypes.includes(file.type)) {
      setMessage("Please upload a PDF or DOCX file.");
      setResume(null);
      return;
    }

    setResume(file);
    setMessage("");
  };

  const handleAnalyze = () => {
  if (!resume) {
    setMessage("Please upload your resume first.");
    return;
  }

  if (!jobDescription.trim()) {
    setMessage("Please enter a job description.");
    return;
  }

  setMessage("");
  setShowDashboard(true);
};

if (showDashboard) {
  return (
    <Dashboard
      resumeName={resume?.name}
      onBack={() => setShowDashboard(false)}
    />
  );
}

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <BrainCircuit size={24} />
          </div>
          <span>ResumeAI</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#analyzer">Analyzer</a>
          <a href="#about">About</a>
        </div>

        <button className="nav-button">
          Get Started <ArrowRight size={16} />
        </button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">
          <Sparkles size={15} />
          AI Powered Resume Intelligence
        </div>

        <h1>
          Your Resume.
          <br />
          <span>One Step Ahead.</span>
        </h1>

        <p className="hero-description">
          Analyze your resume against job descriptions,
          discover missing skills and improve your chances
          with intelligent AI-powered insights.
        </p>

        <a href="#analyzer" className="hero-button">
          Analyze My Resume <ArrowRight size={18} />
        </a>

        <div className="hero-trust">
          <ShieldCheck size={17} />
          Smart analysis. Actionable recommendations.
        </div>
      </section>

      {/* Analyzer */}
      <section className="analyzer-section" id="analyzer">
        <div className="section-heading">
          <span className="eyebrow">GET STARTED</span>
          <h2>Let's Analyze Your Resume</h2>
          <p>Upload your resume and add the job description.</p>
        </div>

        <div className="analyzer-card">

          {/* Resume Upload */}
          <div className="input-section">
            <h3>
              <FileText size={19} />
              Upload Your Resume
            </h3>

            <label className="upload-box">
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={handleFileChange}
              />

              {resume ? (
                <>
                  <CheckCircle2 size={38} className="success-icon" />
                  <strong>{resume.name}</strong>
                  <span>Resume selected successfully</span>
                </>
              ) : (
                <>
                  <UploadCloud size={42} />
                  <strong>Click to upload your resume</strong>
                  <span>PDF or DOCX (Maximum 5 MB recommended)</span>
                </>
              )}
            </label>
          </div>

          {/* Job Description */}
          <div className="input-section">
            <h3>
              <Target size={19} />
              Job Description
            </h3>

            <textarea
              placeholder="Paste the job description here...

Example:
Required Skills:
React.js, Node.js, Express.js,
JavaScript, PostgreSQL and REST APIs."
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />

            <span className="character-count">
              {jobDescription.length} characters
            </span>
          </div>

          {message && (
            <div className="message">
              {message}
            </div>
          )}

          <button className="analyze-button" onClick={handleAnalyze}>
            <Sparkles size={18} />
            Analyze My Resume
            <ArrowRight size={18} />
          </button>

          <p className="privacy-note">
            <ShieldCheck size={15} />
            Your resume will be processed securely.
          </p>

        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-heading">
          <span className="eyebrow">WHY RESUMEAI?</span>
          <h2>Everything You Need to Improve</h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <Target size={28} />
            <h3>Resume Match Score</h3>
            <p>
              Understand how closely your resume matches
              your target job requirements.
            </p>
          </div>

          <div className="feature-card">
            <BrainCircuit size={28} />
            <h3>AI Skill Analysis</h3>
            <p>
              Identify your matched skills and discover
              important missing skills.
            </p>
          </div>

          <div className="feature-card">
            <Zap size={28} />
            <h3>Smart Suggestions</h3>
            <p>
              Receive actionable recommendations to
              improve your resume.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer id="about">
        <div className="logo">
          <BrainCircuit size={22} />
          ResumeAI
        </div>
        <p>Built with AI to help you move forward.</p>
        <span>© 2026 ResumeAI. All rights reserved.</span>
      </footer>

    </div>
  );
}

export default App;
