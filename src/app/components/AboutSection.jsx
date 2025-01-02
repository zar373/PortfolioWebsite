"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>SQL</li>
        <li>Tableau</li>
        <li>Azure</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <p className="font-semibold">NED University of Engineering and Technology</p>
        <p className="italic">Karachi, Pakistan</p>
        <p>Bachelor of Engineering – Computer Information and Systems</p>
        <p>2021 - 2025</p>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Associate Data Scientist in Python (2025) – Career Track in Datacamp</li>
        <li>Microsoft Azure AI Fundamentals: AI Overview (2024) – Microsoft Learn</li>
        <li>Introduction to Machine Learning (2023) – Coursera (IBM)</li>
        <li>Introduction to Git and GitHub (2023) – Datacamp</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "workExperience",
    content: (
      <div>

          <p className="font-semibold">IBM (Institute of Business Management)</p>
          <p className="italic">Research Assistant</p>
          <p>09/2023 - 09/2024</p>

        <div className="mt-2">
          <p className="font-semibold">NCL-NED</p>
          <p className="italic">Data Science Intern</p>
          <p>08/2023 - 09/2023</p>
        </div>
      </div>
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
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image
          src="/images/PortfolioAbout.jpeg"
          alt="An image showcasing my portfolio details"
          width={500}
          height={500}
          className="rounded-t-xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a final-year undergraduate in Computer and Information Systems Engineering.
            Currently, I am deepening my expertise in data engineering, particularly in building Azure data pipelines and exploring innovative ways to manage and transform data efficiently. 
            <br />
            Previously, I worked as a research assistant, where I analyzed datasets related to Pakistan's pharmaceutical imports. This work provided actionable insights for research publications and enhanced my ability to extract meaningful information from data.
            <br />
            I am also keen on applying machine learning techniques to solve real-world challenges, with a focus on practical, hands-on projects that strengthen my understanding.
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
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("workExperience")}
              active={tab === "workExperience"}
            >
              Work Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
