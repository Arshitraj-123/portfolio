'use client';

import { useState, useEffect, useRef, CSSProperties, ReactNode } from "react";

function useVisible(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

interface CardProps {
  delay?: number;
  vis: boolean;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}

function Card({ delay = 0, vis, style, className = "", children }: CardProps) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        ...style,
        opacity: vis ? 1 : 0,
        transform: vis
          ? hov ? "translateY(-7px) scale(1.05)" : "translateY(0) scale(1)"
          : "translateY(14px) scale(0.88)",
        transition: `opacity .45s ease ${delay}ms, transform .35s ease ${delay}ms, box-shadow .25s ease`,
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
}

const ReactIcon = () => (
  <svg width="52" height="52" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="9" fill="#61DAFB" />
    <ellipse cx="50" cy="50" rx="46" ry="16" fill="none" stroke="#61DAFB" strokeWidth="3.5" />
    <ellipse cx="50" cy="50" rx="46" ry="16" fill="none" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="46" ry="16" fill="none" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(120 50 50)" />
  </svg>
);

const NextIcon = () => (
  <svg width="54" height="54" viewBox="0 0 180 180" fill="none">
    <defs>
      <linearGradient id="ng1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="ng2" x1="121" y1="54" x2="120.8" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
    <mask id="nxm" style={{ maskType: "alpha" } as CSSProperties} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="black" />
    </mask>
    <g mask="url(#nxm)">
      <circle cx="90" cy="90" r="90" fill="black" />
      <path d="M149.508 157.52L69.142 54H54V125.97H66.154V69.384L140 164.845A89.63 89.63 0 00149.508 157.52Z" fill="url(#ng1)" />
      <rect x="115" y="54" width="12" height="72" fill="url(#ng2)" />
    </g>
  </svg>
);

const TailwindIcon = () => (
  <svg width="38" height="24" viewBox="0 0 54 33" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z" fill="#38BDF8" />
  </svg>
);

const NodeIcon = () => (
  <svg width="52" height="52" viewBox="0 0 256 289" fill="none">
    <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915L81.623 264.613c-5.3-2.915-2.65-3.975-.93-4.505 7.155-2.385 8.48-2.915 15.9-7.156.795-.53 1.855-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.739-61.126c1.06-.53 1.59-1.59 1.59-2.916V83.578c0-1.325-.53-2.385-1.59-2.915L128.661 19.537c-1.06-.53-2.385-.53-3.18 0L19.742 80.663c-1.06.53-1.59 1.855-1.59 2.915v122.252c0 1.06.53 2.385 1.59 2.916l28.887 16.696c15.635 7.95 25.443-1.325 25.443-10.6V94.974c0-1.59 1.325-3.18 3.18-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.133c0 20.936-11.395 32.861-31.271 32.861-6.095 0-10.865 0-24.381-6.625L11.13 224.724C4.24 220.748 0 213.063 0 204.848V82.596c0-8.215 4.24-15.9 11.13-19.876L116.869 1.594c6.625-3.71 15.635-3.71 22.26 0l105.74 61.126c6.89 3.975 11.13 11.66 11.13 19.876v122.252c0 8.215-4.24 15.9-11.13 19.876l-105.74 61.126c-3.445 1.59-7.42 2.65-11.129 2.65" fill="#8BBF3D" />
    <path d="M160.661 204.319c-46.217 0-55.757-21.2-55.757-39.016 0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65 2.12 14.31 8.215 21.2 35.881 21.2 22.26 0 31.536-5.035 31.536-16.961 0-6.89-2.65-11.925-37.466-15.37-28.887-2.915-46.747-9.275-46.747-32.331 0-21.465 18.126-34.186 48.487-34.186 34.186 0 50.872 11.66 53.007 37.466 0 .795-.265 1.59-.795 2.12-.53.53-1.325.795-2.12.795h-13.78c-1.325 0-2.65-1.06-2.916-2.385-3.18-14.575-11.395-19.611-33.92-19.611-24.911 0-27.827 8.745-27.827 15.37 0 7.95 3.445 10.335 36.406 14.84 32.696 4.505 47.8 10.865 47.8 32.861.265 23.32-19.346 37.071-52.139 37.071" fill="#8BBF3D" />
  </svg>
);

