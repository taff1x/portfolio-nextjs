"use client";
import React from 'react'
import { useState } from "react";
import NavBar from './navbar'
import SideBar from "./sidebar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar isOpen={isOpen} toggle={toggle} />
    </>
  )
}

export default Navigation

