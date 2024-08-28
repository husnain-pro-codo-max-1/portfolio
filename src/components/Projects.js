import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { RiGraduationCapFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { FaWordpress } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";


export const Projects = () => {

  const projects = [
    
    {
      title: "WatsPI",
      description: "WatsPI: A MERN stack project showcasing seamless integration of MongoDB, Express.js, React.js, and Node.js for robust, efficient web solutions.",
      imgUrl: projImg1,
      link: "https://watspi-user-plum.vercel.app/dashboard2",
    },
    
    {

      title: "WatsPI-White-Theme",
      description: "WatsPI: A MERN stack project featuring a white theme, demonstrating seamless integration of MongoDB, Express.js, React.js, and Node.js for robust web solutions.",
      imgUrl: projImg3,
      link: "https://production-witspi.vercel.app/dashboard2",
    },
    
    {
      title: "FoodWeb",
      description: "Developed a dynamic food website using React JS and Redux for state management. The site features an intuitive interface for browsing recipes, viewing nutritional information, and interacting with a variety of food-related content.",
      imgUrl: projImg1,
      link: "https://food-pizza.vercel.app/",
    },
    
    {
      title: "E-Commerce Project",
      description: "E-Commerce website prototype has an impressive user interface (UI) and dynamic functionalities, but the backend isn't deployed. Despite the lack of a visible UI, the backend still includes important features like user authentication, tokenization, and more.",
      imgUrl: projImg3,
      link: "https://clothing-website-static.vercel.app/",
    },
    {
      title: "Insta Pay",
      description: "Insta Pay prototype boasts an impressive user interface (UI), featuring Tailwind CSS for styling and possibly including chart graphs. While the UI looks polished and user-friendly, it seems this is only a frontend prototype without backend functionality",
      imgUrl: projImg1,
      link: "https://instapayclone-2.vercel.app/",
    },
    {
      title: "QUIZ",
      description: "QUIZ-APP: A university project showcasing my expertise in React.js, Redux, and Firebase. This eCommerce website prototype embodies seamless user interaction and dynamic functionalities.",
      imgUrl: projImg2,
      link: "https://quiz-app-navy-five.vercel.app/",
    },
    {
      title: "Trading App",
      description: "I designed a trading app UI prototype, focusing solely on user interface practices to ensure an intuitive and visually appealing experience",
      imgUrl: projImg3,
      link: "https://urgent-ui.vercel.app/",
    },

    {
      title: "TODO APP",
      description:  "Manage your tasks with a seamless flow Powered by React, its ready to go.Plan your day, stay ahead of the game,Every task, every goal—just a click away.Your productivity partner, every single day.",
      imgUrl: projImg2,
      link: "https://todo-app-react-nine-kappa.vercel.app/",

    },

    {
      title: "DCFA",
      description:  "I developed a dynamic website using React JS and Tailwind CSS, featuring a farmer registration system, a visually appealing home page, a gallery showcasing relevant images, and an informative about page. user-friendly interfaces and manage front-end development efficiently.",
      imgUrl: projImg2,
      link: "https://d-cfa-web.vercel.app/",

    },

    {
      title: "Youtube clone",
      description:  "Developed a basic YouTube clone using React JS and Tailwind CSS, featuring video listings and responsive design.",
      imgUrl: projImg2,
      link: "https://youtube-clone-static.vercel.app/",

    },

    {
      title: "Basic UI",
      description:  "Designed a basic UI using React JS and Tailwind CSS, focusing on clean, and functional front-end elements.",
      imgUrl: projImg2,
      link: "https://basic-ui-eight.vercel.app/",

    }



  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>

                  <p>In recent projects, I've showcased my web development proficiency and tech-savvy approach. "bazar.com" stands out, an E-commerce site powered by React.js, Firebase, and Redux. It underscores my mastery of front-end tech and cloud integration. Then, my personal portfolio, built with React.js and Bootstrap, reflects my design flair and responsive web skills. Lastly, "watspi," a private project, demanded a robust tech stack: React.js, Redux, Node.js, and MongoDB. It's a testament to my backend and database expertise. These projects collectively highlight my adaptability, technical prowess, and commitment to top-notch web solutions.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project's</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="section">Working Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Education</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <div className="Education">
                          <FaReact /> <h1>TechOn Vendture</h1></div>
                        <p>Front-End-Developer [ 2024 - Present ]</p>
                        <hr className="horizontal-line" />
                        <div className="Education">
                          <FaReact /> <h1>Techno Mide</h1></div>
                        <p>As Front-End Intern [ 4/2023 - 6/2023 ]</p>
                        <hr className="horizontal-line" />
                        <div className="Education">
                          <FaWordpress /> <h1>LandMark</h1></div>
                        <p>Web Developer [ 2020 - 2021 ]</p>
                        <hr className="horizontal-line" />
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="Education">
                          <RiGraduationCapFill /> <h1>Bachelors in  Computer Science</h1></div>
                        <p>PAF-KIET University Karachi [ 2018 - 2023 ]</p>
                        <hr className="horizontal-line" />
                        <div className="Education">
                          <RiGraduationCapFill /> <h1>Intermediate in Pre Engineering</h1></div>
                        <p>Superior College Karachi [ 2016 - 2018 ]</p>
                        <hr className="horizontal-line" />
                      
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
