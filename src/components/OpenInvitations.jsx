import { Users, Lightbulb, BookOpen, Plus } from "lucide-react";
import Container from "./Container";

const OpenInvitations = () => {
  const roles = [
    {
      title: "Contributors",
      status: "Open",
      desc: "Help us ship code that matters.",
      icon: <Users size={20} />,
      color: "text-emerald-400",
    },
    {
      title: "Mentors",
      status: "High Demand",
      desc: "Share your wisdom and guide the next gen.",
      icon: <Lightbulb size={20} />,
      color: "text-blue-400",
    },
    {
      title: "Learners",
      status: "Welcome",
      desc: "Fresh perspectives are always valued here.",
      icon: <BookOpen size={20} />,
      color: "text-purple-400",
    },
  ];

  return (
    <section className="py-24 text-white border-t border-white/5">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Massive CTA */}
          <div className="space-y-8">
            <div>
              <span className="text-fuchsia-500 font-mono text-sm tracking-[0.2em] uppercase">
                // Join the Ecosystem
              </span>
              <h2 className="mt-4 text-5xl md:text-6xl font-black tracking-tighter leading-none italic uppercase">
                Build
                <span className="text-transparent bg-clip-text bg-linear-to-r from-fuchsia-400 to-blue-500">
                  With Us
                </span>
              </h2>
            </div>

            <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-400 transition-all duration-300">
              Apply to Join
              <Plus className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Side: Role List */}
          <div className="space-y-4">
            {roles.map((role, index) => (
              <div
                key={index}
                className="group flex items-center justify-between p-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`${role.color} mt-1 opacity-60 group-hover:opacity-100 transition-opacity`}
                  >
                    {role.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      {role.title}
                      <span className="text-[10px] font-mono border border-white/20 px-2 py-0.5 rounded uppercase tracking-widest text-slate-500 group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors">
                        {role.status}
                      </span>
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">{role.desc}</p>
                  </div>
                </div>

                {/* Subtle visual indicator */}
                <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-emerald-400 transition-all shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-emerald-400/50" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OpenInvitations;
