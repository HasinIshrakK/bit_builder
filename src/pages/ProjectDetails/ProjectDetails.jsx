import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProjectDetails = () => {
    const {id} = useParams();
    const [project,setProject]= useState(null);

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
      techStack: "React,Firebase,Tailwind",
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
      techStack: "React,Firebase,Tailwind",
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
      techStack: "React,Firebase,Tailwind",
      createdAt: "2026-01-10",
    },
  ];
  useEffect(()=>{
    const projectDetails = projectsData.find((data) => data._id === id);
    setProject(projectDetails);

  },[id])

  if (!project) return <p className='text-center text-2xl'>Loading....</p>

  return (
    <div className=" flex items-center justify-center p-6">
  <div className="max-w-5xl w-full bg-[#140424] rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-8 items-center">

    {/* Left - Image */}
    <div>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto rounded-lg object-cover"
      />
    </div>

    {/* Right - Content */}
    <div>
      <h1 className="text-3xl font-bold text-white mb-4">
        {project.title}
      </h1>

      <p className="text-gray-300 leading-relaxed mb-6">
        {project.description}
      </p>
      <p className="text-gray-300 leading-relaxed mb-6">
       TechStack : {project.techStack}
      </p>
      <p className="text-gray-300 leading-relaxed mb-6">
       Created At : {project.createdAt}
      </p>

      <div className="flex gap-4">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-linear-to-r from-purple-400 to-fuchsia-500 btn text-white rounded-lg transition"
        >
          Live Preview
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-linear-to-r from-violet-600 to-purple-500 text-white btn rounded-lg transition"
        >
          GitHub Code
        </a>
      </div>
    </div>

  </div>
</div>

  )
}

export default ProjectDetails
