import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";


const Chip = ({ active, children, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      "px-4 py-2 rounded-2xl border transition",
      active
        ? "bg-teal-400 text-slate-900 border-teal-300 shadow-[0_0_30px_rgba(45,212,191,.35)]"
        : "bg-slate-900/60 text-slate-300 border-white/10 hover:bg-white/5"
    ].join(" ")}
  >
    {children}
  </button>
);

const Toggle = ({ checked, onChange, label }) => (
  <label className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
    <div className="font-medium text-slate-100">{label}</div>
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={
        "relative inline-flex h-7 w-12 items-center rounded-full transition " +
        (checked ? "bg-teal-400" : "bg-slate-700")
      }
    >
      <span
        className={
          "inline-block h-5 w-5 transform rounded-full bg-white transition " +
          (checked ? "translate-x-6" : "translate-x-1")
        }
      />
    </button>
  </label>
);

export default function Onboarding() {
  const [goal, setGoal] = useState("Recomp");
  const [gender, setGender] = useState("female");
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(60);
  const [activity, setActivity] = useState(2);
  const [focus, setFocus] = useState({
    water: true,
    calories: true,
    weightTrack: true,
    workouts: true
  });
  const [reminders, setReminders] = useState({
    water: true,
    steps: false
  });

  const activityLabel = useMemo(() => {
    return ["Low", "Light", "Moderate", "High", "Athlete"][activity];
  }, [activity]);

  const finish = () => {
    const payload = { goal, gender, height, weight, activity, focus, reminders };
    localStorage.setItem("myfit:onboarding", JSON.stringify(payload));
    alert("Saved! " + JSON.stringify(payload, null, 2));
  };

  return (
    <div className="min-h-screen bg-[#0F0F1A] text-slate-200 p-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        MyFit.ai — Onboarding
      </h1>

      <section className="max-w-3xl mx-auto space-y-8">
        <div>
          <h2 className="text-xl mb-4">Choose your goal</h2>
          <div className="flex gap-3">
            {["Fat loss", "Recomp", "Muscle"].map((g) => (
              <Chip key={g} active={goal === g} onClick={() => setGoal(g)}>
                {g}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-4">Your basics</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm">Gender: {gender}</label>
            <div className="flex gap-2">
              {["female", "male", "other"].map((g) => (
                <Chip key={g} active={gender === g} onClick={() => setGender(g)}>
                  {g}
                </Chip>
              ))}
            </div>

            <label>Height: {height} cm</label>
            <input
              type="range"
              min="130"
              max="210"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="accent-teal-400"
            />
            <label>Weight: {weight} kg</label>
            <input
              type="range"
              min="35"
              max="120"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="accent-fuchsia-400"
            />
            <label>Activity: {activityLabel}</label>
            <input
              type="range"
              min="0"
              max="4"
              value={activity}
              onChange={(e) => setActivity(Number(e.target.value))}
              className="accent-violet-400"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-4">Focus tracking</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.keys(focus).map((k) => (
              <Toggle
                key={k}
                label={k}
                checked={focus[k]}
                onChange={(v) => setFocus({ ...focus, [k]: v })}
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-4">Reminders (optional)</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.keys(reminders).map((k) => (
              <Toggle
                key={k}
                label={k}
                checked={reminders[k]}
                onChange={(v) => setReminders({ ...reminders, [k]: v })}
              />
            ))}
          </div>
        </div>

        <button
          onClick={finish}
          className="w-full bg-gradient-to-r from-[#00C6AE] to-[#7D5FFF] py-3 rounded-2xl font-semibold text-slate-900"
        >
          <Link to="/Dashboard" className="hover:underline">
           Finish setup
         </Link>

        </button>
      </section>
    </div>
  );
}
