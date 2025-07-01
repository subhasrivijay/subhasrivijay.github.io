import BackToHomeButton from "../components/BackToHomeButton";
export default function Contact() {
    return (
      <div style={{
        maxWidth: 500,
        margin: "3rem auto",
        padding: "2.4rem 1.6rem",
        borderRadius: 15,
        background: "white",
        boxShadow: "0 4px 22px #2563eb19"
      }}>
        <h2 style={{ color: "#2563eb", textAlign: "center", marginBottom:"2rem" }}>✉️ Contact Me</h2>
        <div style={{fontSize:"1.16rem", lineHeight:2}}>
          <div>
            <span style={{marginRight:8}}>📧</span>
            <a href="mailto:svijay2@jhu.edu" style={{color:'#2563eb', textDecoration:"none"}}>svijay2@jhu.edu</a>
          </div>
          <div>
            <span style={{marginRight:8}}>🔗</span>
            <a href="https://linkedin.com/in/subhasri-vijay-811a0620a" target="_blank" rel="noopener noreferrer" style={{color:'#2563eb', textDecoration:"none"}}>LinkedIn ↗</a>
          </div>
        </div>
        <div><BackToHomeButton /></div>
      </div>
    );
  }