"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>TailWind css</li>
        <li>Scss</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bsc Statistic / Computer Science</li>
        <span>University of Agriculture, Makurdi, Benue State, Nigeria</span>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <b>Front-End Developer Training</b> under the DevCareer Tech Program
          powered by the UK-Nigeria Tech Hub
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="dark:text-white text-dark" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-20 xl:px-16">
        <Image
          src="/images/about-img.png"
          width={500}
          height={500}
          className="min-h-[80%] hidden md:flex flex-start"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold dark:text-white text-dark mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I am a Frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React.js, Next.js, Redux, HTML, CSS, and
            Git. I am a quick learner and I am always looking to expand my
            knowledge and skills set. I am a team player and I am excited to
            work with others to create amazing web applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
