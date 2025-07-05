import BackToHomeButton from "../components/BackToHomeButton";

export default function Projects() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "3rem 0",
        background: "linear-gradient(135deg, #dbdbe6 0%, #b7e5f8 100%)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem" }}>

        {/* RESCUEREADY */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            background: "rgba(255,255,255,0.21)",
            borderRadius: "20px",
            boxShadow: "0 6px 24px #6366f119",
            overflow: "hidden",
            marginTop: "2rem",
          }}
        >
          {/* Left: Text */}
          <div style={{ flex: 1.15, padding: "2.5rem 2rem", minWidth: 0 }}>
            <div style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.3rem" }}>
              RescueReady <span style={{
                color: "#7c3aed",
                fontWeight: 500,
                fontSize: "1.17rem",
                letterSpacing: "0.01em",
                marginLeft: "0.34em"
              }}></span>
            </div>
            <ul style={{ fontSize: "1.21rem", color: "#1e293b", lineHeight: 1.7, margin: 0, paddingLeft: 24 }}>
              <li>
                <b>AI-driven application</b> designed to complement EMT training with extra practice for rapid, high-stakes decision-making in realistic, challenging scenarios.
              </li>
              <li>
                Enables EMTs and first responders to create <b>infinite emergency scenes</b> — sharpening situational awareness and practical decision skills.
              </li>
              <li>
                <b>Gamified engagement:</b> Station-based competitions and performance tracking reinforce critical thinking under pressure and boost motivation.
              </li>
              <li>
                <a
                  href="//RescueReady.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#2563eb", textDecoration: "underline", fontWeight: 500 }}
                >
                  RescueReady Design Day Poster
                </a>
                &nbsp;— Showcased at Johns Hopkins Engineering Design Day.
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div style={{
            flex: 1,
            minWidth: 0,
            maxWidth: "320px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2.5rem 2rem",

          }}>
            <img
              src="/RR.jpg"
              alt="RescueReady Logo"
              style={{
                maxWidth: "320px",   // Make this as big as you like!
                width: "100%",       // Makes the image grow to fill its allowed space
                height: "auto",
                borderRadius: "17px",
                boxShadow: "0 6px 24px #4f46e544",
                objectFit: "contain",
                border: "5px solid #2563eb22",
                margin: "0 auto"
              }}
              onError={e => { e.currentTarget.style.display="none"; }} // optional: hides image if missing
            />
          </div>
        </div>

        {/* IMAZER */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            background: "rgba(255,255,255,0.21)",
            borderRadius: "20px",
            boxShadow: "0 6px 24px #6366f119",
            overflow: "hidden",
            marginTop: "2.5rem",
          }}
        >
          {/* Left: Text */}
          <div style={{ flex: 1.15, padding: "2.5rem 2rem", minWidth: 0 }}>
            <div style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.3rem" }}>IMAZER</div>
            <ul style={{ fontSize: "1.21rem", color: "#1e293b", lineHeight: 1.7, margin: 0, paddingLeft: 24 }}>
              <li>
                Designed and developed a Python-based image resizing application with a Graphical User Interface (GUI)
                for intuitive user interaction and seamless image resizing.
              </li>
              <li>
                Integrated multiple Python packages and libraries to support resizing images in various formats, ensuring high performance and versatility.
              </li>
              <li>
                Implemented efficient algorithms for resizing images to custom dimensions, providing users with a streamlined experience across different image formats.
              </li>
            </ul>
          </div>
          <div style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2.5rem 2rem"
          }}>
            <img
              src="/Imazer.jpg"
              alt="IMAZER Screenshot"
              style={{
                maxWidth: "420px",
                width: "100%",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 6px 24px #4f46e533",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        {/* CAREATHON */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            background: "rgba(255,255,255,0.21)",
            borderRadius: "20px",
            boxShadow: "0 6px 24px #6366f119",
            overflow: "hidden",
            marginTop: "2.5rem",
          }}
        >
          {/* Left: Text */}
          <div style={{ flex: 1.15, padding: "2.5rem 2rem", minWidth: 0 }}>
            <div style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 0 }}>CAREATHON</div>
            <ul style={{ fontSize: "1.21rem", color: "#1e293b", lineHeight: 1.7, margin: 0, paddingLeft: 24 }}>
              <li>
                Developed 'CAREATHON', an accessibility tool using Python, enabling speech-to-text, text-to-speech, and translation functionalities to assist individuals with speech and hearing impairments.
              </li>
              <li>
                Leveraged Python libraries and packages to build robust speech and language processing capabilities, facilitating seamless communication for users with impairments.
              </li>
              <li>
                This contributes to a healthcare initiative by creating a tool that allows people with speech and hearing disabilities to express their thoughts and engage in conversations effectively.
              </li>
            </ul>
          </div>
          <div style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2.5rem 2rem"
          }}>
            <img
              src="/Careathon.jpg"
              alt="CAREATHON Screenshot"
              style={{
                maxWidth: "390px",
                width: "100%",
                height: "auto",
                borderRadius: "15px",
                boxShadow: "0 6px 24px #4f46e533",
                objectFit: "contain",
                border: "5px solid #7c3aed"
              }}
            />
          </div>
        </div>

        <BackToHomeButton />
      </div>
    </div>
  );
}