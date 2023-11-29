import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationArrow } from "@fortawesome/free-solid-svg-icons"
library.add(
  faEnvelope, faLocationArrow, faPhone
)

const ContactSection = () => {
  return (
    <div className="container m-auto flex w-full flex-col py-16 p-2 items-center justify-center text-center">
      <h2 className="text-3xl font-semibold text-center tracking-wider text-transparent bg-clip-text bg-gradient-to-tl from-green-500 to-fuchsia-500"><span className="font-normal text-gray-500">@</span>get in touch:</h2>
      <p className="max-w-lg py-4">Should you wish to inquire about my services, ask any questions, or arrange a meeting, please feel free to contact me via email or phone. Your communication is greatly appreciated.</p>
      <div className="flex flex-col gap-y-2 justify-center items-center" >
        <a className="flex gap-2 text-gray-500 hover:text-gray-300" href="mailto:info@softaff.pl">
          <FontAwesomeIcon className="w-6" icon={faEnvelope} />info@softaff.pl
        </a>
        <a className="flex gap-2 text-gray-500 hover:text-gray-300" href="tel:+48504645619">
        <FontAwesomeIcon className="w-6" icon={faPhone} />+48 504 645 619
        </a>
        <a className="flex gap-2 text-gray-500 hover:text-gray-300" href="https://www.google.com/maps/d/viewer?mid=1Lz7KqpjP-bwbFR0AllfU1yTkNiw&hl=en_US&ll=54.50146786496932%2C18.50812150000001&z=13" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="w-6" icon={faLocationArrow} />Gdynia, Poland
        </a>
        </div>
      </div>
    );
  };

export default ContactSection