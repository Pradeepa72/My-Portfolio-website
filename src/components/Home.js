import React from 'react';
import {HiOutlineArrowRight} from 'react-icons/hi';
import HeroImage from "../assets/HeroImage.jpg";



const Home = () => {
  return (
  <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"> 
        <div className="max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row"> 
             <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white " >I'm a Front end Developer</h2>
                <p className="text-gray-600 ">
                    I am Front end Developer having a Expeience in building and designing 
                    software.
                    Currently ,I love to work on the web application using the technologies like
                    React js,Tailwind CSS  
                </p>
                <div>
                    <button className="group text-black w-fit px-6 py-3
                    my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-50 to-slate-50 cursor-pointer ">
                         Portfolio
                         <span className="group-hover:rotate-90 duration-300">
                            <HiOutlineArrowRight size={25}
                              className="ml-1"/>
                            </span>
                    </button>
                </div>
             </div>
             <div>
                <img src={HeroImage} alt="my profile"  
                className=" rounded-2xl mx-auto w-2/3 md:w-full "/>
             </div>
        </div>
    </div>
  );
};

export default Home;