import { Link, useParams } from "react-router";
import members from "../data/members.json";

export default function MemberDetails() {
  const { id } = useParams();
  const member = members.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h2 className="text-2xl font-bold text-[var(--primary)]">
          Member not found
        </h2>
        <Link
          to="/members"
          className="mt-4 inline-block font-semibold underline"
        >
          ⬅ Back to Members
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 bg-[#1c072e]">
      {/* Back */}
      <Link
        to="/members"
        className="text-sm font-semibold text-[var(--primary)] hover:underline"
      >
        ⬅ Back to Members
      </Link>

      {/* Card */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-[#1c072e] shadow-sm">
        {/* Header */}
        <div className="bg-gray-50 p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <img
              src={member.image}
              alt={member.name}
              className="h-24 w-24 rounded-2xl border border-gray-200 object-cover"
            />

            <div>
              <h1 className="text-2xl font-bold text-[var(--primary)]">
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
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-[var(--primary)]"
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
              className="w-full rounded-xl border border-[var(--primary)] bg-white px-4 py-2 text-center text-sm font-semibold text-[var(--primary)] transition hover:bg-gray-50"
            >
              Email
            </a>

            <a
              href={member.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-full border-1 border-white rounded-xl bg-[var(--primary)] px-4 py-2 text-center text-sm font-semibold text-white transition hover:opacity-90"
            >
              Facebook Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
