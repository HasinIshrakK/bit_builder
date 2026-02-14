import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import members from "../data/members.json";

export default function MemberDetails() {
  const { id } = useParams();
  const member = members.find((m) => m.id === id);

  const pageAnim = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  if (!member) {
    return (
      <motion.div
        variants={pageAnim}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-4 py-10"
      >
        <h2 className="text-2xl font-bold text-[var(--primary)]">
          Member not found
        </h2>
        <Link
          to="/members"
          className="mt-4 inline-block font-semibold underline transition-opacity hover:opacity-80"
        >
          ⬅ Back to Members
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="mx-auto max-w-3xl px-4 py-10 bg-[#1c072e]"
    >
      {/* Back */}
      <Link
        to="/members"
        className="text-sm font-semibold text-[var(--primary)] transition hover:underline hover:opacity-90"
      >
        ⬅ Back to Members
      </Link>

      {/* Card */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.15 }}
        className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-[#1c072e] shadow-sm
                   transition-all duration-200 hover:shadow-md hover:border-gray-300"
      >
        {/* Header */}
        <div className="bg-[#1c072e] gray-30 p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <motion.img
              src={member.image}
              alt={member.name}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.18 }}
              className="h-24 w-24 rounded-2xl border border-gray-200 object-cover"
            />

            <div>
              <h1 className="text-2xl text-white font-bold text-[var(--primary)]">
                {member.name}
              </h1>
              <p className="mt-1 text-gray-400">{member.role}</p>
              <p className="mt-1 text-sm text-gray-600">
                Team: <span className="font-semibold">{member.team}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Bio */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--primary)]">Bio</h3>
            <p className="mt-2 text-sm text-gray-400">{member.bio}</p>
          </div>

          {/* Contact */}
          <div className="mt-6 grid gap-3 text-sm text-gray-400 sm:grid-cols-2">
            <p>
              <span className="font-semibold text-gray-400">Email:</span>{" "}
              {member.email}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Discord:</span>{" "}
              {member.discord}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Phone:</span>{" "}
              {member.phone}
            </p>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-[var(--primary)]">
              Skills
            </h3>

            <div className="mt-3 flex flex-wrap gap-2">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-[var(--primary)]
                             transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${member.email}`}
              className="w-full rounded-xl border border-[var(--primary)] bg-white px-4 py-2 text-center text-sm font-semibold text-[var(--primary)]
                         transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-sm"
            >
              Email
            </a>

            <a
              href={member.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-xl bg-[var(--primary)] border border-1 px-4 py-2 text-center text-sm font-semibold text-white
                         transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md"
            >
              Facebook Profile
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
