import React from "react";
import resume from "../Images/resume.pdf"

const PDFViewer = () => {
 return (
 <div>
 <iframe src={resume} width="90%" height="1000px" />
 </div>
 );
};
export default PDFViewer;