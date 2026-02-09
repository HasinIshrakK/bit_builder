import { ArrowUpRight } from "lucide-react";

const TeamPhilosophy = () => {
  const beliefs = [
    {
      id: "01",
      title: "Purpose over Popularity",
      desc: "“We don’t chase trends, we build solutions.” Longevity is our primary metric for success.",
      accent: "hover:text-cyan-400",
    },
    {
      id: "02",
      title: "Team thinking",
      desc: "First-principles thinking. We strip away the noise to build from the ground up with absolute logic.",
      accent: "hover:text-purple-400",
    },
    {
      id: "03",
      title: "Radical Integrity",
      desc: "Efficiency is elegant. We believe in writing code that is as beautiful as the UI you see.",
      accent: "hover:text-rose-400",
    },
  ];

  return (
    <section className="py-24 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Minimal Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <p className="text-sm font-mono text-purple-500 uppercase tracking-widest mb-2">
              // Our Mindset
            </p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Team Philosophy
            </h2>
          </div>
          <p className="text-slate-400 max-w-xs text-sm leading-relaxed border-l border-white/20 pl-4">
            Building software with a soul, focusing on the core essence of the
            problem.
          </p>
        </div>

        {/* List Style Layout */}
        <div className="border-t border-white/10">
          {beliefs.map((item, index) => (
            <div
              key={index}
              className={`group relative py-12 border-b border-white/10 flex flex-col md:flex-row md:items-start transition-all duration-700 cursor-default ${item.accent}`}
            >
              {/* Background Glow Effect on Hover */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Numbering */}
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-sm font-mono opacity-40 group-hover:opacity-100 transition-opacity">
                  [{item.id}]
                </span>
              </div>

              {/* Title - Large & Bold */}
              <div className="md:w-2/4">
                <h3 className="text-3xl md:text-5xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                  {item.title}
                </h3>
              </div>

              {/* Description & Icon */}
              <div className="md:w-1/4 mt-4 md:mt-2 flex flex-col justify-between h-full">
                <p className="text-slate-400 group-hover:text-slate-200 transition-colors duration-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPhilosophy;
