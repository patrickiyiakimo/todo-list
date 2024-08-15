import React from "react";

const Hero = ({ title }) => {
  // In my App.js, I passed the title prop to the Hero component
  return (
    <div className=" font-mont text-center pt-48 text-2xl md:text-6xl font-semibold bg-black text-white">
      <h1>{title}</h1>
      <p className="text-xl pt-2 pb-40 md:pt-5 font-normal md:mr-40 md:ml-40">
        Welcome to your productivity hub! Ready to conquer your tasks, big or
        small? Let’s turn your to-dos into done! Dive in, get organized, and
        check off those goals like a pro. Let's get things done—one task at a
        time!
      </p>
    </div>
  );
};

export default Hero;
