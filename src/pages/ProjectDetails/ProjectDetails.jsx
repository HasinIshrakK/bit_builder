import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProjectDetails = () => {
    const {id} = useParams();
    const [project,setProject]= useState(null);

  
  useEffect(()=>{
    
    fetch(`https://bit-builder-server.vercel.app/projects/${id}`)
    .then((res) => res.json())
    .then((data) => setProject(data)) 
    .catch((err) => console.error(err));

  },[id])

  if (!project) return <p className='text-center text-3xl md:text-4xl font-semibold   bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent min-h-screen'>Loading....</p>

  return (
    <div className=" flex items-center justify-center p-6 min-h-screen">
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
