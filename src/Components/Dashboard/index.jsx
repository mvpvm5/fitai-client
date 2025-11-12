import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  // тимчасові дані для графіків (потім підставиш із онбордингу / бекенду)
  const water7d = [1650, 1900, 1200, 2100, 1800, 2000, 1750];
  const calories7d = [1420, 1550, 1670, 1500, 1820, 1600, 1490];

  return (
    <div className="fa-shell">
      {/* sidebar */}
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

      {/* main */}
      <main className="fa-main">
        {/* top bar */}
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

        {/* metrics row */}
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

        {/* big grid */}
        <section className="fa-grid">
          {/* activity chart */}
          <div className="fa-card fa-activity">
            <div className="fa-card-head">
              <h3>Progress trend</h3>
              <div className="fa-pill-group">
                <button className="pill active">7d</button>
                <button className="pill">30d</button>
                <button className="pill">90d</button>
              </div>
            </div>
            <p className="small-muted">
              AI tip: keep daily intake & training within 80% — variance is okay.
            </p>

            {/* реальний графік */}
            <svg viewBox="0 0 300 140" className="fa-chart-svg">
              {/* water line */}
              <polyline
                fill="none"
                stroke="#00C6AE"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
                points={water7d
                  .map((v, i) => {
                    const max = 2200;
                    const x = 20 + i * 40;
                    const y = 120 - (v / max) * 90;
                    return `${x},${y}`;
                  })
                  .join(" ")}
              />
              {/* calories line */}
              <polyline
                fill="none"
                stroke="#7D5FFF"
                strokeWidth="2.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                opacity="0.65"
                points={calories7d
                  .map((v, i) => {
                    const max = 2000;
                    const x = 20 + i * 40;
                    const y = 120 - (v / max) * 80;
                    return `${x},${y}`;
                  })
                  .join(" ")}
              />
            </svg>
            <div className="fa-chart-labels">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>

          {/* workouts plan */}
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

          {/* right column */}
          <div className="fa-right-col">
            {/* today */}
            <div className="fa-card fa-today">
              <div className="fa-card-head">
                <h3>Today</h3>
                <span className="tag">3 actions</span>
              </div>
              <div className="fa-today-row">
                <span>Water</span>
                <span className="muted">+ 250 ml</span>
              </div>
              <div className="fa-today-row">
                <span>Meal</span>
                <span className="muted">Breakfast 420 kcal</span>
              </div>
              <div className="fa-today-row">
                <span>Steps</span>
                <span className="muted">5 430 / 8 000</span>
              </div>
            </div>

            {/* AI suggestions */}
            <div className="fa-card fa-ai">
              <div className="fa-card-head">
                <h3>AI insights</h3>
              </div>
              <p className="ai-item">
                • Hydration is below 80% — log another 350 ml.
              </p>
              <p className="ai-item">
                • Your last workout was 2 days ago — schedule a short HIIT.
              </p>
              <p className="ai-item">
                • Calories are ok, but protein is low for muscle goal.
              </p>
              <button className="fa-btn tiny">Generate full plan</button>
            </div>
          </div>

          {/* nutrition / macros */}
          <div className="fa-card fa-nutrition">
            <div className="fa-card-head">
              <h3>Nutrition & macros</h3>
              <span className="tag dark">today</span>
            </div>
            <div className="fa-nutrition-body">
              <div className="donut-wrap">
                <div className="donut-ring"></div>
                <div className="donut-center">
                  <p>Protein</p>
                  <h4>32%</h4>
                </div>
              </div>
              <ul className="donut-legend">
                <li><span className="dot d1"></span>Protein 95g</li>
                <li><span className="dot d2"></span>Carbs 140g</li>
                <li><span className="dot d3"></span>Fats 52g</li>
              </ul>
            </div>
          </div>

          {/* reminders */}
          <div className="fa-card fa-reminders">
            <div className="fa-card-head">
              <h3>Reminders</h3>
              <button className="link-btn">Edit</button>
            </div>
            <div className="rem-row">
              <span>Drink water</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="rem-row">
              <span>Steps</span>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="rem-row">
              <span>Weigh in</span>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
