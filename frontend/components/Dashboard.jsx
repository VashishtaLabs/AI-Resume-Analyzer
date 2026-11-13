
import {
  ArrowLeft,
  BrainCircuit,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Target,
  FileText,
  Sparkles
} from "lucide-react";

function Dashboard({ resumeName, onBack }) {
  const matchedSkills = [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS"
  ];

  const missingSkills = [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "REST APIs"
  ];

  const suggestions = [
    "Learn Node.js and Express.js to strengthen your backend development skills.",
    "Build a full-stack project using React and PostgreSQL.",
    "Add measurable achievements to your project descriptions.",
    "Include relevant technical keywords from the job description."
  ];

  return (
    <div className="dashboard">

      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <BrainCircuit size={24} />
          </div>
          <span>ResumeAI</span>
        </div>

        <button className="back-button" onClick={onBack}>
          <ArrowLeft size={17} />
          Back to Analyzer
        </button>
      </nav>

      <main className="dashboard-content">

        <div className="dashboard-heading">
          <span className="eyebrow">ANALYSIS REPORT</span>
          <h1>Your Resume Analysis</h1>
          <p>Here's how your resume compares with the job requirements.</p>
        </div>

        <div className="result-card">
          <div className="score-area">
            <div
              className="score-circle"
              style={{ "--score": "65%" }}
            >
              <div className="score-inner">
                <strong>65%</strong>
                <span>Match Score</span>
              </div>
            </div>
          </div>

          <div className="score-details">
            <span className="eyebrow">YOUR PERFORMANCE</span>
            <h2>Good Starting Point!</h2>
            <p>
              Your resume matches several important job requirements.
              Improving your backend skills could strengthen your profile.
            </p>

            <div className="report-info">
              <FileText size={17} />
              <span>{resumeName || "Resume.pdf"}</span>
            </div>
          </div>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>
              <CheckCircle2 className="matched-icon" />
              Matched Skills
            </h3>

            <p className="skill-description">
              Skills found in your resume.
            </p>

            <div className="skill-list">
              {matchedSkills.map((skill) => (
                <span className="matched-skill" key={skill}>
                  <CheckCircle2 size={14} />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <h3>
              <XCircle className="missing-icon" />
              Missing Skills
            </h3>

            <p className="skill-description">
              Skills to consider developing.
            </p>

            <div className="skill-list">
              {missingSkills.map((skill) => (
                <span className="missing-skill" key={skill}>
                  <XCircle size={14} />
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        <div className="suggestion-card">
          <h3>
            <Lightbulb size={22} />
            AI Improvement Suggestions
          </h3>

          <p className="skill-description">
            Recommendations to improve your resume.
          </p>

          <div className="suggestion-list">
            {suggestions.map((suggestion, index) => (
              <div className="suggestion-item" key={index}>
                <span>{index + 1}</span>
                <p>{suggestion}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-footer">
          <Sparkles size={18} />
          This is a sample dashboard preview.
          Actual AI results will be connected later.
        </div>

        <button className="analyze-button new-analysis" onClick={onBack}>
          <Target size={18} />
          Analyze Another Resume
        </button>

      </main>
    </div>
  );
}

export default Dashboard;
