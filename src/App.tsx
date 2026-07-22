import { useState } from "react";
import { workSkillsBRI, workSkillsHuboo, workSkillsBRIIT,
  websites, frameworks, os, personal, hobbies, programmingSkills 
} from "./utils/arrays";

const App = () => {
  const [dark, setDark] = useState(false);

  const changeTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    setDark(isDark);
  };

  const chevron = "px-4 text-sm text-cyan-500 dark:text-cyan-300";
  const chevronTwo = "flex-1 px-4 text-sm translate-y-1 text-cyan-500 dark:text-cyan-300";
  const perpendicular = "flex-start [writing-mode:vertical-rl] tracking-wider uppercase font-semibold pt-5 pr-2";
  const writing = "flex-end border-l border-dashed border-slate-500 dark:border-slate-300 p-3 text-zinc-500 dark:text-zinc-100";

  return (
    <>
      <div className='min-h-dvh max-w-5xl p-5 lg:mx-auto dark:bg-zinc-700'>

        <aside className='relative flex mb-4'>
          <div className='flex-1 m-2 text-center font-semibold text-5xl text-indigo-500 dark:text-indigo-200'>
            <div className='p-3'>DAVID J.J.</div>
            <div className='p-3'>BATTYE</div>
          </div>
          <div className='flex-1 text-center m-2 text-slate-700 dark:text-slate-200'>
            <div className='p-2 border-dashed border-l border-r border-b border-slate-500 dark:border-slate-300 font-semibold'>battye_david@yahoo.co.uk</div>
            <div className='p-2'>
              <div>19L Union Glen,</div>
              <div>Aberdeen, AB11 6ES</div>
            </div>
            <div className='p-2 border-dashed border-l border-r border-t border-slate-500 dark:border-slate-300 font-semibold'>07815006469</div>
          </div>
          <div className='flex-1 bg-indigo-500 dark:bg-indigo-700 text-white font-semibold m-2 p-3 rounded-md w-60 gap-2'>
            <div>MSc Information Technology <span className='text-neutral-400'><a href="https://www.uwe.ac.uk/" target='_blank'>(UWE)</a></span></div>
            <div>MSc Medical Physics <span className='text-neutral-400'><a href="https://www.open.ac.uk/" target='_blank'>(OU)</a></span></div>
            <div>BSc Physics with Astrophysics <span className='text-neutral-400'><a href="https://www.bristol.ac.uk/" target='_blank'>(University of Bristol)</a></span></div>
            <div className="flex">
              <a target='_blank' href='https://github.com/usernameistai' className="flex-1">GitHub Account</a>
              <button onClick={changeTheme} className="w-15 transition-transform duration-300 hover:rotate-12">
                {dark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </aside>

        <section className="text-center items-center mx-0">
          <button
            onClick={changeTheme}
            className="transition-transform duration-300 hover:rotate-12"
          >{dark ? '☀️' : '🌙'}</button>
        </section>

        <main className='flex'>
          {/* Work Experience */}
          <section className='flex-2 ml-4 mr-2'>
            <div className='flex mb-5'>
              <div className={perpendicular}><span className='text-red-400 dark:text-red-200'>❯❯</span> <span className="text-slate-500 dark:text-slate-300">Summary</span></div>
              <div className={writing}>
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
              <div className={perpendicular}><span className='text-red-400 dark:text-red-200'>❯❯</span> <span className="text-slate-500 dark:text-slate-300">Education</span></div>
              <div className={writing}>
                <div className='mb-5'>
                  <div className='font-semibold'>09.2016 - 11.2018</div>
                  <div className='font-semibold'>MSc in Information Technology (Merit), University of the West of England (UWE)</div>
                  <div className='pl-4'>
                    <div>Modules included:</div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold'>Machine Learning and Predictive Analysis</span> - 73%</div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold'>Big Data</span> - 71%</div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold'>Digital Design and Development (DDD) </span> - 71%</div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold'>Information Security</span> - 67%</div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold'>Project Management</span> - 70%</div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold'>Professionalism and Governance in IT</span> - 63%</div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold'>Group Software Development Project </span> - 72%</div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold'>Dissertation</span> - 65%</div>
                    <div className='pl-7'>“Is there a need for Green IT 3.0? 
                    - A study to investigate the feasibility and acceptability of Virtual Reality 
                    (VR), as a ‘Green IT’ enabler and emerging technology for IT Professionals.” </div>
                  </div>
                </div>
                <div className='mb-5'>
                  <div className='font-semibold'>01.2009 - 10.2010</div>
                  <div className='font-semibold'>MSc Medical Physics, The Open University (OU)</div>
                  <div className='pl-4'><span className={chevron}>❯❯</span><span className='font-semibold'>Combined MSc</span> - 64%</div>
                  <div className='pl-4'><span className={chevron}>❯❯</span><span className='font-semibold'>Dissertation</span> - 65%</div>
                  <div className='pl-11'>“Dose Reduction Strategies using CTPA (Computed Tomography Pulmonary Angiography)”</div>
                </div>
                <div className='mb-5'>
                  <div className='font-semibold'>10.2001 - 07.2005</div>
                  <div className='font-semibold'>BSc Physics with Astrophysics (Hons), The University of Bristol</div>
                  <div className='pl-4'><span className={chevron}>❯❯</span><span className='font-semibold'>Dissertation</span> - 63%</div>
                  <div className='pl-11'>“The Bianchi Identities and their Role in General Relativity”</div>
                </div>
              </div>
            </div>

            <div className='flex mb-5'>
              <div className={perpendicular}><span className='text-red-400 dark:text-red-200'>❯❯</span> <span className="text-slate-500 dark:text-slate-300">Employment & Experience</span></div>
              <div className={writing}>
                <div className="mb-5">
                  <div className='font-semibold'>01.2008 - 05.2024</div>
                  <div className='font-semibold mb-2'>Nurse / Healthcare Assistant, NHS Bristol, Derby</div>
                  <div className='pl-4'>
                    {workSkillsBRI.map((work, id) => (
                      <div key={id} className='flex'>
                        <span className={chevronTwo}>❯❯</span>
                        <div className='w-110'>{work.skill}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <div className='font-semibold'>01.2022 - 08.2022</div>
                  <div className='font-semibold mb-2'>Application Support Analyst, Huboo Bristol</div>
                  <div className='pl-4'>
                    {workSkillsHuboo.map((work, id) => (
                      <div key={id} className='flex'>
                        <span className={chevronTwo}>❯❯</span>
                        <div className='w-110'>{work.skill}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <div className='font-semibold'>10.2020 - 01.2021</div>
                  <div className='font-semibold mb-2'>Clinical IT Support, Oncology Dept., Bristol</div>
                  <div className='pl-4'>
                    {workSkillsBRIIT.map((work, id) => (
                      <div key={id} className='flex'>
                        <span className={chevronTwo}>❯❯</span>
                        <div className='w-110'>{work.skill}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <div className='font-semibold'>01.2000 - 01.2022</div>
                  <div className='font-semibold mb-2'>Other Interesting Positions</div>
                  <div className='pl-4'>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold mr-2'>Assistant Manager</span>@Great Expectations - Reading<span className='font-semibold ml-2'>00 - 01</span></div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold mr-2'>Barista</span>Caffe Neros - Bristol<span className='font-semibold ml-2'>03 - 05</span></div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold mr-2'>Bristol Uni Radio Burst</span>Co Host<span className='font-semibold ml-2'>05</span></div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold mr-2'>Assistant / Sous Chef</span>Serre Chevalier, Les Alpes<span className='font-semibold ml-2'>05 - 06</span></div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold mr-2'>Barman, Factory Worker, TEFL</span>Derby, Reading, Bristol<span className='font-semibold ml-2'>98 - 06</span></div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold mr-2'>Data Entry - Williams Lea</span>Bristol<span className='font-semibold ml-2'>'14</span></div>
                    <div><span className={chevron}>❯❯</span><span className='font-semibold mr-2'>Gardener - HHH</span>Theale, Somerset<span className='font-semibold ml-2'>03 - 22</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Skills */}
          <section className='flex-1'>
            <div className="flex">
            <div className={perpendicular}><span className='text-red-400 dark:text-red-200'>❯❯</span> <span className="text-slate-500 dark:text-slate-300">Other Professional Skills</span></div>
            <div className='flex-7 border-l border-dashed border-slate-500 dark:border-slate-300 p-3 text-zinc-500 dark:text-zinc-100'>
              <div className='mb-5'>
                <h2 className='font-semibold'>Web Applications</h2>
                <div className="text-sm text-cyan-500 dark:text-cyan-300 font-semibold">
                  {websites.map((web, id) => (
                    <div key={id}>
                      <a className='mb-2 px-4' href={web.url} target="_blank" rel="noopener noreferrer">
                        {web.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mb-5'>
                <h2 className='font-semibold'>Programming & Stack</h2>
                <div className="text-sm">
                  {programmingSkills.map((program, id) => (
                    <div key={id} className="flex">
                      <div className="flex-1">
                        <span className='px-4 text-cyan-500 dark:text-cyan-300'>❯❯</span><span className='font-semibold'>{program.skill}</span> 
                      </div>
                      <div className="w-24 bg-slate-200 dark:bg-slate-950/50 h-2.5 rounded-sm translate-y-1.5">
                        <div className={`${program.width} bg-cyan-500 dark:bg-cyan-300 h-full rounded-full`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mb-5'>
                <h2 className='font-semibold'>Frameworks / Libraries</h2>
                <div className="text-sm">
                  {frameworks.map((frame, id) => (
                    <div key={id}>
                      <span className='px-4 text-cyan-500 dark:text-cyan-300'>❯❯</span>
                      <span className='font-semibold'>{frame.work}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mb-5'>
                <h2 className='font-semibold'>Operating Systems</h2>
                <div className="text-sm">
                  {os.map((o, id) => (
                    <div key={id}>
                      <span className='px-4 text-cyan-500 dark:text-cyan-300'>❯❯</span>
                      <span className='font-semibold'>{o.sys}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mb-5'>
                <h2 className='font-semibold'>Personal</h2>
                <div className="text-sm">
                  {personal.map((persy, id) => (
                    <div key={id}>
                      <span className='px-4 text-cyan-500 dark:text-cyan-300'>❯❯</span>
                      <span className='font-semibold'>{persy.attribute}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mb-5'>
                <h2 className='font-semibold'>Creative & Interests</h2>
                <div className="text-sm">
                  {hobbies.map((hobby, id) => (
                    <div key={id}>
                      <span className='px-4 text-cyan-500 dark:text-cyan-300'>❯❯</span>
                      <span className='font-semibold'>{hobby.enjoy}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mb-5'>
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

export default App;