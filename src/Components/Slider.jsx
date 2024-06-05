import React, {useState} from 'react'
import Marquee from 'react-fast-marquee'
import img1 from "../Images/JS.png"
import img2 from "../Images/react.png"
import img3 from "../Images/java.png"
import img4 from "../Images/node.png"
import img5 from "../Images/mySQL.png"

const Slider = () => {

  return (
    <div className='py-8'>
         <h1 className="text-4xl font-extrabold text-white sm:text-4xl md:text-4xl mb-4">
        My stack
        </h1>
        <Marquee gradient="true" gradientColor='#8EB4E5'  autoFill="true" direction='left' pauseOnHover="true">
        <div className='flex '>
            
            <img  className="pr-5 no-click" src={img1} alt="" />
            <img   className="pr-5 no-click" src={img2} alt="" />
            <img  className="pr-5 no-click"  src={img3} alt="" />
            <img  className="pr-5 no-click"  src={img4} alt="" />
            <img  className="pr-5 no-click"   src={img5} alt="" />

        </div>
        </Marquee></div>
  )
}

export default Slider