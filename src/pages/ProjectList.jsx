import { useState, useEffect, useRef } from "react";

const ROAD_COMPLETED = [
  {
    id: 1,
    title:
      "Construction of Internal Roads at Wilayat Wadi Bani Khalid – North Sharqiyah",
    client: "Ministry of Interior",
    value: 515589.25,
    location: "North Sharqiyah",
    year: 2023,
  },
  {
    id: 2,
    title: "Construction of Link Road for Camel Raise @ Barazman Sinaw",
    client: "Abdhullah Satayat Salim Al Wahibi",
    value: 160880.0,
    location: "Barzman, Sinaw",
    year: 2022,
  },
  {
    id: 3,
    title:
      "BOQ. For Internal Road Works (Bituminous combined course Class-B, Inter lock tiles 60mm thk, kerb stone fixing, speed breakers, chain link fencing and storm water channels discharge at Proposed Housing Units External Works, AL",
    client: "Mr. Al Bashayer For Agriculture Products and Cont",
    value: 201190.0,
    location: "Al Bashayer, Adam",
    year: 2021,
  },
];

// ── Road Division → Ongoing (Road_Division_ongoing_project.jpg) ──
const ROAD_ONGOING = [
  {
    id: 1,
    title:
      "Design And Construction Of Link Roads In Wilayat Shinas, North Al Batinah Governorate",
    client: "MOTC",
    value: 2526378.41,
    location: "Shinas",
    year: 2026,
  },
  {
    id: 2,
    title:
      "Construction of Saih Alkhairat- Al Shasar Asphalt Road at Governorate of Dhofar",
    client: "MOTC",
    value: 201684.0,
    location: "Thumarit",
    year: 2026,
  },
  {
    id: 3,
    title:
      "Rehabilitation And Treatment Of Road Damage In Oq Company In Raysut Area",
    client: "MOTC",
    value: 190210.0,
    location: "Salalah",
    year: 2025,
  },
  {
    id: 4,
    title: "Construction of Road",
    client: "OMIFICO",
    value: 187789.5,
    location: "Omifico Sur",
    year: 2024,
  },
];

