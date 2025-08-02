import React from "react";
import { BsGithub } from "react-icons/bs";

const HeroBrief = () => {
  return (
    <div className="bg-[#f8e1bf] h-max px-6 sm:px-20 pt-20 text-[#694023] font-outfit flex items-center justify-center">
      <div className="absolute py-2 top-0 bg-[#794a29] w-full text-white text-center px-2">
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
      </div>

      <div className="flex flex-col gap-y-6 max-w-[40rem] text-lg">
        <div className="flex flex-col gap-y-1">
          <h1 className="four-title font-medium">Hey 👋, I'm Pranav</h1>
          <p className="">
            I'm a 17-year-old web developer and designer from Virginia. I like desiginig 
            websites with beautiful UI and building impactful EdTech for students.
            This upcoming fall, I'll be studying <b className="font-semibold">Computer Science at UIUC.</b>
          </p>
        </div>

        <div className="flex flex-col gap-y-2">
          <h1 className="four-title font-medium">What I'm doing:</h1>

          <div className="space-y-4">

            <div className="space-y-2">
              <h4>
                Working as a paid Software Engineering Intern @ {" "}
                <a
                  href="https://www.ycombinator.com/companies/ultra-2"
                  className="highlight"
                  target="_blank"
                >
                  Ultra
                </a>
              </h4>
              <ul className="list-disc pl-10">
                <li>
                  Ultra is a Y-Combinator backed startup helping students globally achieve their dreams with AI.
                </li>
                <li>
                  I'm working on shipping, implementing, and refactoring different features for their platform.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4>
                Building{" "}
                <a
                  href="https://talem.org"
                  className="highlight"
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
                  Raised grants from organizations like Emergent Ventures (31st cohort) to continue platform's mission.
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4>
                Running{" "}
                <a
                  href="https://thryvedesign.com"
                  className="highlight"
                  target="_blank"
                >
                  ThryveDesign
                </a>
                , my web develompent agency.
              </h4>
              <ul className="list-disc pl-10">
                <li>
                  I've worked with over 25 businesses/nonprofits around the
                  world.
                </li>
                <li>
                  Generated low 5-figure revenue within a year
                </li>
                <li>
                  Here is some of my agency's{" "}
                  <a
                    href="https://thryvedesign.com/showcase"
                    target="_blank"
                    className="highlight"
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
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <h1 className="four-title font-medium">Miscellaneous:</h1>

          <div className="space-y-4">
            <div className="space-y-4">
            <div className="space-y-2">
              <h4>I love Indie Hacking & Building useful (?) stuff online</h4>
              <ul className="list-disc pl-10 space-y-2">
                <li>
                  I built{" "}
                  <a
                    href="https://desourcedesign.vercel.app/"
                    className="highlight"
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
                  >
                    sustainable food app
                  </a>{" "}
                  with some friends, an{" "}
                  <a
                    href="https://www.youtube.com/watch?v=ZjpzYi6aBa8"
                    target="_blank"
                    className="highlight"
                  >
                    AI-language learning app
                  </a>
                  , and a website that simplifies{" "}
                  <a
                    href="https://www.linkedin.com/posts/pranav-konjeti_easyaps-ai-can-now-grade-your-frq-response-activity-7220802778858696704-3VPA?utm_source=share&utm_medium=member_desktop"
                    target="_blank"
                    className="font-semibold underline bg-[#ebcfa8] px-1 py-px rounded-md"
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
                  >
                    My Portfolio
                  </a>
                </li> */}
                <li>
                  I love staying active: I played varsity volleyball for my school team, go to the gym, and love the occasional tennis/pickleball match
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-1">
          <h1 className="three-title font-medium">Interests</h1>
          <p>Tech, Startups, Education, AI, UI/UX Design</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-4 bg-[#794a29] shadow-md px-4 py-8 rounded-t-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <a
              href="https://www.linkedin.com/in/pranav-konjeti/"
              className="flex items-center justify-center font-semibold bg-[#ebcfa8] px-3 py-px rounded-md"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="mailto:pranavkonjeti@gmail.com"
              className="flex items-center justify-center font-semibold bg-[#ebcfa8] px-3 py-px rounded-md"
              target="_blank"
            >
              Email
            </a>
            <a
              href="https://github.com/PkTheCoda"
              className="flex items-center justify-center font-semibold bg-[#ebcfa8] px-3 py-px rounded-md"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://cal.com/pranavkonjeti/15min"
              className="flex items-center justify-center font-semibold bg-[#ebcfa8] px-3 py-px rounded-md"
              target="_blank"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBrief;
