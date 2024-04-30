import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(
  faPhone, faGithub, faXTwitter, faLinkedin
)

import styles from './bottom-bar.module.css'

const BottomBar = () => {
  return (
    <div className="bg-gray-950 rounded-t-[100px] mx-auto flex flex-col gap-y-6 pt-4 w-full justify-center items-center text-center">
      <p className="max-w-xl text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-fuchsia-500">
        Ready for technological advancement?<br />
        Feel free to reach out, and let&apos;s craft innovative solutions together for your project!
      </p>
      <button className="text-black bg-gradient-to-r from-green-500 to-fuchsia-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-gray-100 font-bold rounded-full text-2xl px-5 py-2.5">
        <a href="mailto:info@softaff.pl">
          <div className={styles['stack']} style={{ ['--stacks' as any] : 3 }}>
          <span style={{ ['--index' as any] : 0 }}>SEND MAIL</span>
          <span style={{ ['--index' as any] : 1 }}>SEND MAIL</span>
          <span style={{ ['--index' as any] : 2 }}>SEND MAIL</span>
        </div>
        </a>
      </button>
      <div className="flex flex-row gap-x-4 justify-center items-center" >
        <a className="text-gray-500 hover:text-gray-300" href="tel:+48504645619">
          <FontAwesomeIcon className="w-6 h-6" icon={ faPhone } />
        </a>
        <a className="text-gray-500 hover:text-gray-300" href="https://github.com/taff1x" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="w-6 h-6" icon={ faGithub } />
        </a>
        <a className="text-gray-500 hover:text-gray-300" href="https://twitter.com/universe_champ" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="w-6 h-6" icon={ faXTwitter } />
        </a>
        <a className="text-gray-500 hover:text-gray-300" href="https://www.linkedin.com/in/marcin-taff/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="w-6 h-6" icon={ faLinkedin } />
        </a>
      </div>

      <div className="flex gap-2 pb-2">
        <span>&copy; 2024</span>
        <a href="https://www.linkedin.com/in/marcin-taff/" target="_blank" rel="noopener noreferrer">
          Marcin Taff
        </a>
      </div>      
    </div>
  );
}

export default BottomBar