// ── Civil Division → Completed (Civil_Division_Completed_Project.jpg + 2.jpg) ──
const CIVIL_COMPLETED = [
  {
    id: 1,
    title: "Hayy Al Sahil -Qurayyat ITC Project, Phase -1A -Four Star Hotel",
    client: "ADHI OMAN L.L.C",
    value: 139900.0,
    location: "Quriyat",
    year: 2025,
  },
  {
    id: 2,
    title:
      "Bin Al Sheik Mixed Use Tourism-Development Al Seeb Sultanate of Oman",
    client: "M/S. Bin Al Sheikh Holding Company",
    value: 125888.44,
    location: "Al Seeb Muscat",
    year: 2024,
  },
  {
    id: 3,
    title: "Construction of Dualization of Al Murtafa Street- Phase2",
    client: "MOTC",
    value: 166573.0,
    location: "Construction of Dualization of Al Murtafa Street- Phase2",
    year: 2024,
  },
  {
    id: 4,
    title: "Construction of Dualization of Halban Street (PH-1)",
    client: "MOTC",
    value: 205782.55,
    location: "Halban Street",
    year: 2024,
  },
  {
    id: 5,
    title: "Supply of 10mm & 20mm aggregate and wash sand",
    client: "Al Omaniya International Readymix",
    value: 405650.48,
    location: "Suweaq to Resual",
    year: 2025,
  },
  {
    id: 6,
    title:
      "Design, Build, Repairs of infrastructure at Monsoon affected Areas North Al Sharqiyan Region",
    client: "MOTC",
    value: 189288.78,
    location: "Dima Tyain (Ibra)",
    year: 2023,
  },
  {
    id: 7,
    title:
      "Civil Work for Reinforcement of Al sharqiya Water Transmission system",
    client: "Sultanate Of Oman Public Authority For Water",
    value: 750449.8,
    location: "Al sharqiya",
    year: 2024,
  },
  {
    id: 8,
    title:
      "(NJC,NFR,NLR,BR3) For Reinforcement of AL Sharqiyah Water Transmission System",
    client: "Sultanate Of Oman Public Authority For Water",
    value: 318161.92,
    location: "Al sharqiya",
    year: 2024,
  },
  {
    id: 9,
    title: "Bin Al Sheik Mixed Use Tourism-Development Al Seeb",
    client: "M/S. Bin Al Sheikh Holding Company",
    value: 419238.9,
    location: "Al Seeb Muscat",
    year: 2024,
  },
  {
    id: 10,
    title:
      "Supply Of Concrete materials (20mm Aggregate, 10mm Aggregate & Wash Sand)",
    client: "Oman Ready Mix",
    value: 2034000.0,
    location: "Al Khawd/ Al Seeb Muscat",
    year: 2022,
  },
  {
    id: 11,
    title: "Construction Of Residential Villas",
    client:
      "Mr Basim Subait Khamis Sinani, Mr Naser bin Abdhullah bin Khamis Al Baluchi, Mr Ali Iza & Walid Salim Khamis Al Uraimi",
    value: 170000.0,
    location: "Sur",
    year: 2022,
  },
  {
    id: 12,
    title: "Garden maintains & Walk way at Suweak Belthiya",
    client: "Suweak Municipality",
    value: 91200.0,
    location: "Suweak, Barka",
    year: 2022,
  },
  {
    id: 13,
    title: "Construction Of Residential Villas",
    client:
      "Mr Naser bin Abdhullah bin Khamis Al Baluchi, Mr Ali Iza & Walid Salim Khamis Al Uraimi",
    value: 139300.0,
    location: "Sur",
    year: 2022,
  },
  {
    id: 14,
    title: "Development of Infrastructure Facilities for Sur IND",
    client: "Mr. Towell Infrastructure Projects CO. LLC",
    value: 98400.0,
    location: "Sur",
    year: 2022,
  },
  {
    id: 15,
    title: "Supply of 10mm & 20mm aggregate and wash sand",
    client: "Oman Ready Mix",
    value: 450000.0,
    location: "Suweaq to Resual",
    year: 2025,
  },
  {
    id: 16,
    title:
      "Construction of Proposed Five Story Building @ Barka Al Sumhan Ph:02",
    client:
      "M/S. Ahamed Hamood Hilal Al Rashieedi & Abdhullah Saheer SaidRashi",
    value: 339628.0,
    location: "Barka",
    year: 2022,
  },
  {
    id: 17,
    title: "Green Hydrogin & Chamical SPC Project Ad Duqm",
    client: "Majan Engineering & Technical Technology LLC",
    value: 520320.25,
    location: "Duqam",
    year: 2022,
  },
];

