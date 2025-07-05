import BackToHomeButton from "../components/BackToHomeButton";

export default function Experience() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "3rem 0",
        background: "linear-gradient(135deg, #dbdbe6 0%, #b7e5f8 100%)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem" }}>


        {/* Cataract Research Assistant */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            background: "rgba(255,255,255,0.21)",
            borderRadius: "20px",
            boxShadow: "0 6px 24px #6366f119",
            overflow: "hidden",
            marginTop: "2rem",
            gap: "2.5rem"
          }}
        >
          <div style={{ flex: 1, padding: "2.5rem 2rem" }}>
            <div style={{ fontSize: "1.45rem", fontWeight: 700 }}>
              Cataract Research Assistant
            </div>
            <div style={{ fontWeight: 500, color: "#573fe1", marginBottom: 4 }}>
              Wilmer Eye Institute{" "}
              <span
                style={{
                  float: "right",
                  color: "#3d4251",
                  fontWeight: 400,
                  fontSize: "1rem",
                }}
              >
                January 2022–Present
              </span>
            </div>
            <ul
              style={{
                fontSize: "1.09rem",
                color: "#222a35",
                lineHeight: 1.72,
                margin: 0,
                paddingLeft: 23,
              }}
            >
              <li>
                Created and analyzed ground-truths for “Who is the expert surgeon?” Presented at AUPO 2024.
              </li>
              <li>
                Curated 30+ surgical videos for datasets and AI analysis.
              </li>
              <li>
                Applied ML models, encoders/decoders, AUC/confusion matrix for surgical skill evaluation.
              </li>
            </ul>
          </div>
          <div
            style={{
              minWidth: "230px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2.5rem 2rem",
            }}
          >
            <img
              src="/wilmer_eye_logo.jpg"
              alt="Wilmer Eye Institute"
              style={{
                maxWidth: "230px",
                width: "100%",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 6px 24px #4f46e533",
                objectFit: "contain",
                border: "3px solid #6366f1",
              }}
            />
          </div>
        </div>

        {/* RescueReady */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            background: "rgba(255,255,255,0.21)",
            borderRadius: "20px",
            boxShadow: "0 6px 24px #6366f119",
            overflow: "hidden",
            marginTop: "2.5rem",
            gap: "2.5rem"
          }}
        >
          <div style={{ flex: 1, padding: "2.5rem 2rem" }}>
            <div style={{ fontSize: "1.45rem", fontWeight: 700 }}>
              Co-Founder
            </div>
            <div style={{ fontWeight: 500, color: "#573fe1", marginBottom: 4 }}>
              RescueReady{" "}
              <span
                style={{
                  float: "right",
                  color: "#3d4251",
                  fontWeight: 400,
                  fontSize: "1rem",
                }}
              >
                January 2025–Present
              </span>
            </div>
            <ul
              style={{
                fontSize: "1.09rem",
                color: "#222a35",
                lineHeight: 1.72,
                margin: 0,
                paddingLeft: 23,
              }}
            >
              <li>
                Developed an AI-powered EMT training platform simulating real scenarios and clinical decision making.
              </li>
              <li>
                Built a full-stack app with React, TypeScript, SQLite and generative AI in collaboration with EMT professionals.
              </li>
            </ul>
          </div>
          <div
            style={{
              minWidth: "230px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2.5rem 2rem",
            }}
          >
            <img
              src="/RR.jpg"
              alt="RescueReady"
              style={{
                maxWidth: "230px",
                width: "100%",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 6px 24px #4f46e533",
                objectFit: "contain",
                border: "3px solid #6366f1",
              }}
            />
          </div>
        </div>

        {/* Posters & Publications */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            background: "rgba(255,255,255,0.21)",
            borderRadius: 20,
            boxShadow: "0 6px 24px #6366f119",
            padding: "2rem",
            marginTop: "2.5rem",
            gap: "2.5rem"
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "1.33rem",
                fontWeight: 700,
                color: "#222",
                marginBottom: 8,
              }}
            >
              Posters & Publications
            </div>
            <ul
              style={{
                fontSize: "1.08rem",
                color: "#363653",
                lineHeight: 1.67,
                margin: 0,
                paddingLeft: 23,
              }}
            >
              <li>
                Poster: “Can AI accurately answer: Who is the expert surgeon?” at AUPO 2024.
              </li>
              <li>
                Poster: “Surgical Skill Assessment of Cataract Videos” at ISBI 2025.
              </li>
              <li>
                Paper: “A Vision Foundation Model for Cataract Surgery Using Joint-Embedding Predictive Architecture” at MIDL 2025.
              </li>
            </ul>
          </div>
          <div
            style={{
              minWidth: "230px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "center",
            }}
          >
            <img
              src="/ISBI2025.jpg"
              alt="ISBI 2025 Poster"
              style={{
                maxWidth: "230px",
                width: "100%",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 6px 24px #4f46e533",
                objectFit: "contain",
                border: "3px solid #6366f1",
              }}
            />
            <img
              src="/Present.jpg"
              alt="Presenting"
              style={{
                maxWidth: "230px",
                width: "100%",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 6px 24px #4f46e533",
                objectFit: "contain",
                border: "3px solid #6366f1",
              }}
            />
          </div>
        </div>

        {/* Teaching Experience */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            background: "rgba(255,255,255,0.21)",
            borderRadius: 20,
            boxShadow: "0 6px 24px #6366f119",
            padding: "2rem",
            marginTop: "2.5rem",
            gap: "2.5rem"
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "1.33rem", fontWeight: 700, color: "#222", marginBottom: 2 }}>
              Head Teaching Assistant
              <span style={{ float: "right", color: "#3d4251", fontWeight: 400, fontSize: "1rem" }}>EN.601.226 | February 2024–Present</span>
            </div>
            <ul style={{ fontSize: "1.08rem", color: "#363653", lineHeight: 1.67, margin: 0, paddingLeft: 23 }}>
              <li>
                Guided students in debugging complex programming tasks, simplifying data structures concepts for better understanding and communication.
              </li>
              <li>
                Conducted weekly office hours and hands-on support, promoting engagement through practical learning.
              </li>
              <li>
                Graded 100+ projects and 200+ exams, collaborating on inclusive learning environments.
              </li>
            </ul>
          </div>
          <div
            style={{
              minWidth: "230px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/TA.jpg"
              alt="Teaching Assistant"
              style={{
                maxWidth: "230px",
                width: "100%",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 6px 24px #4f46e533",
                objectFit: "contain",
                border: "3px solid #6366f1",
              }}
            />
          </div>
        </div>
        <BackToHomeButton />
          </div>
        </div>
  );
}