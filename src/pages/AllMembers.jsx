import { Link } from "react-router";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

export default function AllMembers() {

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axiosInstance.get("/members");
        setMembers(response.data.data);
      } catch (err) {
        console.error("Failed to fetch members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [axiosInstance, members]);

  if (loading) return <p className="text-center text-3xl md:text-4xl font-semibold   bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent min-h-screen items-center flex justify-center">Loading Members Info...</p>;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold  bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          The Dream Team
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
                  className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-(--primary)"
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
                to={`/members/${m._id}`}
                className="w-full rounded-xl border border-amber-50 px-4 py-2 text-center text-sm font-semibold text-white transition hover:opacity-90"
              >
                View Details
              </Link>

              <a
                href={m.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-full rounded-xl border border-(--primary) bg-white px-4 py-2 text-center text-sm font-semibold text-(--primary) transition hover:bg-gray-50"
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
