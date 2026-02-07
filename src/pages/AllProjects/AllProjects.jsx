import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  const projectsData = [
    {
      _id: "1",
      title: "Team Portfolio Website",
      description:
        "A collaborative portfolio website showcasing team members, projects, and skills with modern responsive design.",
      image:
        "https://i.pinimg.com/736x/53/fe/47/53fe47e0a3648d9492ccc8370ab42066.jpg",
      liveLink: "#",
      github: "#",
      techStack: ["React", "Tailwind", "Node.js"],
      createdAt: "2026-01-01",
    },
    {
      _id: "2",
      title: "E-commerce Web App",
      description:
        "A full-stack e-commerce platform with product listing, cart system, and secure authentication for smooth online shopping.",
      image:
        "https://i.pinimg.com/736x/53/fe/47/53fe47e0a3648d9492ccc8370ab42066.jpg",
      liveLink: "#",
      github: "#",
      techStack: ["React", "Express", "MongoDB"],
      createdAt: "2026-01-05",
    },
    {
      _id: "3",
      title: "Task Management System",
      description:
        "A productivity web app to manage daily tasks, set priorities, and track progress with an intuitive user interface.",
      image:
        "https://i.pinimg.com/736x/53/fe/47/53fe47e0a3648d9492ccc8370ab42066.jpg",
      liveLink: "#",
      github: "#",
      techStack: ["React", "Firebase", "Tailwind"],
      createdAt: "2026-01-10",
    },
  ];

  useEffect(() => {
    setProjects(projectsData);
    
  }, []);

  return (
    <div className="bg-[#1C072E] min-h-screen">
      <h2 className="text-center text-2xl font-semibold  text-purple-400 py-8">
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
    </div>
  );
};

export default AllProjects;
