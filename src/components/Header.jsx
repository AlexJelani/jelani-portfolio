import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between px-5 py-2 bg-gray-900 text-white">
      <a href="/" className="logo text-2xl font-bold">
        Jelani
      </a>
      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="/#resume">Resume</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className="block md:block fixed left-0 right-0 top-10 py-2 h-full bg-gray-900">
        <ul className="flex flex-col">
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="/#resume">Resume</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button>
        
      </button>
    </header>
  );
};

export default Header;
