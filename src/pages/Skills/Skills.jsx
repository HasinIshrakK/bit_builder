import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    percentage: 90,
    strokeColor: "#30bae7",
    strokeCircle: "#a6d4e4",
  },
  {
    name: "CSS",
    percentage: 85,
    strokeColor: "#d74680",
    strokeCircle: "#d392ac",
  },
  {
    name: "JavaScript",
    percentage: 75,
    strokeColor: "#14a58c",
    strokeCircle: "#7ea59f",
  },
  {
    name: "React",
    percentage: 80,
    strokeColor: "#eb7d4b",
    strokeCircle: "#ecc7b6",
  },
  {
    name: "Next.js",
    percentage: 70,
    strokeColor: "#98e039",
    strokeCircle: "#546939",
  },
  {
    name: "Node.js",
    percentage: 65,
    strokeColor: "#11c037",
    strokeCircle: "#77b485",
  },
  {
    name: "MongoDB",
    percentage: 65,
    strokeColor: "#d83333",
    strokeCircle: "#d47d7d",
  },
  {
    name: "Firebase",
    percentage: 80,
    strokeColor: "#7a33d8",
    strokeCircle: "#a27bd4",
  },
];

const radius = 35;
const circumference = 2 * Math.PI * radius;

const SkillsSection = () => {
  return (
    <section className="py-20 bg-[#1c072e] text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">WE GOT SKILLS</h2>
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
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{
                      duration: 3,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                      repeatDelay: 1,
                    }}
                  />
                </svg>

                {/* Percentage Text */}
                <div className="-mt-19  text-xl font-bold text-white">
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
