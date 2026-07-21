import React from 'react'

const App = () => {
  return (
    <>
      <div className='min-h-dvh max-w-5xl m-7 lg:mx-auto'>

        <aside className='relative flex mb-4'>
          <div className='flex-1 m-2 text-center font-semibold'>
            <div className='text-5xl text-indigo-500 p-3'>DAVID J.J.</div>
            <div className='text-5xl text-indigo-500 p-3'>BATTYE</div>
          </div>
          <div className='flex-1 text-center m-2 text-slate-700'>
            <div className='p-2 border-dashed border-l border-r border-b border-slate-500 font-semibold'>battye_david@yahoo.co.uk</div>
            <div className='p-2'>
              <div>19L Union Glen,</div>
              <div>Aberdeen, AB11 6ES</div>
            </div>
            <div className='p-2 border-dashed border-l border-r border-t border-slate-500 font-semibold'>07815006469</div>
          </div>
          <div className='flex-1 bg-indigo-500 text-white font-semibold m-2 p-3 rounded-md w-60 gap-2'>
            <div>MSc Information Technology <span className='text-neutral-400'><a href="https://www.uwe.ac.uk/" target='_blank'>(UWE)</a></span></div>
            <div>MSc Medical Physics <span className='text-neutral-400'><a href="https://www.open.ac.uk/" target='_blank'>(OU)</a></span></div>
            <div>BSc Physics with Astrophysics <span className='text-neutral-400'><a href="https://www.bristol.ac.uk/" target='_blank'>(University of Bristol)</a></span></div>
            <div><a target='_blank' href='https://github.com/usernameistai'>GitHub Account</a></div>
          </div>
        </aside>

        <main className='flex'>
          <section className='flex-2 ml-4 mr-2'>
            <div className='flex mb-5'>
              <div className='flex-start [writing-mode:vertical-rl] tracking-wider uppercase font-semibold text-slate-500 pt-5 pr-2'><span className='text-red-400'>❯❯</span> Summary</div>
              <div className='flex-end border-l border-dashed border-slate-500 p-3 text-zinc-500'>
                Junior Web Developer with an MSc in IT and hands-on experience building and deploying
                modern web applications using React, TypeScript, Node.js, Vite and Tailwind CSS. I have developed
                around 50 personal projects, including front-end & full-stack applications, desktop software built with Rust
                and Tauri, and API-driven dashboards, demonstrating a strong commitment to continuous learning 
                and practical software development. My background in IT and application support has strengthened 
                my problem-solving, MongoDB, SQL, production support and debugging skills, while my recent work has focused 
                on accessibility, modern development practices, CI/CD and delivering user-focused applications. 
                I am seeking an opportunity to contribute as a junior developer while continuing to grow within 
                a collaborative development team. I have been volunteering between 1-3 days a week at the Compass Wellbeing
                Project since February 2024.
              </div>
            </div>
            <div className='flex mb-5'>
              <div className='flex-start [writing-mode:vertical-rl] tracking-wider uppercase font-semibold text-slate-500 pt-5 pr-2'><span className='text-red-400'>❯❯</span> Education</div>
              <div className='flex-end border-l border-dashed border-slate-500 p-3 text-zinc-500'>
                <div className='mb-5'>
                  <div className='font-semibold'>09.2016 - 11.2018</div>
                  <div className='font-semibold'>MSc in Information Technology (Merit), University of the West of England (UWE)</div>
                  <div className='pl-4'>
                    <div>Modules included:</div>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold'>Machine Learning and Predictive Analysis</span> - 73%</div>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold'>Big Data</span> - 71%</div>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold'>Digital Design and Development (DDD) </span> - 71%</div>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold'>Information Security</span> - 67%</div>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold'>Project Management</span> - 70%</div>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold'>Professionalism and Governance in IT</span> - 63%</div>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold'>Group Software Development Project </span> - 72%</div>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold'>Dissertation</span> - 65%</div>
                    <div className='pl-7'>“Is there a need for Green IT 3.0? 
                    - A study to investigate the feasibility and acceptability of Virtual Reality 
                    (VR), as a ‘Green IT’ enabler and emerging technology for IT Professionals.” </div>
                  </div>
                </div>
                <div className='mb-5'>
                  <div className='font-semibold'>01.2009 - 10.2010</div>
                  <div className='font-semibold'>MSc Medical Physics, The Open University (OU)</div>
                  <div className='pl-4'><span className='px-4 text-sm'>❯❯</span><span className='font-semibold'>Combined MSc</span> - 64%</div>
                  <div className='pl-4'><span className='px-4 text-sm'>❯❯</span><span className='font-semibold'>Dissertation</span> - 65%</div>
                  <div className='pl-11'>“Dose Reduction Strategies using CTPA (Computed Tomography Pulmonary Angiography)”</div>
                </div>
                <div className='mb-5'>
                  <div className='font-semibold'>10.2001 - 07.2005</div>
                  <div className='font-semibold'>BSc Physics with Astrophysics (Hons), The University of Bristol</div>
                  <div className='pl-4'><span className='px-4 text-sm'>❯❯</span><span className='font-semibold'>Dissertation</span> - 63%</div>
                  <div className='pl-11'>“The Bianchi Identities and their Role in General Relativity”</div>
                </div>
              </div>
            </div>
            <div className='flex mb-5'>
              <div className='flex-start [writing-mode:vertical-rl] tracking-wider uppercase font-semibold text-slate-500 pt-5 pr-2'><span className='text-red-400'>❯❯</span> Employment & Experience</div>
              <div className='flex-end border-l border-dashed border-slate-500 p-3 text-zinc-500'>
                <div className="mb-5">
                  <div className='font-semibold'>01.2008 - 05.2024</div>
                  <div className='font-semibold mb-2'>Nurse / Healthcare Assistant, NHS Bristol, Derby</div>
                  <div className='pl-4'>
                    <div className='flex'>
                      <span className='flex-1 px-4 text-sm'>❯❯</span>
                      <div className='flex-20'>
                        Healthcare Assistant (HCA), working throughout the NHS trust performing different
                        tasks, predominantly close contact with people of different presentations, cultures, 
                        abilities (including disabilities)
                      </div>
                    </div>
                    <div className='flex'>
                      <span className='flex-1 px-4 text-sm'>❯❯</span>
                      <div className='flex-20'>
                        Can work in unpredictable circumstances, remain calm in difficult situations simultaneously
                        supporting other disciplines
                      </div>
                    </div>
                    <div className='flex'>
                      <span className='flex-1 px-4 text-sm'>❯❯</span>
                      <div className='flex-20'>
                        Confidentiality, dignity and respect to patients and colleagues with awareness of legal
                        practice, policies and standards and general administration
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className='font-semibold'>01.2022 - 08.2022</div>
                  <div className='font-semibold mb-2'>Application Support Analyst, Huboo Bristol</div>
                  <div className='pl-4'>
                    <div className='flex'>
                      <span className='flex-1 px-4 text-sm'>❯❯</span>
                      <div className='flex-20'>
                        Resolving collated API data errors and ensuring goods reach clients correctly
                      </div>
                    </div>
                    <div className='flex'>
                      <span className='flex-1 px-4 text-sm'>❯❯</span>
                      <div className='flex-20'>
                        Using SQL and in-house software to perform necessary tasks optimally
                      </div>
                    </div>
                    <div className='flex'>
                      <span className='flex-1 px-4 text-sm'>❯❯</span>
                      <div className='flex-20'>
                        Helped Huboo achieve it's first 100% delivery since it's inception. Helped the marketing team
                        with online review awareness and strategy to improve this
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className='font-semibold'>10.2020 - 01.2021</div>
                  <div className='font-semibold mb-2'>Clinical IT Support, Oncology Dept., Bristol</div>
                  <div className='pl-4'>
                    <div className='flex'>
                      <span className='flex-1 px-4 text-sm'>❯❯</span>
                      <div className='flex-20'>
                        Oncology treatment/imaging software (MosaiQ, RayStation), LINUX
                      </div>
                    </div>
                    <div className='flex'>
                      <span className='flex-1 px-4 text-sm'>❯❯</span>
                      <div className='flex-20'>
                        Remote access, problem solving, investigating broken software & hardware
                      </div>
                    </div>
                    <div className='flex'>
                      <span className='flex-1 px-4 text-sm'>❯❯</span>
                      <div className='flex-20'>
                        Responding to emails and queries to Scientific Computing Support
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className='font-semibold'>01.2000 - 01.2008</div>
                  <div className='font-semibold mb-2'>Other Interesting Positions</div>
                  <div className='pl-4'>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold mr-2'>Assistant Manager</span>@Great Expectations - Reading<span className='font-semibold ml-2'>00 - 01</span></div>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold mr-2'>Barista</span>Caffe Neros - Bristol<span className='font-semibold ml-2'>03 - 05</span></div>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold mr-2'>Bristol Uni Radio Burst</span>Co Host<span className='font-semibold ml-2'>05</span></div>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold mr-2'>Assistant / Sous Chef</span>Serre Chevalier, Les Alpes<span className='font-semibold ml-2'>05 - 06</span></div>
                    <div><span className='px-4 text-sm'>❯❯</span><span className='font-semibold mr-2'>Barman, Factory Worker, TEFL</span>Derby, Reading, Bristol<span className='font-semibold ml-2'>98 - 06</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='flex-1'>
            <div className="flex">
            <div className='flex-1 [writing-mode:vertical-rl] tracking-wider uppercase font-semibold text-slate-500 pt-5 pr-2'><span className='text-red-400'>❯❯</span> Other Professional Skills</div>
            <div className='flex-7 border-l border-dashed border-slate-500 p-3 text-zinc-500'>
              <div className='mb-2'>
                <h2 className='font-semibold'>Web Applications</h2>
                <div className="text-sm text-cyan-500 font-semibold">
                  <div>
                    <a className='mb-2 px-4' href="https://awesome-portfolio-two.netlify.app/" target="_blank" rel="noopener noreferrer">
                      Awesome Portfolio
                    </a>
                  </div>
                  <div>
                    <a className='mb-2 px-4' href="https://helpme-car.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      HelpMe-Car
                    </a>
                  </div>
                  <div>
                    <a className='mb-2 px-4' href="https://aegiscrypto.netlify.app/" target="_blank" rel="noopener noreferrer">
                      Crypto Dashboard / Tracker
                    </a>
                  </div>
                  <div>
                    <a className='mb-2 px-4' href="https://github.com/usernameistai/Aegis-Aether-Cyber-HUD/releases/tag/v2.1.0" target="_blank" rel="noopener noreferrer">
                      Aegis-Aether-Cyber-HUD
                    </a>
                  </div>
                  <div>
                    <a className='mb-2 px-4' href="https://peakyblogger-d362176b187f.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      PeakyBlogger
                    </a>
                  </div>
                  <div>
                    <a className='mb-2 px-4' href="https://fcc-choropleth-map.onrender.com/" target="_blank" rel="noopener noreferrer">
                      D3 Chloropleth Map USA
                    </a>
                  </div>
                  <div>
                    <a className='mb-2 px-4' href="https://weather-orr-not.netlify.app/" target="_blank" rel="noopener noreferrer">
                      Weather-Orr-Not?
                    </a>
                  </div>
                  <div>
                    <a className='mb-2 px-4' href="https://dashboard-1-ftx2.onrender.com/" target="_blank" rel="noopener noreferrer">
                      Weather-Orr-Not?
                    </a>
                  </div>
                  <div>
                    <a className='mb-2 px-4' href="https://david-bp-health.netlify.app/" target="_blank" rel="noopener noreferrer">
                      David BP Health Tacker
                    </a>
                  </div>
                  
                </div>
              </div>

              <div className='mb-2'>
                <h2 className='font-semibold'>Programming & Stack</h2>
                <div className="text-sm">
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>React</span>Skill Bar</div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>JS / TS</span>Skill Bar</div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>HTML5 / CSS3</span>Skill Bar</div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Vite</span>Skill Bar</div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Tailwind</span>Skill Bar</div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Node</span>Skill Bar</div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Express</span>Skill Bar</div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>MongoDB</span>Skill Bar</div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Mongoose</span>Skill Bar</div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>SQL</span>Skill Bar</div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Vite</span>Skill Bar</div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Svelte</span>Skill Bar</div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Vue</span>Skill Bar</div>
                </div>
              </div>

              <div className='mb-2'>
                <h2 className='font-semibold'>Frameworks / Libraries</h2>
                <div className="text-sm">
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Accessiblity</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>CI/CD Pipelines</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Bootstrap 5</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Zustand</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>TanStack Query</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Vitest</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>StoryBook</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>GitHub</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Bash</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>VS Code</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Bootstrap 5</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Shadcn</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Recharts</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>D3</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>R</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Mongoose</span></div>
                </div>
              </div>

              <div className='mb-2'>
                <h2 className='font-semibold'>Operating Systems</h2>
                <div className="text-sm">
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Windows 11</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Windows 10</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Linux</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Ubuntu</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Apple OS</span></div>
                </div>
              </div>

              <div className='mb-2'>
                <h2 className='font-semibold'>Personal</h2>
                <div className="text-sm">
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Problem Solving</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Helpful</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Resourceful</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Analytical</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Innovative</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Proactive</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Inventive</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Tourbleshooting</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Practical</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Altrustic</span></div>
                </div>
              </div>

              <div className='mb-2'>
                <h2 className='font-semibold'>Creative & Interests</h2>
                <div className="text-sm">
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Snowboarding</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>DH / Enduro MTB</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Martial Arts</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>Reading</span></div>
                  <div><span className='px-4 text-cyan-500'>❯❯</span><span className='font-semibold'>D/Taoism</span></div>
                </div>
              </div>

              <div className='mb-2'>
                <h2 className='font-semibold'>References</h2>
                <div className="text-sm">Available upon request</div>
              </div>
            </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App