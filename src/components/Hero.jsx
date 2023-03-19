import React from "react";
import HeroImg from "../assets/hero-img.png"

const Hero = () => {
  return (
    <section className="bg-primary text-white py-32">
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
      <div className="hero-info">
        <h1 className="text-2xl  lg:text-5xl">
          Hi, <br />I am <span className="logo">J</span>elani <br />
          frontend developer
        </h1>
        <p className="py-5">
          I am proficent in React.js, React Native, Tailwind and Material UI
          CSS.
        </p>
        <button className="btn bg-accent border-2 border-[#7477FF] text-white px-4 py-2 hover:bg-transparent">See projects</button>
      </div>
      <div className="hero-img">
        <img src={HeroImg} alt="coding illustration" className="lgw-[80%] w-96 ml-auto rounded-full" />
      </div>
      </div>
    </section>
  );
};

export default Hero;