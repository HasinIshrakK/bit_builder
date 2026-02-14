import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import Container from "./Container";
import Loader from "./Loader";

const Contributors = () => {
  const [members, setMembers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch(
          "https://bit-builder-server.vercel.app/members",
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const memberList = Array.isArray(data) ? data : data.data || [];
        setMembers(memberList);
      } catch (error) {
        console.error(error);
        setMembers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  useEffect(() => {
    if (members.length < 2) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % members.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [members]);

  const getCardStyles = (index) => {
    const total = members.length;
    const relativePos = (index - activeIndex + total) % total;

    if (relativePos === 0) {
      return "z-30 scale-105 opacity-100 translate-x-0 rotate-0";
    } else if (relativePos === 1 || (total === 2 && relativePos === 1)) {
      return "z-20 scale-90 opacity-40 translate-x-48 sm:translate-x-72 rotate-y-12 blur-[1px]";
    } else if (relativePos === total - 1) {
      return "z-20 scale-90 opacity-40 -translate-x-48 sm:-translate-x-72 -rotate-y-12 blur-[1px]";
    } else {
      return "z-10 scale-50 opacity-0 pointer-events-none";
    }
  };

  if (loading) return <Loader />;

  return (
    <Container>
      <section className="relative pb-12 bg-[#050505] rounded-[3rem] text-white overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <SectionTitle
            title="Contributors Team"
            subTitle="A dedicated group of skilled individuals driving project success."
          />

          <div className="relative h-[580px] flex items-center justify-center [perspective:1500px] mt-10">
            {members.map((member, index) => (
              <div
                key={member._id || index}
                className={`absolute transition-all duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1) transform ${getCardStyles(index)}`}
              >
                {/* 1. The Gradient Border Outer Wrapper */}
                <div className="p-[2px] rounded-[2.5rem] bg-gradient-to-br from-purple-600 via-transparent to-cyan-400 shadow-[0_0_40px_-10px_rgba(168,85,247,0.2)]">
                  {/* 2. The Dark Inner Card */}
                  <div className="bg-[#0f1115] rounded-[2.4rem] p-10 w-80 sm:w-[400px] flex flex-col items-center">
                    {/* Avatar with Glow */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl" />
                      <div className="relative w-24 h-24 rounded-full p-[2px] bg-gradient-to-b from-purple-500 to-transparent">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover bg-[#0f1115]"
                        />
                      </div>
                    </div>

                    {/* Member Info */}
                    <h3 className="text-xl font-black tracking-wider text-white italic uppercase leading-none">
                      {member.name}
                    </h3>
                    <p className="mt-3 text-cyan-400 font-black tracking-[0.4em] text-[11px] uppercase">
                      {member.role || "Team Member"}
                    </p>

                    <p className="mt-6 text-gray-400 text-sm leading-relaxed max-w-[280px]">
                      {member.bio ||
                        `Team member of ${member.team || "BitBuilder"}.`}
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mt-6">
                      {member.skills?.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-gray-300 uppercase tracking-widest"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

                    {/* Socials */}
                    <div className="flex items-center gap-6">
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-white transition-all hover:scale-110"
                        >
                          <FaGithub size={22} />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="text-gray-400 hover:text-[#0077b5] transition-all hover:scale-110"
                        >
                          <FaLinkedin size={22} />
                        </a>
                      )}
                      {member.discord && (
                        <div
                          title={member.discord}
                          className="text-gray-400 hover:text-[#5865F2] cursor-pointer transition-all hover:scale-110"
                        >
                          <FaDiscord size={22} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-3 mt-4">
            {members.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-500 h-1.5 rounded-full ${
                  activeIndex === i
                    ? "w-12 bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    : "w-3 bg-white/10 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contributors;
