import "../App.css";
import logo from "../img/me.png";
import ss2 from "../img/ss2.png";

export default function Project() {
  return (
    <div class="container">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li>
              <a href="home">Home</a>
            </li>
            <li class="active">
              {" "}
              <a href="projects">Projects</a>
            </li>
            <li>
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

      <div class="projects">
        <h3> Data Visualization Project </h3>
        <p>
          As part of a team of three, I worked on a data visualization project
          that aimed to find the safest neighborhood in the Greater Pittsburgh
          Region. We used pandas and python to extract and analyze data from the
          Western Pennsylvania Regional Data Center (WPRDC). We used three
          datasets from the WPRDC: sidewalk to street walkability ratio, uniform
          crime reporting data, and primary care facilities. We assumed that the
          safest neighborhood would have a high walkability ratio, a low crime
          rate, and a high accessibility to primary care facilities. We created
          charts and maps to visualize the data and compare the neighborhoods
          based on these criteria. We found that the neighborhood of Squirrel
          Hill South had the highest score for safety among the neighborhoods we
          considered.
        </p>
        <img src={ss2} alt="s2" />{" "}
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
