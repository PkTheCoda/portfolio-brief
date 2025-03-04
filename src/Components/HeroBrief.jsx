import React from 'react'

const HeroBrief = () => {
  return (
    <div className='bg-[#ffe0b2] h-screen flex items-center justify-center text-[#794a29] font-outfit'>
      <div className='flex flex-col gap-y-6 max-w-[40rem] bg-red-200'>

        <div className='flex flex-col gap-y-3'>
          <h1 className='four-title font-medium'>
            Hey, I'm Pranav
          </h1>
          <p className=''>
            I'm a 17-year-old developer and designer. I focus on building EdTech software for high schoolers & designing beautiful software for the web!
          </p>
        </div>

        <div className='flex flex-col gap-y-4'>
          <h1 className='four-title font-medium'>
            What I've done/do:
          </h1>

          <div className="space-y-2">
            <h4>
              Built talem.org, a platform connecting high schoolers w/ opportunities
            </h4>
            <ul className="list-disc pl-10">
              <li>1.2M page views, 200k unique users, 400~ daily users to date.</li>
              <li>Received a 4-figure grant to further democratize education</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4>
              Run ThryveDesign, my web development agency
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
              <li>Built desource, a directory of free web-development resources</li>
              <li>Currently working on EasyAP, an EdTech app that simplifies AP Exam prep (demo)</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  )
}

export default HeroBrief

