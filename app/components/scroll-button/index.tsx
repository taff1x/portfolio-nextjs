"use client"

import React, { useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleChevronUp }  from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(
    faCircleChevronUp
)

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const handleVisible = () => {
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        
        scrolled > 300 ? setVisible(true) : setVisible(false);
      };
  
      window.addEventListener('scroll', handleVisible);
  
      return () => {
        window.removeEventListener('scroll', handleVisible);
      };
    }, []);
    
    const scrollToTop = () => {
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
      
    return (
      <button
        className="bg-indigo-500/80 border-none rounded-lg bottom-3 text-black cursor-pointer hidden outline-none p-3 fixed right-3 z-9"
        style={{display: visible ? 'inline' : 'none'}}
        onClick={scrollToTop}
      >
        <FontAwesomeIcon className="w-8 h-8" icon={ faCircleChevronUp } />
      </button>
    );
}

export default ScrollButton