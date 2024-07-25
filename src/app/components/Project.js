// src/app/components/Projects.js
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  gray: 'bg-gray-500',
  orange: 'bg-orange-300',
  lightBlue: 'bg-blue-400',
  // Add more colors as needed
};

const Projects = ({ projects }) => {
  // By default, the first project is open
  const [expandedIndices, setExpandedIndices] = useState([0,1]);
  const [currentImageIndices, setCurrentImageIndices] = useState(projects.map(() => 0));

  const handleToggle = (index) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const handleNextImage = (projectIndex) => {
    setCurrentImageIndices((prevIndices) =>
      prevIndices.map((imageIndex, i) =>
        i === projectIndex ? (imageIndex + 1) % projects[projectIndex].images.length : imageIndex
      )
    );
  };

  const handlePrevImage = (projectIndex) => {
    setCurrentImageIndices((prevIndices) =>
      prevIndices.map((imageIndex, i) =>
        i === projectIndex ? (imageIndex - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length : imageIndex
      )
    );
  };

  return (
    <section id="projects" className="container mx-auto py-10 my-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index}>
            <button
              className="text-2xl font-bold text-left w-full focus:outline-none flex justify-between items-center bg-gray-200 hover:bg-gray-300 p-4 rounded"
              onClick={() => handleToggle(index)}
            >
              <span className="text-gray-800">{project.title}</span>
              <span className="text-gray-800">
                {expandedIndices.includes(index) ? '-' : '+'}
              </span>
            </button>
            {expandedIndices.includes(index) && (
              <div className="mt-2 flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 h-auto mb-2 rounded relative" style={{ height: '200px' }}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={project.images[currentImageIndices[index]]}
                      alt={`${project.title} screenshot Zihe Peter Zhang`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </a>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-2">
                    <button
                      className="bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      onClick={() => handlePrevImage(index)}
                    >
                      &lt;
                    </button>
                    <button
                      className="bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      onClick={() => handleNextImage(index)}
                    >
                      &gt;
                    </button>
                  </div>
                </div>
                <div className="md:ml-4 w-full md:w-2/3">
                  <div className="flex flex-wrap space-x-2 mb-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 rounded text-white ${colorClasses[tech.color]}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
