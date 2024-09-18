"use client"; 
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Dispensing Medications",
    description:
      "A task focused on accurately preparing and providing medications according to prescriptions.",
    image: "https://images.unsplash.com/photo-1629451565902-4c40a51b374e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: ["All", "Pharmacy Task"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Patient Counseling",
    description:
      "Educating patients on the correct use of medications, potential side effects, and lifestyle adjustments.",
    image: "https://images.unsplash.com/photo-1632053652571-a6a45052bbbd?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: ["All", "Pharmacy Task"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Pharmaceutical Calculations",
    description:
      "Carrying out dosage calculations and conversions necessary for compounding medications.",
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: ["All", "Pharmacy Task"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Medication Reconciliation",
    description:
      "Ensuring patients’ medication lists are accurate during transitions of care to prevent errors.",
    image: "https://images.unsplash.com/photo-1624711076872-ecdbc5ade023?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: ["All", "Pharmacy Task"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Compounding Medications",
    description:
      "Preparing personalized medications by mixing ingredients to fit patient-specific needs.",
    image: "https://images.unsplash.com/photo-1696861308115-54a5e5a134b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: ["All", "Pharmacy Task"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Pharmacology Research",
    description:
      "Conducting research on drug interactions, side effects, and effectiveness as part of academic study.",
    image: "https://images.unsplash.com/photo-1576670158645-ef7b03134e32?q=80&w=1824&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tag: ["All", "Pharmacy Task"],
    gitUrl: "/",
    previewUrl: "/",
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
    <section id="projects" className="py-12 px-4 ">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Pharmacy Tasks
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Pharmacy Task")}
          name="Pharmacy Task"
          isSelected={tag === "Pharmacy Task"}
        />
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-3 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="group"
          >
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <motion.div
                className="relative overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg transition-transform duration-300 ease-in-out"
                />
              </motion.div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                  {project.title}
                </h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
