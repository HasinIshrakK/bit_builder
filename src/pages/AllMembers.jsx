import { Link } from "react-router";
import members from "../data/members.json";

export default function AllMembers() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 bg-gray-900">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white">
          BitBuilder Team Members
        </h1>
        <p className="mt-2 text-gray-300">
          Meet our awesome team and explore each member profile.
        </p>
      </div>

      {/* Members Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <div
            key={m.id}
            className="rounded-2xl border border-purple-950 bg-[#1c072e] p-6 shadow-sm transition hover:shadow-md"
          >
            {/* Image + Name */}
            <div className="flex items-center gap-4">
              <img
                src={m.image}
                alt={m.name}
                className="h-16 w-16 rounded-full border border-gray-200 object-cover"
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
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-[var(--primary)]"
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
                className="w-full rounded-xl border-1 border-amber-50 px-4 py-2 text-center text-sm font-semibold text-white transition hover:opacity-90"
              >
                View Details
              </Link>

              <a
                href={m.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-xl border border-[var(--primary)] bg-white px-4 py-2 text-center text-sm font-semibold text-[var(--primary)] transition hover:bg-gray-50"
              >
                Facebook
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
