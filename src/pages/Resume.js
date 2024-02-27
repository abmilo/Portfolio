import Header from "../components/Header";
import "../App.css";
import resume from "../img/Resume.pdf";
import logo from "../img/me.png";
import ss2 from "../img/ss2.png";

export default function Resume() {
  return (
    <div class="container">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              {" "}
              <a href="projects">Projects</a>
            </li>
            <li class="active">
              <a href="resume">Resume</a>
            </li>
            <li>
              {" "}
              <a href="https://github.com/abmilo" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ibrahimmiloua/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="opener pb-4">
        <img src={logo} alt="logo" />{" "}
        <h1 className="font-sans text-3xl font-bold">Ibrahim Miloua</h1>
        <div class="flex justify-center items-center gap-2 mt-3 mr-3 md:gap-3 md:mt-4 lg:gap-4 lg:mt-5">
          <div class="bg-green-400 rounded-full h-3 w-3 md:h-3 md:w-3"></div>
          <div class="  text-2xl ">Looking for new opportunities</div>
        </div>
      </div>
      <div class="resume">
        <embed src={resume} width="750px" height="900px" class="pdf" />
      </div>
      <div class="footer">
        <p>
          {" "}
          &copy; made by ibrahim miloua with Bootstrap and maybe React, Tailwind
          CSS, Framer Motion, and lots of coffee{" "}
        </p>
      </div>
    </div>
  );
}
