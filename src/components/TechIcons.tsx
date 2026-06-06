'use client';

import { ReactNode } from 'react';

export const ReactIcon = () => (
  <svg width="36" height="36" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="9" fill="#61DAFB" />
    <ellipse cx="50" cy="50" rx="46" ry="16" fill="none" stroke="#61DAFB" strokeWidth="3.5" />
    <ellipse cx="50" cy="50" rx="46" ry="16" fill="none" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="50" rx="46" ry="16" fill="none" stroke="#61DAFB" strokeWidth="3.5" transform="rotate(120 50 50)" />
  </svg>
);

export const NextIcon = () => (
  <svg width="36" height="36" viewBox="0 0 180 180" fill="none">
    <circle cx="90" cy="90" r="90" fill="black" />
    <path d="M149.508 157.52L69.142 54H54V125.97H66.154V69.384L140 164.845A89.63 89.63 0 00149.508 157.52Z" fill="url(#cng1)" />
    <rect x="115" y="54" width="12" height="72" fill="url(#cng2)" />
    <defs>
      <linearGradient id="cng1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="cng2" x1="121" y1="54" x2="120.8" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const TailwindIcon = () => (
  <svg width="32" height="20" viewBox="0 0 54 33" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z" fill="#38BDF8" />
  </svg>
);

export const NodeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 256 289" fill="none">
    <path d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915L81.623 264.613c-5.3-2.915-2.65-3.975-.93-4.505 7.155-2.385 8.48-2.915 15.9-7.156.795-.53 1.855-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.739-61.126c1.06-.53 1.59-1.59 1.59-2.916V83.578c0-1.325-.53-2.385-1.59-2.915L128.661 19.537c-1.06-.53-2.385-.53-3.18 0L19.742 80.663c-1.06.53-1.59 1.855-1.59 2.915v122.252c0 1.06.53 2.385 1.59 2.916l28.887 16.696c15.635 7.95 25.443-1.325 25.443-10.6V94.974c0-1.59 1.325-3.18 3.18-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.133c0 20.936-11.395 32.861-31.271 32.861-6.095 0-10.865 0-24.381-6.625L11.13 224.724C4.24 220.748 0 213.063 0 204.848V82.596c0-8.215 4.24-15.9 11.13-19.876L116.869 1.594c6.625-3.71 15.635-3.71 22.26 0l105.74 61.126c6.89 3.975 11.13 11.66 11.13 19.876v122.252c0 8.215-4.24 15.9-11.13 19.876l-105.74 61.126c-3.445 1.59-7.42 2.65-11.129 2.65" fill="#8BBF3D" />
  </svg>
);

