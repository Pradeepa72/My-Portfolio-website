import React from 'react';

const About = () => {
  return (
    <div
    name="About"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            <div>
            <p className="text-xl mt-20">Hello there! I'm a passionate and innovative Front-End Developer with a keen eye for detail and 
            a strong commitment to delivering exceptional user experiences.
             With a grate experience in web development, I have honed my skills in crafting responsive and visually appealing websites that engage and delight user
                     </p>
                     </div>
                     <br />
                     <p className="text-xl ">
                     My proficiency lies in transforming design concepts into fully functional, 
                     interactive, and intuitive user interfaces. I possess a deep understanding of front-end technologies, 
                     including HTML5, CSS3, JavaScript, and various modern frameworks like React, Vue.js, and Angular. 
                     Whether it's building seamless navigation, optimizing website performance, or ensuring cross-browser compatibility, 
                     I take pride in creating robust and pixel-perfect front-end solutions.
                     </p>
            </div>
        </div>
    </div>
  );
};

export default About;