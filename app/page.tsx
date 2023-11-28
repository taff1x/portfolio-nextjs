import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/img/bg.png')] bg-cover">
        <div className="bg-black bg-opacity-30 w-full h-[calc(100vh-80px)]">
          <div className="container flex flex-col-reverse md:flex-row mx-auto px-4 pt-8">
            <div className="flex flex-col gap-2 p-4 justify-center items-center text-center">
              <h1 className="text-3xl font-semibold">Automation <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-fuchsia-500">Excellence</span>:</h1>
              <h2 className="text-2xl font-semibold text-gray-300">Uniting Precision Across</h2>
              <ul className="list-none flex flex-wrap items-center justify-center whitespace-nowrap gap-2 text-lg text-gray-500">
                <li className="bg-[url('/img/checkbox.svg')] pl-8 bg-no-repeat bg-left bg-contain">SCADA</li>
                <li className="bg-[url('/img/checkbox.svg')] pl-8 bg-no-repeat bg-left bg-contain">PLCs</li>
                <li className="bg-[url('/img/checkbox.svg')] pl-8 bg-no-repeat bg-left bg-contain">Web Apps</li>
                <li className="bg-[url('/img/checkbox.svg')] pl-8 bg-no-repeat bg-left bg-contain">APIs</li>
                <li className="bg-[url('/img/checkbox.svg')] pl-8 bg-no-repeat bg-left bg-contain">Databases</li>
              </ul>
              <h1 className="text-3xl font-semibold text-center">
                for Seamless <span className="tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-fuchsia-500">Synergy</span> and Enhanced Efficiency
              </h1>
              <p className="text-gray-500 text-center pt-2">
                Integrating a Spectrum of Technologies to Drive Impeccable Precision and Operational Harmony, ultimately delivering a Satisfying and Efficient Product Experience.
              </p>
            </div>
            <figure className="flex flex-col items-center lg:flex-row bg-indigo-500 bg-opacity-50 rounded-xl p-8 md:p-0">
              <div className="mx-auto md:m-4 p-2 bg-gradient-to-tr from-green-500 to-fuchsia-500 shrink-0 rounded-full">
                <div className="p-1 bg-white rounded-full">
                  <Image className="w-48 h-48 rounded-full md:w-64 md:h-auto border-white" src="/img/avatar.jpg" alt="my-avatar" width="400" height="400" />
                </div>
              </div>
              <div className="pt-6 md:p-8 text-center lg:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">
                    Software Developer in Maritime Industry.
                    Focused on improving skills in Python and JS.
                    Husband, father, two-time-a-week-football-player. Globetrotter wannabe.
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-green-500">
                    Marcin Taff
                  </div>
                  <div className="text-gray-500">
                    Software Developer
                  </div>
                </figcaption>
              </div>
            </figure>

          </div>
        </div>
      </div>
    </>
  );
}