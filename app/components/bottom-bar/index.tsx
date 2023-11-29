import React from 'react'

const BottomBar = () => {
  return (
    <div className="bg-gray-950 rounded-t-[100px] mx-auto flex flex-col gap-y-6 pt-4 w-full justify-center items-center text-center">
      <p className="max-w-xl text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-fuchsia-500">
        Ready for technological advancement?<br />
        Feel free to reach out, and let's craft innovative solutions together for your project!
      </p>
      <button className="text-black bg-gradient-to-r from-green-500 to-fuchsia-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold rounded-full text-lg px-5 py-2.5">
        <a href="mailto:info@softaff.pl">
          Mail me
        </a>
      </button>
      <div className="flex gap-2 pb-2">
        <span>&copy; 2023</span>
        <a href="https://www.linkedin.com/in/marcin-taff/" target="_blank" rel="noopener noreferrer">
          Marcin Taff
        </a>
      </div>      
    </div>
  );
}

export default BottomBar