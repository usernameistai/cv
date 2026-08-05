import { useState } from "react";
import { msc, workSkillsBRI, workSkillsHuboo, workSkillsBRIIT, interestingJobs,
  websites, frameworks, os, personal, hobbies, programmingSkills
} from "./utils/arrays";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import PersSkills from "./components/PersSkills";

const App = () => {
  const [dark, setDark] = useState(false);

  const changeTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    setDark(isDark);
  };

  const chevron = "px-4 text-sm text-cyan-500 dark:text-cyan-300";
  const chevronTwo = "px-2 md:px-4 text-sm translate-y-px md:translate-y-1 text-cyan-500 dark:text-cyan-300";
  const perpendicular = "flex-start text-sm md:text-base [writing-mode:vertical-rl] tracking-wider uppercase font-semibold pt-5 pr-2";
  const writing = "px-5 md:p-3 text-sm md:text-base border-l border-dashed border-slate-500 dark:border-slate-300 text-zinc-500 dark:text-zinc-100";
  const summary = "text-sm md:text-base font-semibold mb-2 cursor-pointer list-none";
  const chevSpan = "mr-2 text-cyan-500 dark:text-cyan-300 inline-block transition-transform duration-300 group-open:rotate-90";

  return (
    <>
      <div className='min-h-dvh max-w-5xl p-5 lg:mx-auto dark:bg-zinc-700'>
        <div className="max-w-5xl">
          
          <aside className='relative md:flex mb-4'>
            <div className='flex-1 m-2 my-10 text-center items-center font-semibold text-3xl sm:text-4xl md:text-5xl text-indigo-500 dark:text-indigo-200'>
              <div className='p-3'>DAVID J.J.</div>
              <div className='p-3'>BATTYE</div>AZ\Q
            </div>
            <div className='space-y-2 m-2 text-slate-700 dark:text-slate-200'>
              <div className='flex items-center justify-center mx-0 p-4 rounded-md shadow-md dark:shadow-white/20 border-r border-b border-slate-500 dark:border-slate-300 font-semibold'>
                <CiMail className="text-xl shrink-0"/> 
                <span className="ml-2"><a href="mailto:battye_david@yahoo.co.uk" className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-300">battye_david@yahoo.co.uk</a></span>
              </div>
              <div className='p-4 rounded-md shadow-md dark:shadow-white/20 border-r border-b border-slate-500 dark:border-slate-300'>
                <div className="flex items-center justify-center">
                  <CiLocationOn className="text-xl shrink-0"/> 
                  <span className="ml-2">19L Union Glen, </span>
                </div>
                <div className="flex items-center justify-center">Aberdeen, AB11 6ES</div>
              </div>
              <div className='flex items-center justify-center p-4 rounded-md shadow-md dark:shadow-white/20 border-r border-b border-slate-500 dark:border-slate-300 font-semibold'>
                <CiPhone className="text-xl shrink-0"/> 
                <div className="ml-2"><a href="tel:07815006469" className="transition-colors hover:text-indigo-500 dark:hover:text-indigo-300">07815006469</a></div>
              </div>
            </div>
            <div className='md:flex-1 my-2 p-4 w-full md:w-60 items-center shadow-lg dark:shadow-white/20 bg-indigo-500 dark:bg-indigo-700 text-white font-semibold rounded-lg space-y-2'>
              <div>MSc Information Technology <span className='text-neutral-400'><a href="https://www.uwe.ac.uk/" target='_blank' rel="noopener noreferrer">(UWE)</a></span></div>
              <div>MSc Medical Physics <span className='text-neutral-400'><a href="https://www.open.ac.uk/" target='_blank' rel="noopener noreferrer">(OU)</a></span></div>
              <div>BSc Physics with Astrophysics <span className='text-neutral-400'><a href="https://www.bristol.ac.uk/" target='_blank' rel="noopener noreferrer">(University of Bristol)</a></span></div>
              <div className="border-t border-zinc-300">
                <button className="mt-4 px-3 py-2 font-semibold inline-block rounded shadow-md hover:shadow-none focus:shadow-none transition-transform duration-300 bg-indigo-600 hover:bg-indigo-700">
                  <a target='_blank' href='https://github.com/usernameistai' className="">GitHub Repo. → usernameistai</a>
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

          <main className='inline md:flex'>
            {/* Work Experience */}
            <section className='flex-2 md:ml-4 mr-2'>
              <div className='flex mb-5'>
                <div className={perpendicular}><span className='text-red-400 dark:text-red-200'>❯❯</span> <span className="text-slate-500 dark:text-slate-300">Summary</span></div>
                <div className={`p-5 ${writing}`}>
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
                    <details className="group">
                      <summary className={summary}>
                        <span className={chevSpan}>
                          ❯
                        </span>
                        MSc Information Technology (Merit), 
                        <a className="pl-1" href="https://www.uwe.ac.uk/" target="_blank" rel="noopener noreferrer">University of the West of England (UWE)</a>
                      </summary>
                      <div className='md:pl-4'>
                        <div>Modules included:</div>
                        {msc.map((msc, id) => (
                          <div key={id} className="-ml-2 md:ml-0">
                            <span className={chevron}>❯❯</span><span className='font-semibold'>{msc.module}</span><span className="hidden md:inline"> - {msc.result}%</span>
                          </div>
                        ))}
                        <div className='pl-7'>“Is there a need for Green IT 3.0? 
                        - A study to investigate the feasibility and acceptability of Virtual Reality 
                        (VR), as a ‘Green IT’ enabler and emerging technology for IT Professionals.” </div>
                      </div>
                    </details>
                  </div>

                  <div className='mb-5'>
                    <div className='font-semibold'>01.2009 - 10.2010</div>
                    <details className="group">
                      <summary className={summary}>
                        <span className={chevSpan}>
                          ❯
                        </span>
                        MSc Medical Physics, 
                        <a className="pl-1" href="https://www.open.ac.uk/" target="_blank" rel="noopener noreferrer">The Open University (OU)</a>
                      </summary>
                      <div className='md:pl-4 -ml-2 md:ml-0'><span className={chevron}>❯❯</span><span className='font-semibold'>Combined MSc</span> - 64%</div>
                      <div className='md:pl-4 -ml-2 md:ml-0'><span className={chevron}>❯❯</span><span className='font-semibold'>Dissertation</span> - 65%</div>
                      <div className='pl-11'>“Dose Reduction Strategies using CTPA (Computed Tomography Pulmonary Angiography)”</div>
                    </details>
                  </div>

                  <div className='mb-5'>
                    <div className='font-semibold'>10.2001 - 07.2005</div>
                    <details className="group">
                      <summary className={summary}>
                        <span className={chevSpan}>
                          ❯
                        </span>
                        BSc Physics with Astrophysics (Hons),
                        <a className="pl-1" href="https://www.bristol.ac.uk/" target="_blank" rel="noopener noreferrer">The University of Bristol</a>
                      </summary>
                      <div className="md:pl-4">
                        <span className={chevron}>❯❯</span><span className='font-semibold'>Dissertation</span> - 63%
                        <div className='pl-11'>“The Bianchi Identities and their Role in General Relativity”</div>
                      </div>
                    </details>
                  </div>
                </div>
              </div>

              <div className='flex mb-5'>
                <div className={perpendicular}><span className='text-red-400 dark:text-red-200'>❯❯</span> <span className="text-slate-500 dark:text-slate-300">Employment & Experience</span></div>
                <div className={writing}>
                  <div className="mb-5">
                    <div className='font-semibold'>01.2008 - 05.2024</div>
                    <details className="group">
                      <summary className={summary}>
                        <span className={chevSpan}>
                          ❯
                        </span>
                        Healthcare / Nurse Assistant, 
                        <a className="pl-1" href="https://www.uhbristol.nhs.uk/" target="_blank" rel="noopener noreferrer">BRI,</a>
                        <a className="pl-1" href="https://www.uhdb.nhs.uk/" target="_blank" rel="noopener noreferrer">Derby</a>
                      </summary>
                      <div className='md:pl-4'>
                        {workSkillsBRI.map((work, id) => (
                          <div key={id} className='flex'>
                            <span className={chevronTwo}>❯❯</span>
                            <div className='md:w-110 text-sm md:text-base'>{work.skill}</div>
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>

                  <div className="mb-5">
                    <div className='font-semibold'>01.2022 - 08.2022</div>
                    <details className="group">
                      <summary className={summary}>
                        <span className={chevSpan}>
                          ❯
                        </span>
                        Application Support Analyst, 
                        <a className="pl-1" href="https://huboo.com/" target="_blank" rel="noopener noreferrer">Huboo,</a> Bristol
                      </summary>
                      <div className='md:pl-4'>
                        {workSkillsHuboo.map((work, id) => (
                          <div key={id} className='flex'>
                            <span className={chevronTwo}>❯❯</span>
                            <div className='md:w-110 text-sm md:text-base'>{work.skill}</div>
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>

                  <div className="mb-5">
                    <div className='font-semibold'>10.2020 - 01.2021</div>
                    <details className="group">
                      <summary className={summary}>
                        <span className={chevSpan}>
                          ❯
                        </span>
                        Clinical IT Support, Oncology Dept. 
                        <a className="pl-1" href="https://www.uhbristol.nhs.uk/" target="_blank" rel="noopener noreferrer">BRI</a>
                      </summary>
                      <div className='md:pl-4'>
                        {workSkillsBRIIT.map((work, id) => (
                          <div key={id} className='flex'>
                            <span className={chevronTwo}>❯❯</span>
                            <div className='md:w-110 text-sm md:text-base'>{work.skill}</div>
                          </div>
                        ))}
                      </div>
                    </details>
                  </div>

                  <div className="mb-5">
                    <div className='font-semibold'>01.2000 - 01.2022</div>
                    <details className="group">
                      <summary className={`pl-0 ${summary}`}>
                        <span className={chevSpan}>
                          ❯
                        </span>
                        Other interesting positions
                      </summary>
                      <div className='md:pl-4 text-xs md:text-base'>
                        {interestingJobs.map((interesting, id) => (
                          <div key={id} className="md:w-110">
                            <span className={chevron}>❯❯</span>
                            <span className='font-semibold md:mr-2'>{interesting.job}</span>
                            <span> {interesting.location}</span>
                            <span className='font-semibold ml-2 hidden md:inline-block'>{interesting.year}</span>
                          </div>
                        ))}
                      </div>
                    </details>
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
                    <h2 className='font-semibold pb-1'>Web Applications</h2>
                    <div className="text-sm text-cyan-500 dark:text-cyan-300 font-semibold tracking-wide">
                      {websites.map((web, id) => (
                        <div key={id} className="py-0.5">
                          <a className='flex items-center px-4 py-1 rounded-md text-cyan-500 dark:text-cyan-300 transition-all duration-300 hover:bg-cyan-500/10 hover:translate-x-0.5' href={web.url} target="_blank" rel="noopener noreferrer">
                            {web.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='mb-5'>
                    <h2 className='font-semibold pb-1'>Programming & Stack</h2>
                    <div className="text-sm">
                      {programmingSkills.map((program, id) => (
                        <div key={id} className="flex">
                          <div className="flex-1">
                            <span className='px-4 text-cyan-500 dark:text-cyan-300'>❯❯</span><span className='font-semibold'>{program.skill}</span> 
                          </div>
                          <div className="w-24 bg-slate-200 dark:bg-slate-950/50 shadow-xs shadow-zinc-800/80 dark:shadow-[0_0_10px_rgba(255,255,255,0.5)] h-2.5 rounded-sm translate-y-1.5">
                            <div className={`${program.width} bg-cyan-500 dark:bg-cyan-300 h-full rounded-full`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <PersSkills title="Frameworks / Libraries"
                    children={frameworks.map((frame, id) => (
                      <div key={id}>
                        <span className='px-4 text-cyan-500 dark:text-cyan-300'>❯❯</span>
                        <span className='font-semibold'>{frame.work}</span>
                      </div>
                    ))}
                  />

                  <PersSkills title="Operating Systems"
                    children={os.map((o, id) => (
                      <div key={id}>
                        <span className='px-4 text-cyan-500 dark:text-cyan-300'>❯❯</span>
                        <span className='font-semibold'>{o.sys}</span>
                      </div>
                    ))}
                  />

                  <PersSkills title="Personal"
                    children={personal.map((persy, id) => (
                      <div key={id}>
                        <span className='px-4 text-cyan-500 dark:text-cyan-300'>❯❯</span>
                        <span className='font-semibold'>{persy.attribute}</span>
                      </div>
                    ))}
                  />

                  <PersSkills title="Creative & Interests"
                    children={hobbies.map((hobby, id) => (
                      <div key={id}>
                        <span className='px-4 text-cyan-500 dark:text-cyan-300'>❯❯</span>
                        <span className='font-semibold'>{hobby.enjoy}</span>
                      </div>
                    ))}
                  />

                  <div className='mb-5'>
                    <h2 className='font-semibold'>References</h2>
                    <div className="text-sm">Available upon request</div>
                  </div>
                </div>
              </div>
            </section>
          </main>

        </div>


      </div>
    </>
  )
}

export default App;