// ── Summary (Summury_of_Project.jpg + 2.jpg) — combined full list ─
const SUMMARY_PROJECTS = [
  {
    id: 1,
    title: "Hayy Al Sahil -Qurayyat ITC Project, Phase -1A -Four Star Hotel",
    client: "ADHI OMAN L.L.C",
    value: 139900.0,
    location: "Quriyat",
    year: 2025,
  },
  {
    id: 2,
    title:
      "Bin Al Sheik Mixed Use Tourism-Development Al Seeb Sultanate of Oman",
    client: "M/S. Bin Al Sheikh Holding Company",
    value: 125888.44,
    location: "Al Seeb Muscat",
    year: 2024,
  },
  {
    id: 3,
    title: "Construction of Dualization of Al Murtafa Street- Phase2",
    client: "MOTC",
    value: 166573.0,
    location: "Construction of Dualization of Al Murtafa Street- Phase2",
    year: 2024,
  },
  {
    id: 4,
    title: "Construction of Dualization of Halban Street (PH-1)",
    client: "MOTC",
    value: 205782.55,
    location: "Halban Street",
    year: 2024,
  },
  {
    id: 5,
    title: "Supply of 10mm & 20mm aggregate and wash sand",
    client: "Al Omaniya International Readymix",
    value: 405650.48,
    location: "Suweaq to Resual",
    year: 2025,
  },
  {
    id: 6,
    title:
      "Design, Build, Repairs of infrastructure at Monsoon affected Areas North Al Sharqiyan Region",
    client: "MOTC",
    value: 189288.78,
    location: "Dima Tyain (Ibra)",
    year: 2023,
  },
  {
    id: 7,
    title:
      "Civil Work for Reinforcement of Al sharqiya Water Transmission system",
    client: "Sultanate Of Oman Public Authority For Water",
    value: 750449.8,
    location: "Al sharqiya",
    year: 2024,
  },
  {
    id: 8,
    title:
      "(NJC,NFR,NLR,BR3) For Reinforcement of AL Sharqiyah Water Transmission System",
    client: "Sultanate Of Oman Public Authority For Water",
    value: 318161.92,
    location: "Al sharqiya",
    year: 2024,
  },
  {
    id: 9,
    title: "Bin Al Sheik Mixed Use Tourism-Development Al Seeb",
    client: "M/S. Bin Al Sheikh Holding Company",
    value: 419238.9,
    location: "Al Seeb Muscat",
    year: 2024,
  },
  {
    id: 10,
    title:
      "Supply Of Concrete materials (20mm Aggregate, 10mm Aggregate & Wash Sand)",
    client: "Oman Ready Mix",
    value: 2034000.0,
    location: "Al Khawd/ Al Seeb Muscat",
    year: 2022,
  },
  {
    id: 11,
    title: "Construction Of Residential Villas",
    client: "Mr Basim Subait Khamis Sinani & others",
    value: 170000.0,
    location: "Sur",
    year: 2022,
  },
  {
    id: 12,
    title: "Garden maintains & Walk way at Suweak Belthiya",
    client: "Suweak Municipality",
    value: 91200.0,
    location: "Suweak, Barka",
    year: 2022,
  },
  {
    id: 13,
    title: "Construction Of Residential Villas",
    client: "Mr Naser bin Abdhullah bin Khamis Al Baluchi & others",
    value: 139300.0,
    location: "Sur",
    year: 2022,
  },
  {
    id: 14,
    title: "Development of Infrastructure Facilities for Sur IND",
    client: "Mr. Towell Infrastructure Projects CO. LLC",
    value: 98400.0,
    location: "Sur",
    year: 2022,
  },
  {
    id: 15,
    title: "Supply of 10mm & 20mm aggregate and wash sand",
    client: "Oman Ready Mix",
    value: 450000.0,
    location: "Suweaq to Resual",
    year: 2025,
  },
  {
    id: 16,
    title:
      "Construction of Proposed Five Story Building @ Barka Al Sumhan Ph:02",
    client:
      "M/S. Ahamed Hamood Hilal Al Rashieedi & Abdhullah Saheer SaidRashi",
    value: 339628.0,
    location: "Barka",
    year: 2022,
  },
  {
    id: 17,
    title: "Green Hydrogin & Chamical SPC Project Ad Duqm",
    client: "Majan Engineering & Technical Technology LLC",
    value: 520320.25,
    location: "Duqam",
    year: 2022,
  },
];

// ═══════════════════════════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════════════════════════

const GOLD = "#f59e0b";
const GREEN = "#34d399";
const INDIGO = "#818cf8";
const ORANGE = "#fb923c";
const BG = "#020617";
const CARD = "#0f172a";
const CARD2 = "#1e293b";
const BORDER = "#1e3a5f";

