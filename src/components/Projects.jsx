import React from "react";
import project1 from "../assets/portfolio.png"
import project2 from "../assets/friendtracker.png"
import project3 from "../assets/reactdictionary.png"
import project4 from "../assets/cartreact.png"

const Projects = () => {
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
      <div className="projects container mx-auto grid md:grid-cols-3">
        <div href="/#some project url">
            <img src={project1} alt="" />
        </div>
        <div href="/#some project url">
            <img src={project2} alt="" />
        </div>
        <div href="/#some project url">
            <img src={project3} alt="" />
        </div>
        <div href="/#some project url">
            <img src={project4} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
