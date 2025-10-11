import React, {useState} from "react";
import { BsGithub, BsLinkedin, BsEnvelope, BsCalendarCheck } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaCalendarDays, FaCircle } from "react-icons/fa6";

const HeroBrief = () => {

  const themeData = {
    'brown': {
      text: "#4e2f18",
      background: "#f4e2c6",
      icons: "#4e2f18",
      highlightBackground: "#694023",
      highlightText: "#efdec6",
      border: "#b0956e"
    },
    'darkBlue': {
      text: "#172554",
      background: "#eff6ff",
      icons: "#172554",
      highlightBackground: "#172554",
      highlightText: "#f5f5f4",
      border: "#93c5fd"
    },
    'darkMode': {
      text: "#e2e8f0",
      background: "#0f0f0f",
      icons: "#0f0f0f",
      highlightBackground: "#e2e8f0",
      highlightText: "#0f0f0f",
      border: "#334155"
    },
    'white': {
      text: "#000000",
      background: "#ffffff",
      icons: "#000000",
      highlightBackground: "#000000",
      highlightText: "#ffffff",
      border: "#e2e8f0"
    }
  }

  const [currentTheme, setCurrentTheme] = useState("brown")

  
  return (
    <div 
      className={`h-max px-6 sm:px-20 pt-10 font-outfit flex items-center justify-center`}
      style={{backgroundColor: themeData[currentTheme].background, color: themeData[currentTheme].text}}
    >
      {/* <div className="absolute py-2 top-0 bg-[#794a29] w-full text-white text-center px-2">
        This is a <i>brief</i> version of my portfolio, find more about my work
        on{" "}
        <a
          href="https://pranavkonjeti.com"
          className="underline bg-[#9b653e] px-1 py-px rounded-md"
          target="_blank"
        >
          my main portfolio
        </a>
        .
      </div> */}

      <div className="flex flex-col gap-y-6 max-w-[40rem] text-lg">
        <div className="flex flex-col gap-y-1">
          <h1 className="four-title font-medium">Hey! I'm Pranav</h1>
          <p className="">
            I'm an 18 y/o developer and designer from Richmond, Virginia. I love creating 
            beautiful interfaces and user-facing tech. Currently a freshman studying {' '}
            <span className="font-semibold">Computer Science</span> @ UIUC!
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1 className="four-title font-medium">What I'm doing/did:</h1>

          <div className="space-y-4">
            <div className="space-y-2">
              <h4>
                Worked @ {" "}
                <a
                  href="https://www.ycombinator.com/companies/ultra-2"
                  className="highlight"
                  style={{backgroundColor: themeData[currentTheme].highlightBackground, color: themeData[currentTheme].highlightText, borderColor: themeData[currentTheme].border}}
                  target="_blank"
                >
                  Ultra (YC W24)
                </a>{" "}
                as a Software Engineering Intern
              </h4>
              <ul className="list-disc pl-10">
                <li>
                  Helped fully design + develop features/pages like the landing page, career simulation and redesign critical features like 
                  the college simulation platform, roadmap, etc.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4>
                Running{" "}
                <a
                  href="https://thryvedesign.com"
                  className="highlight"
                  style={{backgroundColor: themeData[currentTheme].highlightBackground, color: themeData[currentTheme].highlightText, borderColor: themeData[currentTheme].border}}
                  target="_blank"
                >
                  ThryveDesign
                </a>
                , my freelance web develompent agency.
              </h4>
              <ul className="list-disc pl-10">
                <li>
                  I've worked with over 25 businesses/nonprofits around the
                  world.
                </li>
                <li>Generated low 5-figure (20k~) revenue within a year</li>
                <li>
                  Here is some of my agency's{" "}
                  <a
                    href="https://thryvedesign.com/showcase"
                    target="_blank"
                    className="highlight"
                    style={{backgroundColor: themeData[currentTheme].highlightBackground, color: themeData[currentTheme].highlightText, borderColor: themeData[currentTheme].border}}
                  >
                    work and sample designs.
                  </a>
                  {/* <br />
                  <ul className="list-disc pl-4 mt-1">
                    <li>I normally charge around <b>$1000</b> for a full design + functional website</li>
                  </ul> */}
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4>
                Built{" "}
                <a
                  href="https://talem.org"
                  className="highlight"
                  style={{backgroundColor: themeData[currentTheme].highlightBackground, color: themeData[currentTheme].highlightText, borderColor: themeData[currentTheme].border}}
                  target="_blank"
                >
                  talem
                </a>
                , a platform connecting high schoolers w/ opportunities
              </h4>
              <ul className="list-disc pl-10">
                <li>
                  1.2M page views, 200k unique users, 400~ daily users to date.
                </li>
                <li>
                  Raised grants from organizations like Emergent Ventures (31st
                  cohort) to continue platform's mission.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <h1 className="four-title font-medium">Misc:</h1>

          <div className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4>I love Indie Hacking & building fun, user-facing products online</h4>
                <ul className="list-disc pl-10 space-y-2">
                  <li>
                    Built{" "}
                    <a
                      href="https://desourcedesign.vercel.app/"
                      className="highlight"
                      style={{backgroundColor: themeData[currentTheme].highlightBackground, color: themeData[currentTheme].highlightText, borderColor: themeData[currentTheme].border}}
                      target="_blank"
                    >
                      desource
                    </a>
                    , an open directory of free web-development resources
                  </li>
                  <li>
                    Built a{" "}
                    <a
                      href="https://ecoeats.us"
                      target="_blank"
                      className="highlight"
                      style={{backgroundColor: themeData[currentTheme].highlightBackground, color: themeData[currentTheme].highlightText, borderColor: themeData[currentTheme].border}}
                    >
                      sustainable food app
                    </a>{" "}
                    with some friends, an{" "}
                    <a
                      href="https://www.youtube.com/watch?v=ZjpzYi6aBa8"
                      target="_blank"
                      className="highlight"
                      style={{backgroundColor: themeData[currentTheme].highlightBackground, color: themeData[currentTheme].highlightText, borderColor: themeData[currentTheme].border}}
                    >
                      AI-language learning app
                    </a>
                    , and a website that simplifies{" "}
                    <a
                      href="https://www.linkedin.com/posts/pranav-konjeti_easyaps-ai-can-now-grade-your-frq-response-activity-7220802778858696704-3VPA?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      className="highlight"
                      style={{backgroundColor: themeData[currentTheme].highlightBackground, color: themeData[currentTheme].highlightText, borderColor: themeData[currentTheme].border}}
                    >
                      AP exam prep
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="list-disc pl-2 space-y-4">
                <li>
                  I was selected as a 2025 Taco Bell Live Más Scholar out of
                  15,000 applicants (4% acceptance rate) for my work in EdTech,
                  receiving a five-figure scholarship plus networking and career
                  development opportunities.
                </li>
                {/* <li>
                  I've tutored over 500 students and garnered 2000+ positive
                  ratings on the nonprofit Schoolhouse.{" "}
                  <a
                    href="https://schoolhouse.world/u/pranav"
                    target="_blank"
                    className="highlight"
                    style={{backgroundColor: themeData[currentTheme].highlightBackground, color: themeData[currentTheme].highlightText, borderColor: themeData[currentTheme].border}}
                  >
                    My Portfolio
                  </a>
                </li> */}
                {/* <li>
                  I love staying active: I played varsity volleyball for my school team, go to the gym, and love the occasional tennis/pickleball match
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-1 mb-4">
          <h1 className="three-title font-medium">Interests</h1>
          <p>Tech, Startups, Education, AI, UI/UX Design</p>
        </div>

        {/* Edit Theme */}
        {/* <div className="flex flex-col items-center justify-center gap-y-4 bg-white shadow-md p-2 rounded-lg m-4 w-max fixed top-0 right-0">

          <div className="flex flex-col gap-2">
            <button
              className="flex items-center justify-center font-semibold hover:bg-slate-100 duration-300 p-2 rounded-md"
              onClick={() => setCurrentTheme("brown")}
            >
              <FaCircle className="text-2xl text-[#4e2f18]" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <button
              className="flex items-center justify-center font-semibold hover:bg-slate-100 duration-300 p-2 rounded-md"
              onClick={() => setCurrentTheme("darkBlue")}
            >
              <FaCircle className="text-2xl text-[#4a77b5]" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <button
              className="flex items-center justify-center font-semibold hover:bg-slate-100 duration-300 p-2 rounded-md"
              onClick={() => setCurrentTheme("darkMode")}
            >
              <FaCircle className="text-2xl text-[#18181B]" />
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <button
              className="flex items-center justify-center font-semibold hover:bg-black duration-300 p-2 rounded-md"
              onClick={() => setCurrentTheme("white")}
            >
              <FaCircle className="text-2xl text-slate-100" />
            </button>
          </div>
        </div> */}

        {/* Important Links */}
        <div className="flex flex-col items-center justify-center gap-y-4 bg-white shadow-md p-2 rounded-lg m-4 w-max fixed bottom-0 right-0">
          <div className="flex flex-col gap-2" style={{color: themeData[currentTheme].icons}}>
            <a
              href="https://www.linkedin.com/in/pranav-konjeti/"
              className="flex items-center justify-center font-semibold hover:bg-slate-100 duration-300 p-3 rounded-md"
              target="_blank"
            >
              <BsLinkedin className="text-xl" />
            </a>
            <a
              href="mailto:pranavkonjeti@gmail.com"
              className="flex items-center justify-center font-semibold hover:bg-slate-100 duration-300 p-3 rounded-md"
              target="_blank"
            >
              <FaEnvelope className="text-xl" />
            </a>
            <a
              href="https://github.com/PkTheCoda"
              className="flex items-center justify-center font-semibold hover:bg-slate-100 duration-300 p-3 rounded-md"
              target="_blank"
            >
              <BsGithub className="text-xl" />
            </a>
            <a
              href="https://cal.com/pranavkonjeti/15min"
              className="flex items-center justify-center font-semibold hover:bg-slate-100 duration-300 p-3 rounded-md"
              target="_blank"
            >
              <FaCalendarDays className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBrief;