const MUIIcon = () => (
  <svg width="50" height="50" viewBox="0 0 36 32" fill="none">
    <path d="M21.333 4L14 8.267V16.8l7.333-4.267V4z" fill="#00B0FF" />
    <path d="M21.333 4v8.533L28.667 16.8V8.267L21.333 4z" fill="#0081CB" />
    <path d="M14 8.267L7.333 12.533V21.067L14 16.8V8.267z" fill="#00B0FF" />
    <path d="M7.333 12.533v8.534L14 25.333V16.8L7.333 12.533z" fill="#0081CB" />
    <path d="M14 16.8v8.533L21.333 29.6 28.667 25.333V16.8L21.333 21.067 14 16.8z" fill="#00B0FF" />
    <path d="M21.333 12.533L14 16.8l7.333 4.267L28.667 16.8l-7.334-4.267z" fill="#00B0FF" />
  </svg>
);

const FramerIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
    <path d="M4 0h16v8h-8L4 0z" fill="#FF0055" />
    <path d="M4 8h8l8 8H4V8z" fill="#DD0055" />
    <path d="M4 16h8l-8 8V16z" fill="#CC0044" />
  </svg>
);

const PythonIcon = () => (
  <svg width="70" height="70" viewBox="0 0 256 255">
    <defs>
      <linearGradient id="pya" x1="12%" y1="12%" x2="80%" y2="78%">
        <stop offset="0%" stopColor="#387EB8" /><stop offset="100%" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="pyb" x1="19%" y1="20%" x2="91%" y2="88%">
        <stop offset="0%" stopColor="#FFE052" /><stop offset="100%" stopColor="#FFC331" />
      </linearGradient>
    </defs>
    <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zm-34.61 19.217c6.129 0 11.12 4.99 11.12 11.12 0 6.129-4.991 11.12-11.12 11.12-6.129 0-11.12-4.991-11.12-11.12 0-6.13 4.991-11.12 11.12-11.12z" fill="url(#pya)" />
    <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.519 33.897zm34.855-19.218c-6.129 0-11.12-4.99-11.12-11.12 0-6.129 4.991-11.12 11.12-11.12 6.129 0 11.12 4.991 11.12 11.12 0 6.13-4.991 11.12-11.12 11.12z" fill="url(#pyb)" />
  </svg>
);

const FlaskIcon = () => (
  <svg width="62" height="70" viewBox="0 0 120 140">
    <rect x="46" y="4" width="28" height="40" rx="4" fill="none" stroke="#fff" strokeWidth="4" />
    <line x1="38" y1="4" x2="82" y2="4" stroke="#fff" strokeWidth="4" />
    <path d="M46 44 L12 118 Q8 134 60 134 Q112 134 108 118 L74 44 Z" fill="none" stroke="#fff" strokeWidth="4" />
    <path d="M28 106 Q30 128 60 130 Q90 128 92 106 Z" fill="rgba(56,189,248,0.35)" />
    <circle cx="42" cy="98" r="4" fill="rgba(255,255,255,0.3)" />
    <circle cx="70" cy="88" r="3" fill="rgba(255,255,255,0.25)" />
  </svg>
);

const MongoIcon = () => (
  <svg width="50" height="70" viewBox="0 0 256 549">
    <path d="M175.622 61.108C152.612 33.807 132.834 5.556 128.749.01c0 0-.816 1.156-2.273 3.183-2.273 3.183-6.456 8.88-11.62 16.608-5.164 7.728-10.817 16.956-15.97 26.95-5.152 9.992-9.774 20.665-13.337 31.565-3.562 10.9-5.99 22.087-6.956 33.283-.97 11.196-.361 22.553 2.19 33.478 2.55 10.922 6.979 21.525 13.052 31.14 6.073 9.614 13.828 18.28 22.686 25.47L128 548.683l11.474-346.996c8.855-7.19 16.607-15.856 22.68-25.47 6.073-9.615 10.499-20.218 13.05-31.14 2.551-10.925 3.16-22.282 2.19-33.478-.966-11.196-3.394-22.383-6.956-33.283a140.89 140.89 0 00-1.816-5.208" fill="#599636" />
    <path d="M128.749.01S93.24 53.298 88.198 104.6c-2.447 24.671 2.371 48.708 14.362 68.958 11.99 20.25 30.37 36.815 52.8 47.06L128 548.683V.01h.749z" fill="#6CAC48" />
    <path d="M128.749 502.674s-1.15-1.022-3.09-2.873c-1.94-1.852-4.67-4.544-7.544-7.938-2.875-3.394-5.9-7.48-8.546-12.03-2.647-4.552-4.905-9.564-6.378-14.832a54.088 54.088 0 01-1.844-16.174c.314-5.496 1.524-10.948 3.605-16.13a54.04 54.04 0 016.756-13.396c2.79-4.054 6.028-7.882 9.605-11.51a94.38 94.38 0 018.436-7.738V502.674z" fill="#3F9142" />
  </svg>
);

const FirebaseIcon = () => (
  <svg width="60" height="70" viewBox="0 0 256 351">
    <path d="M1.253 280.732l1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.244L1.253 280.732z" fill="#FFA000" />
    <path d="M134.417 148.974l32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.09-.53 1.011 31.678 59.308z" fill="#F57F17" />
    <path d="M1.253 280.732l.817-.634 98.582-225.992 33.768 63.601L1.253 280.732z" fill="#FFCA28" />
    <path d="M254.747 280.732L147.18 48.626c-2.857-5.805-10.282-7.758-14.361-3.347L1.253 280.732l128.535 72.489a26.866 26.866 0 0026.972 0l98.987-72.489z" fill="#FFA000" />
    <path d="M134.417 148.974l-32.039 59.308 32.039 37.726 32.039-37.726-32.039-59.308z" fill="#F57F17" />
  </svg>
);


export default function TechStackSection() {
  const [ref, vis] = useVisible(0.1);
  const d = (i: number) => i * 45;

  const sm = (extra: CSSProperties): CSSProperties => ({
    borderRadius: 18,
    display: "flex", alignItems: "center", justifyContent: "center",
    overflow: "hidden",
    ...extra,
  });

  return (
    <section id="techstack" style={{
      background: "#1a1e2e", minHeight: "100vh",
      fontFamily: "'Inter', sans-serif",
    }}>
      <div ref={ref} style={{
        maxWidth: 960, margin: "0 auto", padding: "clamp(24px, 5vw, 48px) clamp(16px, 4vw, 36px)",
        display: "flex", flexDirection: "column", gap: 13,
      }}>

        {/* ── DESKTOP bento grid (hidden on mobile via CSS class) ── */}
        <div className="hidden md:grid" style={{
          gridTemplateColumns: "170px 90px 90px 90px 90px 1fr",
          gridTemplateRows: "90px 90px",
          gap: 12,
        }}>
          {/* JS big */}
          <Card delay={d(0)} vis={vis} style={{
            gridRow: "1/3", gridColumn: "1",
            background: "#f5c518", borderRadius: 24,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "4rem", fontWeight: 900, color: "#000",
          }}>JS</Card>

          {/* React */}
          <Card delay={d(1)} vis={vis} style={sm({ background: "#4a5568", gridRow: "1", gridColumn: "2" })}>
            <ReactIcon />
          </Card>

          {/* Next.js */}
          <Card delay={d(2)} vis={vis} style={sm({ background: "#0a0a0a", gridRow: "1", gridColumn: "3" })}>
            <NextIcon />
          </Card>

          {/* HTML5 */}
          <Card delay={d(3)} vis={vis} style={sm({ background: "#e44d26", gridRow: "1", gridColumn: "4" })}>
            <span style={{ fontSize: "2.3rem", fontWeight: 900, color: "#fff" }}>5</span>
          </Card>

          {/* CSS3 */}
          <Card delay={d(4)} vis={vis} style={sm({ background: "#2965f1", gridRow: "1", gridColumn: "5" })}>
            <span style={{ fontSize: "2.3rem", fontWeight: 900, color: "#fff" }}>3</span>
          </Card>

          {/* Tailwind pill */}
          <Card delay={d(5)} vis={vis} style={{
            gridRow: "1", gridColumn: "6",
            background: "#0f3b3b", borderRadius: 18,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
            color: "#38bdf8", fontWeight: 700, fontSize: "1.1rem",
          }}>
            <TailwindIcon /> Tailwind
          </Card>

          {/* Node.js */}
          <Card delay={d(6)} vis={vis} style={sm({ background: "#233d1b", gridRow: "2", gridColumn: "2" })}>
            <NodeIcon />
          </Card>

          {/* Express */}
          <Card delay={d(7)} vis={vis} style={sm({ background: "#6b7280", gridRow: "2", gridColumn: "3" })}>
            <span style={{ fontSize: "1.25rem", fontWeight: 300, color: "#ddd", letterSpacing: 2 }}>ex</span>
          </Card>

          {/* MUI */}
          <Card delay={d(8)} vis={vis} style={sm({ background: "#0d1b6e", gridRow: "2", gridColumn: "4" })}>
            <MUIIcon />
          </Card>

          {/* Framer Motion */}
          <Card delay={d(9)} vis={vis} style={sm({ background: "#1a0533", gridRow: "2", gridColumn: "5" })}>
            <FramerIcon />
          </Card>

          {/* SASS pill */}
          <Card delay={d(10)} vis={vis} style={{
            gridRow: "2", gridColumn: "6",
            background: "#d61a7f", borderRadius: 18,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
            color: "#fff", fontWeight: 800, fontSize: "1.15rem",
          }}>
            <svg width="30" height="30" viewBox="0 0 64 64">
              <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
                fontSize="38" fontFamily="Georgia,serif" fontStyle="italic" fill="#fff">S</text>
            </svg>
            SASS
          </Card>
        </div>

        {/* ── MOBILE simple grid (3 cols, shown only below md) ── */}
        <div className="grid md:hidden" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {/* JS */}
          <Card delay={d(0)} vis={vis} style={{
            background: "#f5c518", borderRadius: 16, height: 80,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2.2rem", fontWeight: 900, color: "#000",
          }}>JS</Card>

          {/* React */}
          <Card delay={d(1)} vis={vis} style={sm({ background: "#4a5568", borderRadius: 16, height: 80 })}>
            <ReactIcon />
          </Card>

          {/* Next.js */}
          <Card delay={d(2)} vis={vis} style={sm({ background: "#0a0a0a", borderRadius: 16, height: 80 })}>
            <NextIcon />
          </Card>

          {/* HTML5 */}
          <Card delay={d(3)} vis={vis} style={sm({ background: "#e44d26", borderRadius: 16, height: 80 })}>
            <span style={{ fontSize: "1.8rem", fontWeight: 900, color: "#fff" }}>5</span>
          </Card>

          {/* CSS3 */}
          <Card delay={d(4)} vis={vis} style={sm({ background: "#2965f1", borderRadius: 16, height: 80 })}>
            <span style={{ fontSize: "1.8rem", fontWeight: 900, color: "#fff" }}>3</span>
          </Card>

          {/* Tailwind */}
          <Card delay={d(5)} vis={vis} style={{
            background: "#0f3b3b", borderRadius: 16, height: 80,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            color: "#38bdf8", fontWeight: 700, fontSize: "0.75rem",
          }}>
            <TailwindIcon /> Tailwind
          </Card>

          {/* Node.js */}
          <Card delay={d(6)} vis={vis} style={sm({ background: "#233d1b", borderRadius: 16, height: 80 })}>
            <NodeIcon />
          </Card>

          {/* Express */}
          <Card delay={d(7)} vis={vis} style={sm({ background: "#6b7280", borderRadius: 16, height: 80 })}>
            <span style={{ fontSize: "1rem", fontWeight: 300, color: "#ddd", letterSpacing: 2 }}>ex</span>
          </Card>

          {/* MUI */}
          <Card delay={d(8)} vis={vis} style={sm({ background: "#0d1b6e", borderRadius: 16, height: 80 })}>
            <MUIIcon />
          </Card>

          {/* Framer */}
          <Card delay={d(9)} vis={vis} style={sm({ background: "#1a0533", borderRadius: 16, height: 80 })}>
            <FramerIcon />
          </Card>

          {/* SASS */}
          <Card delay={d(10)} vis={vis} style={{
            background: "#d61a7f", borderRadius: 16, height: 80,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            color: "#fff", fontWeight: 800, fontSize: "0.75rem",
          }}>
            <svg width="22" height="22" viewBox="0 0 64 64">
              <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
                fontSize="38" fontFamily="Georgia,serif" fontStyle="italic" fill="#fff">S</text>
            </svg>
            SASS
          </Card>

          {/* Typescript (mobile row) */}
          <Card delay={d(11)} vis={vis} style={{
            background: "#1a4080", borderRadius: 16, height: 80,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            gridColumn: "span 3",
          }}>
            <div style={{
              background: "#3178c6", borderRadius: 8, width: 36, height: 36, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.85rem", fontWeight: 900, color: "#fff",
            }}>TS</div>
            <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#fff" }}>TypeScript</span>
          </Card>
        </div>

        {/* ROW 2 — TypeScript + Styled Components (desktop only) */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Card delay={d(11)} vis={vis} style={{
            background: "#1a4080", borderRadius: 20, height: 78,
            display: "flex", alignItems: "center", gap: 18, padding: "0 28px",
          }}>
            <div style={{
              background: "#3178c6", borderRadius: 10,
              width: 50, height: 50, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.15rem", fontWeight: 900, color: "#fff",
            }}>TS</div>
            <span style={{ fontSize: "1.2rem", fontWeight: 600, color: "#fff" }}>Typescript</span>
          </Card>

          <Card delay={d(12)} vis={vis} style={{
            background: "#d81b8c", borderRadius: 20, height: 78,
            display: "flex", alignItems: "center", gap: 18, padding: "0 28px",
          }}>
            <svg width="52" height="52" viewBox="0 0 100 100">
              <ellipse cx="44" cy="68" rx="20" ry="28" fill="#f4a261" opacity="0.9" transform="rotate(-15 44 68)" />
              <ellipse cx="36" cy="60" rx="6" ry="22" fill="#f4a261" transform="rotate(-15 36 60)" />
              <ellipse cx="48" cy="58" rx="6" ry="22" fill="#f4a261" transform="rotate(-10 48 58)" />
              <ellipse cx="60" cy="62" rx="6" ry="18" fill="#f4a261" transform="rotate(-5 60 62)" />
              <line x1="50" y1="10" x2="50" y2="55" stroke="#dba" strokeWidth="4" strokeLinecap="round" />
              <ellipse cx="50" cy="13" rx="6" ry="4" fill="none" stroke="#dba" strokeWidth="2.5" />
              <path d="M50 55 Q60 65 55 75" fill="none" stroke="#dba" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: "1.2rem", fontWeight: 600, color: "#fff" }}>Styled Components</span>
          </Card>
        </div>

        {/* ROW 3 — Python, Flask, MongoDB, Firebase */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }} className="md:grid-cols-4">
          {[
            { bg: "#1b3a4a", label: "Python",   icon: <PythonIcon /> },
            { bg: "#17413b", label: "Flask",    icon: <FlaskIcon /> },
            { bg: "#265c26", label: "MongoDB",  icon: <MongoIcon /> },
            { bg: "#9e7010", label: "Firebase", icon: <FirebaseIcon /> },
          ].map((item, i) => (
            <Card key={item.label} delay={d(13 + i)} vis={vis} style={{
              background: item.bg, borderRadius: 24,
              height: "clamp(140px, 20vw, 200px)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 16,
              color: "#fff", fontWeight: 700, fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
            }}>
              {item.icon}
              {item.label}
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
