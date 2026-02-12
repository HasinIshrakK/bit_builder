import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const limit = 6;

  useEffect(() => {
    fetch(
      `https://bit-builder-server.vercel.app/projects?page=${page}&limit=${limit}&sortBy=createdAt&order=desc`
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.data);
        setFilteredProjects(data.data);
        setLoading(false);
        setTotalPages(data.totalPages);
      })
      .catch((err) => console.error(err));
  }, [page]);

  // 🔍 Client-side search
  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [search, projects]);

  if (loading)
    return (
      <p className="text-center text-3xl md:text-4xl font-semibold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent min-h-screen items-center flex justify-center animate-pulse">
        Loading Projects...
      </p>
    );

  return (
    <div className="min-h-screen animate-fadeIn">
      <h2 className="text-center text-3xl md:text-4xl font-semibold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent py-8">
        Team Projects
      </h2>

      {/* 🔍 Search */}
      <div className="flex justify-center pb-6">
        <input
          type="text"
          placeholder="Search project by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80 px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-purple-500 transition"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
        {filteredProjects.map((project) => (
          <div
            key={project._id}
            className="card bg-base-100 h-94 shadow-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
          >
            <figure className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="transition duration-500 hover:scale-110"
              />
            </figure>

            <div className="card-body bg-[#1C072E]">
              <h2 className="card-title text-white">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>

              <div className="card-actions justify-end">
                <Link
                  to={`/projects/${project._id}`}
                  className="btn text-white bg-linear-to-r from-purple-400 to-fuchsia-500 transition duration-300 hover:from-fuchsia-500 hover:to-purple-600 hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 justify-center py-8">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-40 transition hover:bg-purple-700"
        >
          Prev
        </button>

        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num}
            onClick={() => setPage(num + 1)}
            className={`px-4 py-2 rounded transition transform hover:scale-110 ${
              page === num + 1
                ? "bg-fuchsia-600 text-white"
                : "bg-gray-700 text-gray-400 hover:bg-gray-600"
            }`}
          >
            {num + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-40 transition hover:bg-purple-700"
        >
          Next
        </button>
      </div>

      {/* 🔥 Tailwind custom animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
};

export default AllProjects;
