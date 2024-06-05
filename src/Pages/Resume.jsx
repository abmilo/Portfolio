import React from 'react';
import PDFViewer from '../Components/PDFViewer';

const Resume = () => {
  return (
    <>
      <section className="main py-10 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
              Resume
            </h1>
            <div className="w-full">
              <PDFViewer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
