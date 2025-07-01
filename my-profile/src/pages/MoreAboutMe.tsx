import BackToHomeButton from "../components/BackToHomeButton";

// Helper for bullet-style cards
function FeatureCard({ emoji, title, bullets, img, imgAlt }) {
  return (
    <div
      style={{
        position: "relative",
        background: "rgba(255,255,255,0.58)",
        borderRadius: 24,
        boxShadow: "0 8px 32px #6366f133, 0 2px 8px #4f46e528",
        border: "1.2px solid #c7d2fe",
        marginTop: "2.8rem",
        minHeight: 210,
        display: "flex",
        alignItems: "stretch",
        overflow: "visible",
        transition: "box-shadow 0.28s, transform 0.28s",
        backdropFilter: "blur(10px)",
        backgroundImage: "linear-gradient(116deg,rgba(183,229,248,0.04) 0%,rgba(99,102,241,0.12) 110%)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.025)";
        e.currentTarget.style.boxShadow = "0 19px 60px #6366f17a, 0 2.5px 12px #818cf812";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 32px #6366f133, 0 2px 8px #4f46e528";
      }}
    >
      {/* Floating Emoji Badge */}
      <div style={{
        position: "absolute",
        top: -30,
        left: 34,
        boxShadow: "0 5px 22px #6366f128",
        background: "linear-gradient(135deg,#6366f1 62%,#38bdf8 100%)",
        color: "white",
        width: 56, height: 56,
        borderRadius: "50%",
        border: '3.3px solid #e0e7ff',
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "2rem", zIndex: 2,
        transition: "box-shadow 0.25s"
      }}>
        {emoji}
      </div>
      {/* Content */}
      <div style={{ flex: 1, padding: "2.8rem 2.1rem 2.5rem 2.1rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.29rem", fontWeight: 700, marginTop: 14, color: "#1e293b", letterSpacing: "-0.5px", marginBottom: 6 }}>
          {title}
        </div>
        {/* Bullets */}
        <ul style={{ fontSize: "1.08rem", color: "#374151", lineHeight: 1.53, margin: "0.7em 0 0 0.2em", paddingLeft: "1.2em" }}>
          {bullets.map((point, idx) => (
            <li key={idx} style={{marginBottom: "0.45em"}}>{point}</li>
          ))}
        </ul>
      </div>
      {/* Image */}
      <div style={{
        minWidth: 155,
        maxWidth: 235,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2.7rem 2rem",
      }}>
        <img
          src={img}
          alt={imgAlt}
          style={{
            maxWidth: "200px",
            width: "100%",
            borderRadius: "15px",
            boxShadow: "0 6px 26px #6366f128",
            border: "2px solid #6366f166",
            objectFit: "cover",
            transition: "transform 0.13s, box-shadow 0.13s",
            cursor: "pointer"
          }}
          onMouseOver={e => { e.currentTarget.style.transform = "scale(1.07)"; e.currentTarget.style.boxShadow = "0 10px 32px #5eead41c"; }}
          onMouseOut={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 6px 26px #6366f128"; }}
        />
      </div>
    </div>
  );
}

export default function MoreAboutMe() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "3rem 0",
        background: "linear-gradient(135deg, #e7eafe 0%, #b7e5f8 100%)",
      }}
    >
      <div style={{ maxWidth: 1050, margin: "0 auto", padding: "2rem 2rem 0 2rem" }}>
        {/* Page Header & Tagline */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          background: "rgba(255,255,255,0.68)",
          borderRadius: "20px",
          boxShadow: "0 6px 48px #6366f119",
          padding: "2.2rem 2rem 1.1rem 2rem",
          marginBottom: "2.2rem",
          border: "2px solid #a5b4fc"
        }}>
          <span style={{
            fontSize: '2.1rem',
            color: "#6366f1",
            background: "linear-gradient(90deg,#7dd3fc,#a5b4fc)",
            borderRadius: "50%",
            display: "flex",
            height: "3.3rem",
            width: "3.3rem",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 12px #6d28d912"
          }}>
            👩‍🎓
          </span>
          <div>
            <div style={{
              fontWeight: 700,
              fontSize: "1.32rem",
              color: "#23356d",
              letterSpacing: "-0.01em"
            }}>
              More About Me
            </div>
            <div style={{
              fontWeight: 400,
              fontSize: "1.09rem",
              color: "#6366f1",
              marginTop: 3
            }}>
              MSE CS student at Johns Hopkins University | Student Research Assistant | Head Course Assistant | Masson Fellow<br />
              <span style={{
                color: "#a21caf",
                fontWeight: 600,
                fontStyle: "italic",
                letterSpacing: "-0.01em"
              }}>
                Transforming Ideas into Impactful Solutions for the Future.
              </span>
            </div>
          </div>
        </div>

        {/* Cards with bullet lists */}
        <FeatureCard
          emoji="📷"
          title="Budding Photographer"
          bullets={[
            <>Displayed my photographic work at the <a href="https://museums.jhu.edu/exhibitions/past/evergreen-as-muse-2023/" target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", textDecoration: "underline" }}>Evergreen Exhibition</a> at JHU.</>,
            "Love capturing moments that blend natural light and genuine emotion.",
            "Document daily life and meaningful stories.",
          ]}
          img="/assets/Photograph.jpg"
          imgAlt="Photography"
        />

        <FeatureCard
          emoji="🏆"
          title="Design Thinking at NUS Singapore"
          bullets={[
            <>Earned <b>A+</b> for a healthcare innovation project.</>,
            "Project focused on empathy and research-driven solutions.",
            "One of my proudest international academic experiences."
          ]}
          img="/assets/nus.jpg"
          imgAlt="NUS Singapore"
        />

        <FeatureCard
          emoji="🎨"
          title="Advanced Crafter"
          bullets={[
            "Design intricate paper flowers, leaves, and decor.",
            "Use premium materials like Clairefontaine and Irish Paper.",
            "Employ advanced tools: Big Shot, punchers, embossers.",
            "Mix inking, 3D texturing, and lifelike details."
          ]}
          img="/assets/Craft.jpg"
          imgAlt="Craft Pieces"
        />

        <FeatureCard
          emoji="🎾"
          title="Tennis & Skating for Fun"
          bullets={[
            "Tennis and roller skating are my favorite ways to recharge.",
            "Enjoy focus, movement, and balance outside the classroom.",
            "Value the community and healthy competition."
          ]}
          img="/assets/tennis_skate.jpg"
          imgAlt="Tennis and Skating"
        />

        <div style={{ marginTop: "4.2rem" }}>
          <BackToHomeButton />
        </div>
      </div>
    </div>
  );
}