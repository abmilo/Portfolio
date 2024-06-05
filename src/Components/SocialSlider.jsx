import React, {useState} from 'react'
import Marquee from 'react-fast-marquee'
import img1 from "../Images/linkedin.png"
import img2 from "../Images/github.png"
import img3 from "../Images/java.png"
import img4 from "../Images/node.png"
import img5 from "../Images/mySQL.png"

const SocialSlider = () => {

  return (
    <div className='py-8'>
         <h1 className="text-4xl font-extrabold text-white sm:text-4xl md:text-4xl mb-4">
        Contact Me
        </h1>
        <Marquee gradient="true" gradientColor='#8EB4E5'  autoFill="true" direction='right' pauseOnHover="true">
        <div className='flex px-10'>
            
            <img  onClick={()=>{console.log("yo")}}  className="pr-5" src={img1} alt="" />
            <img  onClick={()=>{console.log("yo")}}  className="pr-5" src={img2} alt="" />

        </div>
        </Marquee></div>
  )
}

export default SocialSlider