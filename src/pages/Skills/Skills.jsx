import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", percentage: 90, strokeColor: "#30bae7", strokeCircle: "#85a5ad" },
  { name: "CSS", percentage: 85, strokeColor: "#d74680" , strokeCircle: "#967180"},
  { name: "JavaScript", percentage: 80, strokeColor: "#14a58c", strokeCircle: "#658983" },
  { name: "React", percentage: 75, strokeColor: "#eb7d4b", strokeCircle: "#eb7d4b"},
  { name: "Next.js", percentage: 70, strokeColor: "#98e039", strokeCircle: "" },
  { name: "Node.js", percentage: 65, strokeColor: "#11c037", strokeCircle: ""},
  { name: "MongoDB", percentage: 60, strokeColor: "#d83333", strokeCircle:  ""},
  { name: "Firebase", percentage: 70, strokeColor: "#7a33d8", strokeCircle:  ""},
];

const radius = 35;
const circumference = 2 * Math.PI * radius;

const SkillsSection = () => {
  return (
    <section className="py-20 bg-[#1c072e] text-center #1c072e"> 
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 bg-[#85a5ad]">WE GOT SKILLS</h2>
        <p className="text-white mb-16 max-w-2xl mx-auto">
          Our team has strong expertise in modern web technologies.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 ">
          {skills.map((skill, index) => {
            const offset =
              circumference - (skill.percentage / 100) * circumference;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105 bg-[#200b33]"
              >
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 80 80" // 2*radius + small margin
                  className="rotate-[-90deg]"
                >
                  {/* Background Circle */}
                  <circle
                    cx="40"
                    cy="40"
                    r={radius}
                    stroke={skill.strokeCircle}
                    strokeWidth="9"
                    fill="transparent"
                  />

                  {/* Animated Circle */}
                  <motion.circle
                    cx="40"
                    cy="40"
                    r={radius}
                    stroke={skill.strokeColor}
                    strokeWidth="9"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference} // start empty
                    strokeLinecap="round"
                    animate={{ strokeDashoffset: [circumference, offset] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse", // 0 → percentage → 0
                      duration: 3,
                      ease: "linear",
                    }}
                  />
                </svg>

                {/* Percentage Text */}
                <div className="-mt-20 text-xl font-bold text-white">
                  {skill.percentage}%
                </div>

                <h3 className="mt-14 text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
