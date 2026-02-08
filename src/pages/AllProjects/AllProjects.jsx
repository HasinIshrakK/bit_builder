import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6;

  useEffect(() => {
    fetch(
      `https://bit-builder-server.vercel.app/projects?page=${page}&limit=${limit}&sortBy=createdAt&order=desc`,
    )
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.data)
        setLoading(false);
        setTotalPages(data.totalPages)
      })

      .catch((err) => console.error(err));
  }, [page]);

  if (loading) return <p className="text-center text-3xl md:text-4xl font-semibold   bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent min-h-screen">Loading projects...</p>;

  return (
    <div className=" min-h-screen">
      <h2 className="text-center text-3xl md:text-4xl font-semibold   bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent py-8">
        Team Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
        {projects.map((project) => (
          <div key={project._id} className="card bg-base-100  h-94 shadow-sm">
            <figure>
              <img src={project.image} alt={project.title} />
            </figure>
            <div className="card-body bg-black">
              <h2 className="card-title text-white">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
              <div className="card-actions justify-end">
                <Link
                  to={`/projects/${project._id}`}
                  className="btn text-white bg-linear-to-r from-purple-400 to-fuchsia-500"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center py-8">
        <button
        disabled = {page === 1}
        onClick={()=> setPage(page - 1)}
         className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-40">
          Prev
        </button>
        {[...Array(totalPages).keys()].map((num)=>(
          <button
          key={num}
          onClick={()=> setPage(num +1)}
          className={`px-4 py-2 rounded ${
            page === num +1?"bg-fuchsia-600 text-white":"bg-gray-700 text-gray-500"
          }`} 
          >
            {num + 1}
          </button>
        ))}
        <button 
        disabled={page === totalPages}
        onClick={()=> setPage(page + 1)}
        className="px-4 py-2 bg-purple-600 text-white rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllProjects;
