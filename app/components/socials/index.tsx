import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons"
library.add(
  faGithub, faTwitter, faLinkedin, faPhone
)

const Socials = () => {
    return (
      <>
        <h2 className="text-3xl font-semibold text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-tl from-green-500 to-fuchsia-500"><span className="font-normal text-gray-500">@</span>socials:</h2>
        <div className="pt-2 flex flex-row flex-wrap justify-center text-center">
          <a className="flex justify-center flex-1 max-w-[150px] text-gray-500 hover:text-gray-300" href="https://github.com/taff1x" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-12" icon={faGithub} />
          </a>
          <a className="flex justify-center flex-1 max-w-[150px]  text-gray-500 hover:text-gray-300" href="https://twitter.com/universe_champ" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-12" icon={faTwitter} />
          </a>
          <a className="flex justify-center flex-1 max-w-[150px]  text-gray-500 hover:text-gray-300" href="https://www.linkedin.com/in/marcin-taff/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="w-12" icon={faLinkedin} />
          </a>
        </div>
      </>
    );
  }
  
  export default Socials;