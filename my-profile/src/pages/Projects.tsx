// Projects.tsx or any page where you list your projects

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


        {/* IMAZER */}
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

          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "2.5rem 2rem" }}>
            <img
              src="/assets/Imazer.jpg"
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

          {/* Right: Image */}
          <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "2.5rem 2rem" }}>
            <img
              src="/assets/careathon.jpg"
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