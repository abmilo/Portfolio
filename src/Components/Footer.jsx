import React from "react";
const Footer = () => {
  const today = new Date;
  const year = today.getFullYear();
  return (
    <div className="bg-gray-500 flex mb-0  " > 
    <section className="m-auto max-w-lg my-0 px-24">
    <a
      href="/hire"
      className="block bg-gray-600 mt-4 mb-2  text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 font-bold main"
    >
      Send me a Message!
    </a>
    <p className="text-gray-300  text-center  font-medium ">Made with React, Tailwind and lots of tea.</p>
    <p className="text-gray-300   text-center mb-2 font-small ">Copyright © {year} Ibrahim Miloua</p>
  </section></div>
   
  );
};

export default Footer;