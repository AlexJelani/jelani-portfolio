import React from "react";
import project1 from "../assets/portfolio.png"
import project2 from "../assets/friendtracker.png"
import project3 from "../assets/reactdictionary.png"
import project4 from "../assets/cartreact.png"

const Projects = () => {
  const projects = [
    {
      img: project1,
      title: "My Portfolio",
      desc: " A portfolio website built with React and Tailwind CSS ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
    },
    {
      img: project2,
      title: "Social Media Friend Tracker",
      desc: "Social Media Friend Tracker built with React, CSS, and custom API backend for CRUD operations.",
      live: "https://uilogs.xyz/",
      code: "https://github.com/Coderamrin/html-templates",
    },
    {
      img: project3,
      title: "A React Dictionary",
      desc: " A Full-Stack React Dictionary app with an Express backend, Tailwind UI,and data from two APIs.",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
    },
    {
      img: project4,
      title: "React-TypeScript Shopping Cart",
      desc: "A responsive e-commerce shopping cart app is built using <b>React and TypeScript",
      live: "https://get-inspirred.netlify.app/",
      code: "https://github.com/Coderamrin/get-inspired",
    },
  ];
  return (
    <section className="bg-primary text-white py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>
          <p className="pb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            dolore nostrum nihil dicta vel earum doloribus obcaecati at numquam
            delectus.
          </p>
        </div>
      </div>
      <div className="about-img">

      </div>
      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
