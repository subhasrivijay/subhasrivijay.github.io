import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  // // Add your announcements here!
  // const announcements = [
  //   {
  //     date: "2024-06-08",
  //     text: 'Portfolio site launched! 🚀',
  //   },
  //   {
  //     date: "2024-05-20",
  //     text: 'Presented research at JHU student research symposium.',
  //   },
  //   // Add more as needed...
  // ];

  const menuItems = [
    { label: 'Projects', path: '/projects', emoji: '🛠️' },
    { label: 'Resume', path: '/resume', emoji: '📄' },
    { label: 'Experience', path: '/experience', emoji: '💼' },
    { label: 'More About Me', path: '/more-about-me', emoji: '🧩' },
    { label: 'Contact', path: '/contact', emoji: '✉️' },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(120deg, #e0e7ff 0%, #fdf7ff 60%, #f1f8ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>
        {`
        @keyframes wavingHand {
          0% { transform: rotate(0deg);}
          15% { transform: rotate(14deg);}
          30% { transform: rotate(-8deg);}
          40% { transform: rotate(10deg);}
          50% { transform: rotate(-6deg);}
          60% { transform: rotate(6deg);}
          70% { transform: rotate(0deg);}
          100% { transform: rotate(0deg);}
        }
        `}
      </style>

      <div
        style={{
          background: "rgba(255, 255, 255, 0.80)",
          boxShadow: "0 8px 32px rgba(37,99,235,0.14)",
          backdropFilter: "blur(8px)",
          borderRadius: "32px",
          padding: "3rem 2.5rem 2.3rem 2.5rem",
          marginTop: "5.5rem",
          textAlign: "center",
          maxWidth: 440,
          width: "95vw",
        }}
      >
        <img
          src="/new.jpg"
          alt="Subhasri Vijay"
          style={{
            boxShadow: "0 8px 24px rgba(37,99,235,0.16)",
            width: 176,
            height: 176,
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: '1.3rem',
            border: '5px solid #a5b4fc',
            transition: 'transform 0.3s',
          }}
        />
        <h1
          style={{
            fontSize: "2.45rem",
            margin: "0",
            fontWeight: 700,
            letterSpacing: "-1px",
            lineHeight: 1.15,
          }}
        >
          Hi, I'm <span style={{ color: "#2563eb" }}>Subhasri Vijay</span>
          <span
            style={{
              marginLeft: 10,
              fontSize: "2.1rem",
              display: "inline-block",
              animation: "wavingHand 1.85s infinite",
              transformOrigin: "70% 80%",
            }}
          >
            👋
          </span>
        </h1>
        <div
          style={{
            fontSize: "1.08rem",
            color: "#6366f1",
            fontWeight: 700,
            margin: "1.15rem 0 1.1rem 0",
            letterSpacing: ".01em",
            lineHeight: "1.35"
          }}
        >
          MSE CS Student at Johns Hopkins University <span style={{color:'#0ea5e9'}}> | </span>
          Student Research Assistant <span style={{color:'#0ea5e9'}}> | </span>
          Head Course Assistant <span style={{color:'#0ea5e9'}}> | </span>
          Masson Fellow
          <br/>
          <span style={{color:'#a78bfa', fontWeight:600}}>
            Transforming Ideas into Impactful Solutions for the Future
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.1rem",
          }}
        >
          {menuItems.map(item => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              style={{
                padding: "1.03rem 2.1rem",
                fontSize: "1.09rem",
                borderRadius: 22,
                border: "none",
                fontWeight: 600,
                color: "white",
                background: "linear-gradient(90deg,#6366f1,#2563eb)",
                boxShadow: "0 2px 12px #3730a328",
                margin: "0.37rem 0.14rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.55rem",
                transition: "transform 0.17s, box-shadow 0.17s, background 0.17s",
                position: 'relative',
                outline: "none",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.06)';
                e.currentTarget.style.boxShadow = '0 4px 24px #6366f158';
                e.currentTarget.style.background = 'linear-gradient(90deg,#5eead4,#6366f1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 2px 12px #3730a328';
                e.currentTarget.style.background = 'linear-gradient(90deg,#6366f1,#2563eb)';
              }}
            >
              <span>{item.emoji}</span> {item.label}
            </button>
          ))}
        </div>

        {/* --- Recent Announcements BELOW buttons ---
        <div
          style={{
            width: '100%',
            background: "rgba(236,239,255,0.92)",
            borderRadius: 18,
            padding: '1rem 1.2rem 1.1rem 1.2rem',
            margin: '2rem 0 0 0',
            boxShadow: '0 2px 12px #6366f138',
            border: '1.5px solid #a5b4fc',
            textAlign: 'left',
            maxWidth: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <div
            style={{
              fontSize: '1.13rem',
              fontWeight: 700,
              color: '#3730a3',
              marginBottom: '.55rem',
              letterSpacing: '.01em',
            }}
          >
            📢 Recent Announcements:
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: '1.3em',
              color: '#312e81',
              fontSize: '1rem',
              listStyle: 'disc'
            }}> */}
            {/* {announcements.map((a, idx) => (
              <li key={idx} style={{ marginBottom: '.22em', lineHeight: 1.5 }}>
                <span style={{ fontWeight: 600, color: '#6366f1', marginRight: '.45em', fontSize: '.96em' }}>
                  {a.date}:
                </span>
                {a.text}
              </li>
            ))} */}
          {/* </ul> */}
        {/* </div> */}

      </div>
    </div>
  );
}