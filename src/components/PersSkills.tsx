import type React from "react";

interface PersSkillsProps {
  title: string;
  children: React.ReactNode
};

const PersSkills = ({ title, children }: PersSkillsProps ) => {
  const summary = "text-sm md:text-base font-semibold mb-2 cursor-pointer list-none";
  const chevSpan = "mr-2 text-cyan-500 dark:text-cyan-300 inline-block transition-transform duration-300 group-open:rotate-90";
  
  return (
    <div className="mb-5">
      <details className="group">
        <summary className={`flex pl-0 ${summary}`}>
          <span className={`mr-0 ${chevSpan} flex-start`}>
            ❯
          </span>
          <h2 className="font-semibold pb-1">{title}</h2>
        </summary>

        <div className="text-sm">
          {children}
        </div>
      </details>
    </div>
  )
};

export default PersSkills;