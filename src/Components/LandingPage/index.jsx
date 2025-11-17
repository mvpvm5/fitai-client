import React from "react";
import "./landing.css"; 
import { Link } from "react-router-dom";


const LandingPage = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Top nav */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-[#0F0F1A]/70">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#7D5FFF] to-[#00C6AE] grid place-items-center font-bold">
            F
            </div>
            <span className="font-semibold">MYFIT AI</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-400">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#about" className="hover:text-white">
              Product
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#cta" className="hover:text-white">
              Start
            </a>
          </nav>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-xl border border-white/10 bg-[#151627] hover:bg-white/5">
                  <Link to="/signup" className="hover:underline">
                    Log in
                  </Link>
              
            </button>
            <button className="px-4 py-2 rounded-xl bg-[#00C6AE] text-[#0F0F1A] font-medium glow-a hover:opacity-90">
              Get Started
            </button>
          </div>
        </div>
      </header>

     
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(closest-side,#00C6AE33,transparent)",
          }}
        ></div>
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(closest-side,#7D5FFF33,transparent)",
          }}
        ></div>

        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Your personal AI coach <br /> for smarter fitness
            </h1>
            <p className="mt-4 text-slate-400 md:text-lg">
              Track, analyze, and improve — one tap at a time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/dashboard"
                className="px-5 py-3 rounded-2xl bg-[#00C6AE] text-[#0F0F1A] font-medium glow-a hover:opacity-90"
              >
                  <Link to="/dashboard" className="hover:underline">
                   Try demo
                  </Link>
                
              </a>
              <a
                href="#features"
                className="px-5 py-3 rounded-2xl border border-white/10 bg-[#151627] hover:bg-white/5"
              >
                Start free
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Privacy-first • PWA • Export CSV • Guidance only
            </p>
          </div>

          {/* Dashboard preview */}
          <div id="preview" className="relative">
            <div className="absolute -inset-4 blur-2xl rounded-3xl bg-gradient-to-br from-[#7D5FFF33] to-[#00C6AE33]"></div>
            <div className="relative card p-5">
              <div className="flex items-center justify-between text-sm text-slate-400 pb-3 border-b border-white/10">
                <span className="font-semibold text-white">DASHBOARD</span>
                <div className="flex gap-2">
                  <button className="px-2 py-1 rounded-full bg-white/5 text-xs">
                    7D
                  </button>
                  <button className="px-2 py-1 rounded-full bg-white/10 text-xs text-white">
                    30D
                  </button>
                  <button className="px-2 py-1 rounded-full bg-white/5 text-xs">
                    90D
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="card p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="ring-kpi h-10 w-10"
                      style={{ "--c": "#00C6AE", "--v": "70%" }}
                    ></div>
                    <div>
                      <div className="text-xs text-slate-400">Water</div>
                      <div className="font-semibold">1800 ml</div>
                    </div>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="ring-kpi h-10 w-10"
                      style={{ "--c": "#7D5FFF", "--v": "55%" }}
                    ></div>
                    <div>
                      <div className="text-xs text-slate-400">Calories</div>
                      <div className="font-semibold">1420 kcal</div>
                    </div>
                  </div>
                </div>
                <div className="card p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="ring-kpi h-10 w-10"
                      style={{ "--c": "#9D8CFF", "--v": "40%" }}
                    ></div>
                    <div>
                      <div className="text-xs text-slate-400">Weight</div>
                      <div className="font-semibold">59.8 kg</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3 mt-3">
                <div className="card p-4">
                  <div className="text-sm font-semibold mb-1">Insight</div>
                  <p className="text-sm text-slate-400">
                    Stay consistent with your routine and remember that progress
                    takes time.
                  </p>
                </div>
                <div className="card p-4">
                  <div className="text-sm font-semibold mb-1">Progress</div>
                  <svg viewBox="0 0 300 120" className="w-full h-28">
                    <polyline
                      fill="none"
                      stroke="#00C6AE"
                      strokeWidth="3"
                      points="0,90 30,84 60,86 90,82 120,78 150,70 180,66 210,60 240,54 270,48 300,44"
                    ></polyline>
                    <polyline
                      fill="none"
                      stroke="#7D5FFF"
                      strokeWidth="3"
                      opacity=".6"
                      points="0,95 30,92 60,94 90,90 120,88 150,82 180,80 210,78 240,76 270,72 300,70"
                    ></polyline>
                  </svg>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <button className="px-4 py-2 rounded-xl border border-white/10 bg-[#151627] hover:bg-white/5">
                  + 250 ml
                </button>
                <button className="px-4 py-2 rounded-xl border border-white/10 bg-[#151627] hover:bg-white/5">
                  Add meal
                </button>
                <button className="px-4 py-2 rounded-xl border border-white/10 bg-[#151627] hover:bg-white/5">
                  Add workout
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     < div class="fa-gradient-line"></div>

      {/* <section className="py-8 border-y border-white/5 bg-[#0b0b14]">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">
            Trusted by early users and student teams
          </p>
          <div className="flex gap-6 opacity-70">
            <span className="text-xs uppercase tracking-wide">Wellness Lab</span>
            <span className="text-xs uppercase tracking-wide">Campus Fit</span>
            <span className="text-xs uppercase tracking-wide">HealthTrack</span>
            <span className="text-xs uppercase tracking-wide">Everlearn</span>
          </div>
        </div>
      </section> */}


      <section id="features" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7D5FFF] to-[#00C6AE] mb-3"></div>
              <h3 className="font-semibold">Advanced Tracking</h3>
              <p className="text-sm text-slate-400 mt-1">
                Log water, meals & workouts in seconds.
              </p>
            </div>
            <div className="card p-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7D5FFF] to-[#00C6AE] mb-3"></div>
              <h3 className="font-semibold">Personalized Guidance</h3>
              <p className="text-sm text-slate-400 mt-1">
                AI tips when progress stalls.
              </p>
            </div>
            <div className="card p-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7D5FFF] to-[#00C6AE] mb-3"></div>
              <h3 className="font-semibold">Goal Progression</h3>
              <p className="text-sm text-slate-400 mt-1">
                Clear trends over 7/30/90 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          
          <h2 className="text-3xl font-bold mb-3">
            Everything in one AI dashboard
          </h2>
          <p className="text-slate-400 max-w-2xl mb-8">
            MyFit AI keeps your water, calories, workouts and weight in sync — and
            gives tips when progress slows.
          </p>

          <div className="grid md:grid-cols-4 gap-5">
            <div className="card p-5">
              <h3 className="font-semibold mb-2">Daily logging</h3>
              <p className="text-sm text-slate-400">
                +250 ml, add meal, add workout — in 1 tap.
              </p>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold mb-2">AI recommendations</h3>
              <p className="text-sm text-slate-400">
                If progress stalls, AI tells what to do today.
              </p>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold mb-2">Progress 7/30/90d</h3>
              <p className="text-sm text-slate-400">
                Compare short and long-term progress.
              </p>
            </div>
            <div className="card p-5">
              <h3 className="font-semibold mb-2">Reminders</h3>
              <p className="text-sm text-slate-400">
                Water / steps / workouts — on or off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
<section id="cta" className="pb-20 pt-16 relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-radial from-[#00C6AE]/15 to-transparent blur-3xl"></div>
  <div className="mx-auto max-w-4xl px-4 relative z-10">
    <div className="card p-10 md:p-14 text-center shadow-[0_0_40px_rgba(0,198,174,0.15)]">
      <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#7D5FFF] to-[#00C6AE] bg-clip-text text-transparent">
        Start today for a healthier tomorrow
      </h3>
      <p className="text-slate-400 mt-4">
        Join <span className="text-[#00C6AE] font-semibold">100+</span> early users shaping the future of smart fitness.
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/signup"
          className="px-6 py-3 rounded-2xl bg-[#00C6AE] text-[#0F0F1A] font-medium hover:shadow-[0_0_25px_rgba(0,198,174,.35)] transition"
        >
          Sign Up
        </Link>
        <a
          href="#preview"
          className="px-6 py-3 rounded-2xl border border-white/10 bg-[#151627] hover:bg-white/5 transition"
        >
          See Demo
        </a>
      </div>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#7D5FFF] to-[#00C6AE] grid place-items-center font-bold">
            F
            </div>
            <span>MyFit.ai</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
          <p>© {year} MyFit.ai</p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
