import { useState, useMemo } from "react";
import { Link } from "react-router";
import members from "../data/members.json";

export default function AllMembers() {
  const [query, setQuery] = useState("");

  const filteredMembers = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return members;

    return members.filter((m) =>
      `${m.name} ${m.role} ${m.email} ${m.team}`.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 bg-gray-900 animate-fadeIn">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white">
          BitBuilder Team Members
        </h1>
        <p className="mt-2 text-gray-300">
          Meet our awesome team and explore each member profile.
        </p>
      </div>

      {/* 🔎 Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Search members by name, role, email..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md rounded-xl border border-gray-600 bg-gray-800 px-4 py-2 text-white outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]"
        />
      </div>

      {/* Members Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredMembers.map((m) => (
          <div
            key={m.id}
            className="rounded-2xl border border-purple-950 bg-[#1c072e] p-6 shadow-sm 
                       transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-purple-600"
          >
            {/* Image + Name */}
            <div className="flex items-center gap-4">
              <img
                src={m.image}
                alt={m.name}
                className="h-16 w-16 rounded-full border border-gray-200 object-cover 
                           transition-transform duration-300 hover:scale-110"
              />

              <div>
                <h3 className="text-lg font-semibold text-white">{m.name}</h3>
                <p className="text-sm text-gray-400">{m.role}</p>
              </div>
            </div>

            {/* Bio */}
            <p className="mt-4 text-sm text-gray-400">
              {m.bio.length > 95 ? m.bio.slice(0, 95) + "..." : m.bio}
            </p>

            {/* Skills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {m.skills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-[var(--primary)]
                             transition hover:bg-white hover:shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-5 space-y-1 text-sm text-gray-300">
              <p>
                <span className="font-semibold text-gray-400">Email:</span>{" "}
                {m.email}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Discord:</span>{" "}
                {m.discord}
              </p>
              <p>
                <span className="font-semibold text-gray-400">Phone:</span>{" "}
                {m.phone}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-3">
              <Link
                to={`/members/${m.id}`}
                className="w-full rounded-xl border border-white px-4 py-2 text-center text-sm font-semibold text-white
                           transition-all duration-300 hover:bg-white hover:text-black"
              >
                View Details
              </Link>

              <a
                href={m.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-xl border border-[var(--primary)] bg-white px-4 py-2 text-center text-sm font-semibold text-[var(--primary)]
                           transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                Facebook
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <p className="mt-10 text-center text-gray-400">No members found.</p>
      )}
    </div>
  );
}
