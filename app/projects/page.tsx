import React from 'react';
import Timeline from '@/app/components/timeline'
import projectsData from '@/app/data/projects.json'

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
