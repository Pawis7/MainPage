"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = {
  skills: {
    title: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>JavaScript</li>
        <li>HTML</li>
      </ul>
    ),
  },
  education: {
    title: "Education",
    content: (
      <ul>
        <li>5 semester of computer science.</li>
      </ul>
    ),
  },
  experience: {
    title: "Experience",
    content: (
      <ul>
        <li>I worked on small projects at the school</li>
        <li className="">{"(Check my CV or Bellow for more information)"}.</li>
      </ul>
    ),
  },
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/AboutMe.png"
          width={500}
          height={500}
          alt="About me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="test-base  md:text-lg">
            I have been studying Software Engineering for five semesters at the University of Guadalajara. 
            Although I have learned many things throughout this time, this last semester was the most impactful, 
            as it led to the creation of the projects I now showcase in my CV. My favorite programming languages 
            are Python and, more recently, JavaScript. I also learned C++, but I didn´t enjoy it as much. However, 
            I can quickly reach the same proficiency level in C++ as in my other languages with just a bit of practice. 
            My ability to learn new skills quickly has always been a significant advantage for me.


          </p>
          <div className="flex flex-row mt-8">
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
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA[tab].content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