function fmt(v) {
  return (
    "OMR " +
    v.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

function CountUp({ target, duration = 1800 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 3);
          setVal(Math.floor(ease * target));
          if (p < 1) requestAnimationFrame(tick);
          else setVal(target);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val.toLocaleString()}</span>;
}

// ═══════════════════════════════════════════════════════════════════
// STAT CARD
// ═══════════════════════════════════════════════════════════════════
function StatCard({ icon, label, value, suffix = "", color }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${CARD2} 0%, ${CARD} 100%)`,
        border: `1px solid ${color}22`,
        boxShadow: `0 4px 24px ${color}0d`,
        borderRadius: 16,
        padding: "20px 20px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: color,
          opacity: 0.08,
        }}
      />
      <div
        style={{
          background: `${color}18`,
          border: `1px solid ${color}30`,
          borderRadius: 12,
          padding: 10,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            color: "#64748b",
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 4,
          }}
        >
          {label}
        </div>
        <div style={{ color, fontSize: 26, fontWeight: 900, lineHeight: 1 }}>
          <CountUp target={typeof value === "number" ? value : 0} />
          {suffix}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PROJECT TABLE
// ═══════════════════════════════════════════════════════════════════
function ProjectTable({ data }) {
  const [hovered, setHovered] = useState(null);
  return (
    <div
      style={{
        overflowX: "auto",
        borderRadius: 16,
        border: `1px solid ${BORDER}`,
        boxShadow: "0 8px 32px #00000040",
      }}
    >
      <table
        style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}
      >
        <thead>
          <tr
            style={{ background: `linear-gradient(90deg, ${CARD2}, ${CARD})` }}
          >
            {[
              "#",
              "Project Title",
              "Client",
              "Value (OMR)",
              "Location",
              "Year",
            ].map((h, i) => (
              <th
                key={h}
                style={{
                  padding: "14px 16px",
                  textAlign: i === 0 || i === 5 ? "center" : "left",
                  color: GOLD,
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  borderBottom: `2px solid ${GOLD}30`,
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background:
                  hovered === i
                    ? `${GOLD}09`
                    : i % 2 === 0
                      ? "#080d1a"
                      : "#0a1020",
                borderLeft:
                  hovered === i ? `3px solid ${GOLD}` : "3px solid transparent",
                transition: "all 0.15s ease",
                cursor: "default",
              }}
            >
              <td
                style={{
                  padding: "13px 16px",
                  textAlign: "center",
                  color: GOLD,
                  fontWeight: 800,
                  fontSize: 15,
                  minWidth: 44,
                }}
              >
                {row.id}
              </td>
              <td
                style={{
                  padding: "13px 16px",
                  color: "#e2e8f0",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  minWidth: 220,
                  maxWidth: 320,
                }}
              >
                {row.title}
              </td>
              <td
                style={{
                  padding: "13px 16px",
                  color: "#94a3b8",
                  lineHeight: 1.5,
                  minWidth: 150,
                }}
              >
                {row.client}
              </td>
              <td
                style={{
                  padding: "13px 16px",
                  color: GREEN,
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  minWidth: 150,
                }}
              >
                {fmt(row.value)}
              </td>
              <td style={{ padding: "13px 16px", minWidth: 120 }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#cbd5e1",
                  }}
                >
                  <svg width="12" height="12" fill={GOLD} viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {row.location}
                </span>
              </td>
              <td
                style={{
                  padding: "13px 16px",
                  textAlign: "center",
                  minWidth: 70,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 700,
                    background: row.year >= 2025 ? "#065f4625" : CARD2,
                    color: row.year >= 2025 ? GREEN : "#64748b",
                    border: `1px solid ${row.year >= 2025 ? GREEN + "45" : "#334155"}`,
                  }}
                >
                  {row.year}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════
export default function ProjectList() {
  const [division, setDivision] = useState("road");
  const [subTab, setSubTab] = useState("completed");
  const isRoad = division === "road";
  const isCivil = division === "civil";

  const tableData =
    division === "summary"
      ? SUMMARY_PROJECTS
      : isRoad
        ? subTab === "completed"
          ? ROAD_COMPLETED
          : subTab === "ongoing"
            ? ROAD_ONGOING
            : SUMMARY_PROJECTS
        : subTab === "completed"
          ? CIVIL_COMPLETED
          : [];

  const totalValue = tableData.reduce((s, r) => s + r.value, 0);

  const handleDivision = (d) => {
    setDivision(d);
    setSubTab("completed");
  };

  const roadTotalCompleted = ROAD_COMPLETED.reduce((s, r) => s + r.value, 0);
  const civilTotalCompleted = CIVIL_COMPLETED.reduce((s, r) => s + r.value, 0);
  const summaryTotal = SUMMARY_PROJECTS.reduce((s, r) => s + r.value, 0);

  const roadStats = [
    {
      label: "Completed Projects",
      value: ROAD_COMPLETED.length,
      suffix: "",
      color: GOLD,
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke={GOLD}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: "Ongoing Projects",
      value: ROAD_ONGOING.length,
      suffix: "",
      color: GREEN,
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke={GREEN}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      label: "Completed Value (K OMR)",
      value: Math.round(roadTotalCompleted / 1000),
      suffix: "K",
      color: INDIGO,
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke={INDIGO}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1"
          />
        </svg>
      ),
    },
    {
      label: "Locations",
      value: new Set(ROAD_COMPLETED.map((r) => r.location)).size,
      suffix: "",
      color: ORANGE,
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke={ORANGE}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  const civilStats = [
    {
      label: "Completed Projects",
      value: CIVIL_COMPLETED.length,
      suffix: "",
      color: GOLD,
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke={GOLD}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      label: "Total Value (K OMR)",
      value: Math.round(civilTotalCompleted / 1000),
      suffix: "K",
      color: GREEN,
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke={GREEN}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1"
          />
        </svg>
      ),
    },
    {
      label: "Clients Served",
      value: new Set(CIVIL_COMPLETED.map((r) => r.client)).size,
      suffix: "",
      color: INDIGO,
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke={INDIGO}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      label: "Locations",
      value: new Set(CIVIL_COMPLETED.map((r) => r.location)).size,
      suffix: "",
      color: ORANGE,
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke={ORANGE}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  const summaryStats = [
    {
      label: "Total Projects",
      value: SUMMARY_PROJECTS.length,
      suffix: "",
      color: GOLD,
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke={GOLD}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      label: "Total Value (K OMR)",
      value: Math.round(summaryTotal / 1000),
      suffix: "K",
      color: GREEN,
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke={GREEN}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1"
          />
        </svg>
      ),
    },
    {
      label: "Unique Clients",
      value: new Set(SUMMARY_PROJECTS.map((r) => r.client)).size,
      suffix: "",
      color: INDIGO,
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke={INDIGO}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      label: "Locations Covered",
      value: new Set(SUMMARY_PROJECTS.map((r) => r.location)).size,
      suffix: "",
      color: ORANGE,
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          stroke={ORANGE}
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064"
          />
        </svg>
      ),
    },
  ];

  const activeStats =
    division === "summary" ? summaryStats : isRoad ? roadStats : civilStats;

  const subTabConfig = {
    road: [
      {
        key: "completed",
        label: "Completed",
        color: GOLD,
        count: ROAD_COMPLETED.length,
        pulse: false,
      },
      {
        key: "ongoing",
        label: "Ongoing",
        color: GREEN,
        count: ROAD_ONGOING.length,
        pulse: true,
      },
      {
        key: "summary",
        label: "Summary",
        color: INDIGO,
        count: SUMMARY_PROJECTS.length,
        pulse: false,
      },
    ],
    civil: [
      {
        key: "completed",
        label: "Completed",
        color: GOLD,
        count: CIVIL_COMPLETED.length,
        pulse: false,
      },
    ],
    summary: [],
  };

  const currentSubTabs = subTabConfig[division] || [];

  const sectionTitle =
    division === "summary"
      ? "Summary of All Projects"
      : subTab === "completed"
        ? `${isRoad ? "Road" : "Civil"} — Completed Projects`
        : subTab === "ongoing"
          ? "Road — Ongoing Projects"
          : "Summary of Projects";

  // ── Inline styles for responsiveness via CSS vars ──────────────
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
    * { box-sizing: border-box; }
    .pl-root { font-family: 'Outfit', 'Segoe UI', sans-serif; }
    .pl-div-btn:hover { opacity: 0.92; }
    .pl-subtab:hover { opacity: 0.9; }
    .pl-hero-grid {
      background-image: linear-gradient(${GOLD} 1px, transparent 1px),
        linear-gradient(90deg, ${GOLD} 1px, transparent 1px);
      background-size: 52px 52px;
    }
    .pl-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
    @media (max-width: 900px)  { .pl-stats { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 480px)  { .pl-stats { grid-template-columns: repeat(1, 1fr); } }
    .pl-divs  { display: flex; gap: 12px; flex-wrap: wrap; }
    .pl-subs  { display: flex; gap: 8px; flex-wrap: wrap; }
    .pl-hdr   { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
    @media (max-width: 600px) {
      .pl-hero-title { font-size: 36px !important; }
      .pl-hero-sub   { font-size: 13px !important; }
    }
  `;

  return (
    <div
      className="pl-root"
      style={{ minHeight: "100vh", background: BG, color: "#fff" }}
    >
      <style>{styles}</style>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${CARD} 0%, ${CARD2} 55%, ${CARD} 100%)`,
          borderBottom: `1px solid ${GOLD}25`,
        }}
      >
        <div
          className="pl-hero-grid"
          style={{ position: "absolute", inset: 0, opacity: 0.04 }}
        />
        <div
          style={{
            position: "absolute",
            top: -30,
            left: "50%",
            transform: "translateX(-50%)",
            width: 400,
            height: 160,
            borderRadius: "50%",
            background: GOLD,
            filter: "blur(80px)",
            opacity: 0.18,
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "56px 24px 52px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                height: 2,
                width: 36,
                background: GOLD,
                display: "inline-block",
                borderRadius: 2,
              }}
            />
            <span
              style={{
                color: GOLD,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.32em",
                textTransform: "uppercase",
              }}
            >
              Salman Al Askari Group
            </span>
          </div>
          <h1
            className="pl-hero-title"
            style={{
              fontSize: 52,
              fontWeight: 900,
              color: "#fff",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Project&nbsp;<span style={{ color: GOLD }}>Portfolio</span>
          </h1>
          <p
            className="pl-hero-sub"
            style={{
              color: "#94a3b8",
              fontSize: 16,
              marginTop: 12,
              maxWidth: 500,
            }}
          >
            Delivering world-class road &amp; civil infrastructure across the
            Sultanate of Oman.
          </p>
        </div>
      </div>

      {/* ── BODY ──────────────────────────────────────────────────── */}
      <div
        style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 20px 60px" }}
      >
        {/* Division Tabs */}
        <div className="pl-divs" style={{ marginBottom: 32 }}>
          {[
            { key: "road", label: "Road Division", emoji: "🛣️" },
            { key: "civil", label: "Civil Division", emoji: "🏗️" },
            { key: "summary", label: "Project Summary", emoji: "📋" },
          ].map((d) => {
            const active = division === d.key;
            return (
              <button
                key={d.key}
                className="pl-div-btn"
                onClick={() => handleDivision(d.key)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 28px",
                  borderRadius: 14,
                  border: "none",
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  ...(active
                    ? {
                        background: `linear-gradient(135deg, ${GOLD}, #d97706)`,
                        color: "#0f172a",
                        boxShadow: `0 0 32px ${GOLD}30, 0 4px 18px ${GOLD}20`,
                        transform: "translateY(-2px)",
                      }
                    : {
                        background: CARD2,
                        color: "#64748b",
                        border: `1px solid #334155`,
                      }),
                }}
              >
                <span style={{ fontSize: 20 }}>{d.emoji}</span>
                {d.label}
              </button>
            );
          })}
        </div>

        {/* Stats */}
        <div className="pl-stats" style={{ marginBottom: 28 }}>
          {activeStats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>

        {/* Sub Tabs */}
        {currentSubTabs.length > 0 && (
          <div className="pl-subs" style={{ marginBottom: 24 }}>
            {currentSubTabs.map((t) => {
              const active = subTab === t.key;
              return (
                <button
                  key={t.key}
                  className="pl-subtab"
                  onClick={() => setSubTab(t.key)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 20px",
                    borderRadius: 12,
                    border: "none",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    ...(active
                      ? {
                          background: `${t.color}12`,
                          color: t.color,
                          border: `1px solid ${t.color}40`,
                        }
                      : {
                          background: CARD2,
                          color: "#64748b",
                          border: `1px solid #334155`,
                        }),
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: active ? t.color : "#475569",
                      animation:
                        t.pulse && active ? "pulse 1.5s infinite" : "none",
                    }}
                  />
                  {t.label}
                  <span
                    style={{
                      padding: "2px 8px",
                      borderRadius: 6,
                      fontSize: 11,
                      fontWeight: 800,
                      background: active ? `${t.color}20` : "#0f172a",
                      color: active ? t.color : "#475569",
                    }}
                  >
                    {t.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Section header */}
        <div className="pl-hdr" style={{ marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 4,
                height: 44,
                borderRadius: 4,
                background: `linear-gradient(180deg,${GOLD},#92400e)`,
              }}
            />
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>
                {sectionTitle}
              </div>
              <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>
                {tableData.length} project{tableData.length !== 1 ? "s" : ""}
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 20px",
              borderRadius: 12,
              background: `${GREEN}0f`,
              border: `1px solid ${GREEN}28`,
            }}
          >
            <svg
              width="16"
              height="16"
              fill="none"
              stroke={GREEN}
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span
              style={{
                fontSize: 12,
                color: "#94a3b8",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Total
            </span>
            <span style={{ fontSize: 14, fontWeight: 900, color: GREEN }}>
              {fmt(totalValue)}
            </span>
          </div>
        </div>

        {/* Table */}
        {tableData.length > 0 ? (
          <ProjectTable data={tableData} />
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              borderRadius: 16,
              background: CARD2,
              border: `1px solid ${BORDER}`,
              color: "#475569",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 12 }}>🚧</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>Coming Soon</div>
            <div style={{ fontSize: 13, marginTop: 6 }}>
              Data for this section will be added shortly.
            </div>
          </div>
        )}

        <p
          style={{
            marginTop: 24,
            textAlign: "center",
            color: "#334155",
            fontSize: 12,
          }}
        >
          All values in Omani Rial (OMR) &nbsp;·&nbsp; © Salman Al Askari Group
          – Civil Contracting Company
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
