import React from 'react';

const AboutMePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
      <div className="bg-gray-950 shadow-lg rounded-lg p-6">
        <p className="text-lg text-gray-300 mb-4">
          With over 8 years of professional experience, I am a dedicated Electrical & Automation Engineer specializing in the maritime shipbuilding industry. My expertise encompasses the design and programming of cutting-edge control and visualization systems, with a strong focus on SCADA systems. I am well-versed in programming languages such as Python, JavaScript, C, ST (SCL), and Ladder Diagram (LAD). I am deeply committed to continuously honing my skills in high-level programming languages.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          My foundation in electrical and instrumentation engineering is rock-solid, covering everything from design and engineering to on-site commissioning. I have actively participated in a wide array of projects, collaborating closely with installation departments and navigating the unique requirements of different Classification Societies. My passion lies in pushing the boundaries of technology and contributing to the advancement of maritime automation and electrical systems.
        </p>
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-white mb-2">OpenCPLC Project</h2>
          <p className="text-lg text-gray-300 mb-4">
            Along with friends, I founded the OpenCPLC project, which focuses on embedded systems using the STM32 microcontroller. This project aims to develop innovative solutions for complex control and automation tasks. My work on OpenCPLC has allowed me to leverage my expertise in embedded systems and explore the potential of new technologies in the field.
          </p>
          <a
            href="https://github.com/OpenCPLC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 font-semibold hover:underline"
          >
            OpenCPLC GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
