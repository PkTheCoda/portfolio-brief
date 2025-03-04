import React from 'react'

const HeroBrief = () => {
  return (
    <div className='bg-[#f8e1bf] h-max px-6 sm:px-20 py-20 text-[#794a29] font-outfit flex items-center justify-center'>

      <div className='absolute py-2 top-0 bg-[#794a29] w-full text-white text-center'>
        This is a <i>brief</i> version of my portfolio, find everything about me on <a href="https://pranavkonjeti.com" className='underline bg-[#9b653e] px-1 py-px rounded-md' target='_blank'>my main portfolio</a>.
      </div>

      <div className='flex flex-col gap-y-6 max-w-[35rem]'>

        <div className='flex flex-col gap-y-1'>
          <h1 className='three-title font-medium'>
            Hey 👋, I'm Pranav
          </h1>
          <p className=''>
            I'm a 17-year-old developer and designer from Virginia. I focus on building impactful EdTech software for high schoolers & designing beautiful websites on the side!
          </p>
        </div>

        <div className='flex flex-col gap-y-1'>
          <h1 className='three-title font-medium'>
            What I've done/do:
          </h1>

          <div className='space-y-4'>
            <div className="space-y-2">
              <h4>
                Built <a href="https://talem.org" className='underline font-semibold bg-[#ebcfa8] px-1 py-px rounded-md' target='_blank'>talem</a>, a platform connecting high schoolers w/ opportunities
              </h4>
              <ul className="list-disc pl-10">
                <li>1.2M page views, 200k unique users, 400~ daily users to date.</li>
                <li>Received a 4-figure grant to further democratize education</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4>
                Run  <a href="https://thryvedesign.com" className='underline font-semibold bg-[#ebcfa8] px-1 py-px rounded-md' target='_blank'>ThryveDesign</a>, my web development agency
              </h4>
              <ul className="list-disc pl-10">
                <li>Worked with over 25 businesses/nonprofits around the world.</li>
                <li>Generated low 5-figure revenue within a year (10hr/week)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4>
                Indie Hacking & Building Cool Sh*t online
              </h4>
              <ul className="list-disc pl-10">
                <li>Built <a href="https://desource.app" className='underline font-semibold bg-[#ebcfa8] px-1 py-px rounded-md' target='_blank'>desource</a>, a directory of free web-development resources</li>
                <li>Currently working on EasyAP, an EdTech app that simplifies AP Exam prep {' '}
                  <a 
                    href="https://www.linkedin.com/posts/pranav-konjeti_easyaps-ai-can-now-grade-your-frq-response-activity-7220802778858696704-3VPA?utm_source=share&utm_medium=member_desktop"
                    target='_blank'
                    className='font-semibold underline bg-[#ebcfa8] px-1 py-px rounded-md'
                  >
                    (demo)
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className='flex flex-col gap-y-1'>
          <h1 className='three-title font-medium'>
            Fun facts:
          </h1>

          <div className='space-y-4'>

            <div className="space-y-2">
              <ul className="list-disc pl-10 space-y-2">
                <li>I have tutored over 500 students from 70 different countries for free and have over 2000 positive ratings. <a href="https://schoolhouse.world/u/pranav" className='underline font-semibold bg-[#ebcfa8] px-1 py-px rounded-md' target='_blank'>Look at my tutoring portfolio.</a></li>
                <li>I love getting active: going to the gym, playing pickleball with friends, beach volleyball, etc.</li>
              </ul>
            </div>

          </div>

        </div>

        <div className='flex flex-col gap-y-1'>
          <h1 className='three-title font-medium'>
            Interests
          </h1>

          <p>Tech, Startups, Education, AI, Web Design</p>

        </div>

        <div className='flex flex-col gap-y-1'>
          <h1 className='three-title font-medium'>
            hmu
          </h1>

          <div className='flex gap-x-2'>
            <a href="https://www.linkedin.com/in/pranav-konjeti/" className=' font-semibold bg-[#ebcfa8] px-2 py-px rounded-md' target='_blank'>LinkedIn</a>
            <a href="mailto:pranavkonjeti@gmail.com" className=' font-semibold bg-[#ebcfa8] px-2 py-px rounded-md' target='_blank'>Email</a>
            <a href="https://github.com/PkTheCoda" className=' font-semibold bg-[#ebcfa8] px-2 py-px rounded-md' target='_blank'>GitHub</a>
            <a href="https://buymeacoffee.com/pranavkonjeti" className=' font-semibold bg-[#ebcfa8] px-2 py-px rounded-md' target='_blank'>Buy a Coffee :)</a>
          </div>

        </div>

      </div>

    </div>
  )
}

export default HeroBrief

