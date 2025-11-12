import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./Dashboard.css";

const Dashboard = () => {
  const [period, setPeriod] = useState("7d");

  const water7d = [1650, 1900, 1200, 2100, 1800, 2000, 1750];
  const calories7d = [1420, 1550, 1670, 1500, 1820, 1600, 1490];

    const chartOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      background: "transparent",
    },
    stroke: {
      curve: "smooth",
      width: 3,
      lineCap: "round",
    },
    colors: ["#2dd4bf", "#818cf8"], // яскравий бірюзовий і насичений фіолетовий
    grid: {
      borderColor: "rgba(255,255,255,0.05)",
      strokeDashArray: 4,
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        style: {
          colors: "#a1a1aa",
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#a1a1aa",
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    tooltip: {
      theme: "dark",
      style: { fontFamily: "Inter, sans-serif" },
    },
    legend: {
      position: "top",
      labels: { colors: "#cbd5e1" },
      markers: {
        fillColors: ["#2dd4bf", "#818cf8"],
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.4,
        gradientToColors: ["#2dd4bf", "#818cf8"],
        inverseColors: false,
        opacityFrom: 0.8,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
  };


  const chartSeries = [
    { name: "Water (ml)", data: water7d },
    { name: "Calories (kcal)", data: calories7d },
  ];

  return (
    <div className="fa-shell">
      {/* Sidebar */}
      <aside className="fa-sidebar">
        <div className="fa-brand">
          <div className="fa-logo">F</div>
          <span className="fa-name">FitAI</span>
        </div>
        <nav className="fa-nav">
          <button className="fa-nav-item active">Overview</button>
          <button className="fa-nav-item">Workouts</button>
          <button className="fa-nav-item">Nutrition</button>
          <button className="fa-nav-item">Progress</button>
          <button className="fa-nav-item">AI coach</button>
          <button className="fa-nav-item">Settings</button>
        </nav>
        <div className="fa-side-footer">
          <p className="fa-mini">Storage: 72%</p>
          <div className="fa-progress">
            <div className="fa-progress-line" />
          </div>
          <p className="fa-copy">© 2025 FitAI</p>
        </div>
      </aside>

      {/* Main */}
      <main className="fa-main">
        <header className="fa-top">
          <div>
            <h1 className="fa-title">Dashboard</h1>
            <p className="fa-sub">AI-powered training & nutrition control</p>
          </div>
          <div className="fa-top-right">
            <button className="fa-btn ghost">+ Quick log</button>
            <div className="fa-user">
              <div className="fa-user-meta">
                <span className="fa-user-name">Marina</span>
                <span className="fa-user-state">On track • week 5</span>
              </div>
              <div className="fa-avatar">M</div>
            </div>
          </div>
        </header>

        {/* Metrics row */}
        <section className="fa-metrics">
          <div className="fa-card metric">
            <p className="label">Water</p>
            <h3>1 650 ml</h3>
            <p className="muted">Goal: 2 000 ml</p>
            <div className="fa-line">
              <div className="fa-line-value w1"></div>
            </div>
          </div>
          <div className="fa-card metric">
            <p className="label">Calories</p>
            <h3>1 420 kcal</h3>
            <p className="muted">Target: 1 900 kcal</p>
            <div className="fa-line">
              <div className="fa-line-value w2"></div>
            </div>
          </div>
          <div className="fa-card metric">
            <p className="label">Workouts</p>
            <h3>3 / 4</h3>
            <p className="muted positive">+1 vs last week</p>
            <div className="fa-line">
              <div className="fa-line-value w3"></div>
            </div>
          </div>
          <div className="fa-card metric">
            <p className="label">Weight</p>
            <h3>59.8 kg</h3>
            <p className="muted positive">-0.4 kg this week</p>
          </div>
        </section>

        {/* Main grid */}
        <section className="fa-grid">
          {/* Activity chart */}
          <div className="fa-card fa-activity">
            <div className="fa-card-head">
              <h3>Progress trend</h3>
              <div className="fa-pill-group">
                {["7d", "30d", "90d"].map((p) => (
                  <button
                    key={p}
                    className={`pill ${period === p ? "active" : ""}`}
                    onClick={() => setPeriod(p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <p className="small-muted">
              AI tip: keep daily intake & training within 80% — variance is okay.
            </p>

            <div className="chart-container" style={{ height: 220 }}>
              <Chart
                options={chartOptions}
                series={chartSeries}
                type="line"
                height={220}
              />
            </div>
          </div>

          {/* Workouts plan */}
          <div className="fa-card fa-workouts">
            <div className="fa-card-head">
              <h3>Upcoming workouts</h3>
              <button className="link-btn">Add</button>
            </div>
            <ul className="fa-workout-list">
              <li>
                <div>
                  <p className="w-title">Lower body strength</p>
                  <p className="w-meta">Today • 35 min • AI level 2</p>
                </div>
                <span className="badge green">Ready</span>
              </li>
              <li>
                <div>
                  <p className="w-title">Cardio + HIIT</p>
                  <p className="w-meta">Tomorrow • 20 min</p>
                </div>
                <span className="badge">Planned</span>
              </li>
              <li>
                <div>
                  <p className="w-title">Core & mobility</p>
                  <p className="w-meta">Fri • 15 min</p>
                </div>
                <span className="badge">Planned</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
