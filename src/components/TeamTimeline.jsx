import { Flag, Star, Rocket, TrendingUp } from "lucide-react";
import SectionTitle from "./SectionTitle";
import Container from "./Container";

const TeamTimeline = () => {
  const journey = [
    {
      year: "2023",
      milestone: "The Genesis",
      description:
        "টিম কবে শুরু? Started with 2 people in a small room with a big vision.",
      icon: <Flag className="w-6 h-6" />,
      color: "from-blue-600/20 to-cyan-400/20",
      border: "border-cyan-500/50",
      glow: "shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    },
    {
      year: "2024",
      milestone: "First 50+ Projects",
      description:
        "Validated our core belief: solutions over trends. Scaled to a team of 10.",
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-600/20 to-pink-400/20",
      border: "border-purple-500/50",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    },
    {
      year: "2025",
      milestone: "Global Expansion",
      description:
        "Crossed borders to serve international clients across 5 continents.",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-amber-600/20 to-orange-400/20",
      border: "border-amber-500/50",
      glow: "shadow-[0_0_20px_rgba(245,158,11,0.2)]",
    },
    {
      year: "2026",
      milestone: "The Tech Hub",
      description:
        "Moving into our new HQ and launching our first proprietary AI tool.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-emerald-600/20 to-teal-400/20",
      border: "border-emerald-500/50",
      glow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    },
  ];

  return (
    <section className="pb-24 text-white overflow-hidden">
      <Container>
        {/* Header */}
        <SectionTitle
          title={"Our Journey "}
          subTitle={
            "From a spark of an idea to a global tech force. Here is how we grew."
          }
        />
        {/* Timeline Track */}
        <div className="relative flex flex-col md:flex-row gap-6">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-purple-500/50 to-transparent -translate-y-1/2 z-0" />

          {journey.map((item, index) => (
            <div key={index} className="relative z-10 flex-1 group">
              {/* Year Bubble */}
              <div className="mb-6 flex justify-center md:justify-start">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-mono font-bold border ${item.border} bg-[#1c072e]`}
                >
                  {item.year}
                </span>
              </div>

              {/* Card */}
              <div
                className={`p-8 rounded-3xl border ${item.border} bg-gradient-to-br ${item.color} backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-3 ${item.glow}`}
              >
                <div className="mb-4 inline-block p-3 bg-white/5 rounded-2xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors">
                  {item.milestone}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-light italic">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamTimeline;