export const PythonIcon = () => (
  <svg width="36" height="36" viewBox="0 0 256 255">
    <defs>
      <linearGradient id="cpya" x1="12%" y1="12%" x2="80%" y2="78%">
        <stop offset="0%" stopColor="#387EB8" /><stop offset="100%" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="cpyb" x1="19%" y1="20%" x2="91%" y2="88%">
        <stop offset="0%" stopColor="#FFE052" /><stop offset="100%" stopColor="#FFC331" />
      </linearGradient>
    </defs>
    <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zm-34.61 19.217c6.129 0 11.12 4.99 11.12 11.12 0 6.129-4.991 11.12-11.12 11.12-6.129 0-11.12-4.991-11.12-11.12 0-6.13 4.991-11.12 11.12-11.12z" fill="url(#cpya)" />
    <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.519 33.897zm34.855-19.218c-6.129 0-11.12-4.99-11.12-11.12 0-6.129 4.991-11.12 11.12-11.12 6.129 0 11.12 4.991 11.12 11.12 0 6.13-4.991 11.12-11.12 11.12z" fill="url(#cpyb)" />
  </svg>
);

export const FlaskIcon = () => (
  <svg width="32" height="36" viewBox="0 0 120 140">
    <rect x="46" y="4" width="28" height="40" rx="4" fill="none" stroke="#fff" strokeWidth="4" />
    <line x1="38" y1="4" x2="82" y2="4" stroke="#fff" strokeWidth="4" />
    <path d="M46 44 L12 118 Q8 134 60 134 Q112 134 108 118 L74 44 Z" fill="none" stroke="#fff" strokeWidth="4" />
    <path d="M28 106 Q30 128 60 130 Q90 128 92 106 Z" fill="rgba(56,189,248,0.35)" />
    <circle cx="42" cy="98" r="4" fill="rgba(255,255,255,0.3)" />
    <circle cx="70" cy="88" r="3" fill="rgba(255,255,255,0.25)" />
  </svg>
);

export const MongoIcon = () => (
  <svg width="24" height="36" viewBox="0 0 256 549">
    <path d="M175.622 61.108C152.612 33.807 132.834 5.556 128.749.01c0 0-.816 1.156-2.273 3.183-2.273 3.183-6.456 8.88-11.62 16.608-5.164 7.728-10.817 16.956-15.97 26.95-5.152 9.992-9.774 20.665-13.337 31.565-3.562 10.9-5.99 22.087-6.956 33.283-.97 11.196-.361 22.553 2.19 33.478 2.55 10.922 6.979 21.525 13.052 31.14 6.073 9.614 13.828 18.28 22.686 25.47L128 548.683l11.474-346.996c8.855-7.19 16.607-15.856 22.68-25.47 6.073-9.615 10.499-20.218 13.05-31.14 2.551-10.925 3.16-22.282 2.19-33.478-.966-11.196-3.394-22.383-6.956-33.283a140.89 140.89 0 00-1.816-5.208" fill="#599636" />
    <path d="M128.749.01S93.24 53.298 88.198 104.6c-2.447 24.671 2.371 48.708 14.362 68.958 11.99 20.25 30.37 36.815 52.8 47.06L128 548.683V.01h.749z" fill="#6CAC48" />
  </svg>
);

export const FirebaseIcon = () => (
  <svg width="30" height="36" viewBox="0 0 256 351">
    <path d="M1.253 280.732l1.605-3.131 99.353-188.518-44.15-83.475C54.392-1.283 45.074.474 43.87 8.244L1.253 280.732z" fill="#FFA000" />
    <path d="M134.417 148.974l32.039-32.812-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.09-.53 1.011 31.678 59.308z" fill="#F57F17" />
    <path d="M1.253 280.732l.817-.634 98.582-225.992 33.768 63.601L1.253 280.732z" fill="#FFCA28" />
    <path d="M254.747 280.732L147.18 48.626c-2.857-5.805-10.282-7.758-14.361-3.347L1.253 280.732l128.535 72.489a26.866 26.866 0 0026.972 0l98.987-72.489z" fill="#FFA000" />
  </svg>
);

export const MUIIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 32" fill="none">
    <path d="M21.333 4L14 8.267V16.8l7.333-4.267V4z" fill="#00B0FF" />
    <path d="M21.333 4v8.533L28.667 16.8V8.267L21.333 4z" fill="#0081CB" />
    <path d="M14 8.267L7.333 12.533V21.067L14 16.8V8.267z" fill="#00B0FF" />
    <path d="M7.333 12.533v8.534L14 25.333V16.8L7.333 12.533z" fill="#0081CB" />
    <path d="M14 16.8v8.533L21.333 29.6 28.667 25.333V16.8L21.333 21.067 14 16.8z" fill="#00B0FF" />
    <path d="M21.333 12.533L14 16.8l7.333 4.267L28.667 16.8l-7.334-4.267z" fill="#00B0FF" />
  </svg>
);

export const FramerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M4 0h16v8h-8L4 0z" fill="#FF0055" />
    <path d="M4 8h8l8 8H4V8z" fill="#DD0055" />
    <path d="M4 16h8l-8 8V16z" fill="#CC0044" />
  </svg>
);

export const TypeScriptIcon = () => (
  <svg width="36" height="36" viewBox="0 0 128 128">
    <rect width="128" height="128" rx="12" fill="#3178c6" />
    <path d="M69 100.2V112c2.5 1.3 5.5 2.3 8.8 3 3.3.7 6.8 1 10.5 1 3.6 0 7-.3 10.2-1 3.2-.7 6-1.8 8.4-3.4 2.4-1.5 4.2-3.5 5.6-5.9 1.3-2.4 2-5.3 2-8.8 0-2.5-.4-4.7-1.1-6.6-.8-1.9-1.8-3.5-3.2-5-1.3-1.4-2.9-2.7-4.7-3.8-1.8-1.1-3.8-2.2-5.9-3.1-1.5-.7-2.9-1.4-4.1-2-1.2-.7-2.2-1.3-3-2-.8-.7-1.5-1.4-1.9-2.2-.5-.8-.7-1.7-.7-2.8 0-1 .2-1.8.7-2.6.4-.7 1.1-1.4 1.9-1.9.8-.5 1.8-.9 2.9-1.2 1.1-.3 2.4-.4 3.8-.4 1 0 2.1.1 3.2.3 1.1.2 2.2.5 3.3.9 1.1.4 2.1.9 3 1.5 1 .6 1.8 1.3 2.5 2.1V58c-2.2-1.1-4.7-2-7.5-2.5-2.8-.6-5.8-.8-9-.8-3.5 0-6.8.4-9.9 1.1-3.1.8-5.8 1.9-8 3.5-2.3 1.5-4 3.5-5.3 5.8-1.3 2.3-1.9 5-1.9 8.2 0 4.2 1.2 7.7 3.7 10.6 2.5 2.9 6.2 5.3 11.1 7.3 1.6.6 3.1 1.3 4.5 2 1.4.7 2.7 1.4 3.7 2.1 1.1.7 1.9 1.6 2.5 2.5.6.9.9 2 .9 3.2 0 .9-.2 1.8-.6 2.5-.4.7-1 1.4-1.8 1.9-.8.5-1.8.9-3 1.2-1.2.3-2.6.4-4.1.4-2.8 0-5.6-.6-8.4-1.7-2.8-1.1-5.3-2.8-7.5-5zM49.7 67h14.4V56H22v11h14.4v44h13.3V67z" fill="white" />
  </svg>
);

