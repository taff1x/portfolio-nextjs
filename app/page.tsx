import React from "react";

import LandingPage from "./components/landing-page";

export default function Home() {
  return (
    <>
      
      <div className="bg-[url('/img/bg.png')] bg-cover">
          <div className="bg-black bg-opacity-50">
            <LandingPage />
          </div>
      </div>

    </>
  );
}