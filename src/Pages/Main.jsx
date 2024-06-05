import React from "react";
import me from "../Images/me.png"
import Slider from "../Components/Slider";
import SocialSlider from "../Components/SocialSlider";
const Main = () => {
  return (
    <section className="main  flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center  py-12 flex-col min-h-screen">
      <img className="pb-4 h-40 w-auto" src={me}></img>
      <div className="text-center px-20  pb-20">
                    
        <h1 className="text-4xl font-extrabold text-white sm:text-4xl md:text-4xl mb-4">
          About
          </h1>
       
        <p className="my-0 text-xl text-white pb-10"> Hi! I'm Ibrahim, a aspiring software engineer and full-stack developer. Currently, I'm a studying Computer Science at the University of Pittsburgh, where I am apart of a bunch of different organizations. I have a passion for learning new technologies and I'm eager to contribute to dynamic teams. Outside of coding, I still enjoy Soccer, running, and playing with my cat, Bullet.</p>
        <Slider/>
        </div>
      </div>
    </section>
  );
};

export default Main;