export const ViteIcon = () => (
  <svg width="36" height="36" viewBox="0 0 410 404" fill="none">
    <path d="M399.641 59.525L215.643 388.545c-3.807 6.817-13.646 6.817-17.453 0L10.362 59.525c-4.262-7.636 2.636-16.662 11.139-14.594L204.477 94.01c1.629.397 3.317.397 4.946 0l182.976-49.079c8.503-2.068 15.401 6.958 11.139 14.594z" fill="url(#cvite_a)" />
    <path d="M292.965 1.477L156.801 28.789c-2.736.549-4.745 2.96-4.831 5.755l-7.957 260.305c-.114 3.7 3.58 6.327 6.959 4.949l59.166-24.12c3.707-1.51 7.738 1.193 7.573 5.078l-4.985 117.668c-.181 4.262 4.607 6.816 7.983 4.254l21.259-16.136c3.376-2.562 8.163-.008 7.983 4.254l-3.167 74.892c-.284 6.71 8.597 9.089 11.516 3.085l1.95-4.013 107.325-219.534c1.827-3.74-.92-7.987-5.016-7.753l-57.817 3.296c-4.366.249-7.395-4.3-5.507-8.264L292.965 1.477z" fill="url(#cvite_b)" />
    <defs>
      <linearGradient id="cvite_a" x1="6.7" y1="32.7" x2="235.2" y2="344.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" /><stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient id="cvite_b" x1="194.7" y1="8.8" x2="236.1" y2="293" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFBD4F" /><stop offset="1" stopColor="#FF9710" />
      </linearGradient>
    </defs>
  </svg>
);

export const ExpressIcon = () => (
  <svg width="36" height="36" viewBox="0 0 128 128">
    <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.22 3.71l24.19-32.87-22.56-29c4.51-.86 7.2.23 9.64 3.74 5.23 7.53 10.94 14.73 16.78 22.57 5.94-7.96 11.63-15.17 16.84-22.69 2.45-3.55 5.02-4.66 9.33-3.6l-8.41 11.12c-4.81 6.36-9.75 12.63-14.37 19.14-1.16 1.64-1.07 3.17.08 4.78 7.05 9.72 14 19.51 21.76 30.18zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 5.24-38.59-3.72C3.29 86.56.63 78.47.34 69.59c0-1.86-.06-3.71-.09-5.57.36-.61.72-1.22 1.08-1.83zm5.8 1.17h50.43c-.33-16.06-10.33-27.47-24.16-27.56-15.13-.12-25.78 11.02-26.27 27.56z" fill="white" />
  </svg>
);

export const AngularIcon = () => (
  <svg width="36" height="36" viewBox="0 0 256 272" fill="none">
    <path d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45L125.908 271.94 21.737 212.07.1 45.522z" fill="#E23237" />
    <path d="M255.104 44.725L125.908.697v271.243l108.196-60.763 20.919-166.452h.081z" fill="#B52E31" />
    <path d="M126.107 32.274L63.084 174.178h23.464l12.689-31.675h55.574l12.689 31.675h23.464L126.107 32.274zm0 52.093l19.382 46.85h-38.764l19.382-46.85z" fill="white" />
  </svg>
);

export const FastAPIIcon = () => (
  <svg width="36" height="36" viewBox="0 0 154 154">
    <circle cx="77" cy="77" r="77" fill="#009688" />
    <path d="M81.375 30.557L57.685 77.32h23.69l-4.037 46.123L100.028 76.68H76.338l5.037-46.123z" fill="white" />
  </svg>
);

export const SQLiteIcon = () => (
  <svg width="36" height="36" viewBox="0 0 256 256">
    <rect width="256" height="256" rx="24" fill="#044a64" />
    <text x="128" y="145" textAnchor="middle" dominantBaseline="middle" fontSize="68" fontWeight="700" fontFamily="Arial, sans-serif" fill="white">SQ</text>
  </svg>
);

