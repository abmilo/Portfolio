import "../App.css";
import logo from "../img/me.png";
export default function Home() {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="home">Home</a>
              </li>
              <li>
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

        <div className="about">
          <p>
            Hi! I'm Ibrahim, a aspiring software engineer and full-stack
            developer. Currently, I'm a studying Computer Science at the
            University of Pittsburgh, where I am apart of a bunch of different
            organizations. I have a passion for learning new technologies and
            I'm eager to contribute to dynamic teams. Outside of coding, I still
            enjoy Soccer, running, and playing with my cat, Bullet.
          </p>
        </div>

        <div className="footer">
          <p>
            {" "}
            &copy; made by ibrahim miloua with Bootstrap, Tailwind, React and
            lots of coffee...
          </p>
        </div>
      </div>
    </div>
  );
}
