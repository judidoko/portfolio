"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Real Estate WebSite",
    description:
      "This project is a real estate project where users can add properties for sale or rent.",
    image: "./images/real-estate-website.PNG",
    tag: ["All", "React"],
    gitUrl: "https://github.com/judidoko/real-estate-website",
    previewUrl: "https://real-estate-website-judidoko.vercel.app/",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "This app allow users to easily Create, organize and track theirs tasks or/and Projects.",
    image: "./images/task-app.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/judidoko/Task-management-app",
    previewUrl: "https://tasks-mgt-app.netlify.app/",
  },
  {
    id: 3,
    title: " Online Bookshop",
    description:
      "A website that enable user to search for a book(s) pay for a period of time and return the book(s) after use",
    image: "./images/e-book.PNG",
    tag: ["All", "React"],
    gitUrl: "https://github.com/judidoko/bookshop",
    previewUrl: "https://emekabookshop.netlify.app/",
  },
  {
    id: 4,
    title: "Rental Car Service",
    description:
      "A website where user can search for a car of their choice to rental for period of time",
    image: "./images/car-Rental.PNG",
    tag: ["All", "React"],
    gitUrl: "https://github.com/judidoko/Rental-car",
    previewUrl: "https://ija-car-rental.netlify.app/",
  },
  {
    id: 5,
    title: "Movie Box",
    description: "A website that enable user search for movies and watch",
    image: "./images/movie-box.PNG",
    tag: ["All", "Nextjs"],
    gitUrl: "/",
    previewUrl: "https://hngxmoviebox-stage2.vercel.app/",
  },
  {
    id: 6,
    title: "Pig Game",
    description:
      "The Pig is a simple dice game in which two players race to reach 100 points. if a player roll 1 or 0 he loose. 2-6 the number is added the current player score. NOTE: it can only be played on laptop and desktop devices",
    image: "./images/pig-game.PNG",
    tag: ["All", "JavaScript"],
    gitUrl: "https://github.com/judidoko/pig-game",
    previewUrl: "https://pig-game-paly.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Nextjs"
          isSelected={tag === "Nextjs"}
        />
      </div>
      <ul
        ref={ref}
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