export const JWTIcon = () => (
  <svg width="36" height="36" viewBox="0 0 101 101">
    <path d="M57.8 0h-14.6l-1.4 27.5 8.7 7.2 8.7-7.2L57.8 0z" fill="#fff" />
    <path d="M43.2 0h14.6l1.4 27.5-8.7 7.2-8.7-7.2L43.2 0z" fill="#00f2e6" />
    <path d="M43.2 101h14.6l1.4-27.5-8.7-7.2-8.7 7.2L43.2 101z" fill="#00f2e6" />
    <path d="M57.8 101h-14.6l-1.4-27.5 8.7-7.2 8.7 7.2L57.8 101z" fill="#fff" />
    <path d="M0 38.5l4.5 13.9 26-8.4 3-10.8-7.2-7.9L0 38.5z" fill="#00b9f1" />
    <path d="M101 62.5l-4.5-13.9-26 8.4-3 10.8 7.2 7.9L101 62.5z" fill="#d63aff" />
    <path d="M26.3 25.3l-4.5 13.9 26 8.4 10.2-3.5 0-10.7L26.3 25.3z" fill="#fb015b" />
    <path d="M74.7 75.7l4.5-13.9-26-8.4-10.2 3.5 0 10.7L74.7 75.7z" fill="#222" />
  </svg>
);

export const KnexIcon = () => (
  <svg width="36" height="36" viewBox="0 0 128 128">
    <rect width="128" height="128" rx="16" fill="#e26522" />
    <text x="64" y="78" textAnchor="middle" dominantBaseline="middle" fontSize="46" fontWeight="800" fontFamily="Arial, sans-serif" fill="white">K</text>
  </svg>
);

export const NgRxIcon = () => (
  <svg width="36" height="36" viewBox="0 0 256 256">
    <rect width="256" height="256" rx="28" fill="#412846" />
    <path d="M128 40l80 138.56H48L128 40z" fill="#BA2BD2" />
    <path d="M128 88l48 83.14H80L128 88z" fill="white" />
  </svg>
);

export const GroqIcon = () => (
  <svg width="36" height="36" viewBox="0 0 128 128">
    <rect width="128" height="128" rx="16" fill="#f55036" />
    <text x="64" y="78" textAnchor="middle" dominantBaseline="middle" fontSize="40" fontWeight="800" fontFamily="Arial, sans-serif" fill="white">AI</text>
  </svg>
);

export const AngularMaterialIcon = () => (
  <svg width="36" height="36" viewBox="0 0 256 256">
    <rect width="256" height="256" rx="28" fill="#6746c3" />
    <rect x="50" y="70" width="66" height="66" rx="6" fill="white" opacity="0.9" />
    <rect x="140" y="70" width="66" height="66" rx="6" fill="white" opacity="0.6" />
    <rect x="50" y="150" width="66" height="66" rx="6" fill="white" opacity="0.4" />
    <rect x="140" y="150" width="66" height="66" rx="6" fill="white" opacity="0.2" />
  </svg>
);

// Map tech names (including partial matches) to icon components
const iconMap: Record<string, () => ReactNode> = {
  'react': ReactIcon,
  'next': NextIcon,
  'tailwind': TailwindIcon,
  'node': NodeIcon,
  'python': PythonIcon,
  'flask': FlaskIcon,
  'mongodb': MongoIcon,
  'firebase': FirebaseIcon,
  'mui': MUIIcon,
  'material ui': MUIIcon,
  'framer': FramerIcon,
  'typescript': TypeScriptIcon,
  'express': ExpressIcon,
  'angular material': AngularMaterialIcon,
  'angular': AngularIcon,
  'fastapi': FastAPIIcon,
  'sqlite': SQLiteIcon,
  'jwt': JWTIcon,
  'bcrypt': JWTIcon,
  'knex': KnexIcon,
  'ngrx': NgRxIcon,
  'groq': GroqIcon,
  'llama': GroqIcon,
  'vite': ViteIcon,
};

/**
 * Get the SVG icon component for a tech name.
 * Falls back to the emoji string if no SVG match is found.
 */
export function getTechIcon(techName: string): ReactNode {
  const lower = techName.toLowerCase();

  // Try exact key matches first, then partial
  // Check "angular material" before "angular" by sorting keys longest-first
  const sortedKeys = Object.keys(iconMap).sort((a, b) => b.length - a.length);
  for (const key of sortedKeys) {
    if (lower.includes(key)) {
      const IconComponent = iconMap[key];
      return <IconComponent />;
    }
  }

  return null;
}
