import React from 'react';
import projectsData from '../data/projects.json'

// Define an interface for each project in the data array
interface Project {
  name: string; // Name of the project
  dateRange: string; // Date range of the project
  description: string; // Description of the project
  responsibilities: string[]; // List of responsibilities for the project
}

const Timeline = ({ data }: { data: Project[] }) => {
  return (
    <div className="flex flex-col">
      {data.map((project, index) => (
        <div key={index} className="flex relative mb-8">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-lg font-bold">
              {index + 1}
            </div>
            <div className="h-full w-0.5 bg-gray-500 absolute top-8 left-3 z-0"></div>
          </div>
          <div className="ml-8">
            <h2 className="text-2xl font-semibold text-white">{project.name}</h2>
            <p className="text-sm text-gray-400">{project.dateRange}</p>
            <p className="text-lg text-gray-300 mb-2">{project.description}</p>
            <h3 className="text-xl font-semibold text-white mt-2">Responsibilities:</h3>
            <ol className="list-decimal list-inside pl-4 text-gray-300">
              {project.responsibilities.map((responsibility, i) => (
                <li key={i} className="mt-1">
                  {responsibility}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ))}
    </div>
  );
};

const ProjectsPage = async function () {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h1>
      <div className="bg-gray-950 shadow-lg rounded-lg p-6">
        <Timeline data={ projectsData } />
      </div>
    </div>
  );
};

export default ProjectsPage;
