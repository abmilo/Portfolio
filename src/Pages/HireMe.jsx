import React from "react";
import messageMe from "../Images/message.png"
const HireMe = () => {
  
  return (
    <>
    
    <section className="main py-10 flex flex-col min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="text-center bg-gray-500 py-20 px-20 rounded-lg my-20">
                    
        <img  className="h-20 pb-6 no-click"src={messageMe} alt="" />
        <input type="text" placeholder="Name" className="flex mb-4 text-medium rounded-md px-2" />
        <input type="email" placeholder="Message" className="flex mb-4 text-medium rounded-md px-2"/>
        <input type="text" placeholder="Number/Email" className="flex mb-4 text-medium rounded-md px-2"/>
        <button className=" bg-gray-600  text-white  py-2 px-6 rounded-xl hover:bg-gray-700 font-bold main " onClick={()=>{console.log("clicked")}}>Submit</button>
       <p className="text-white pt-3">Or email/call me at : <br/> <span className="font-bold">ibrahimmiloua@gmail.com</span> <br/> 412-304-3275</p>   
        </div>
      </div>
    </section>
    </>
  );
};

export default HireMe;