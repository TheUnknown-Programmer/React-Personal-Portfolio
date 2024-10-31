// Projects.js

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import emailImg1 from "../assets/img/email-1.png";
import emailImg2 from "../assets/img/email-2.png";
import emailImg3 from "../assets/img/email-3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio",

      imgUrl: projImg1,
      githubLink:
        "https://github.com/TheUnknown-Programmer/React-Personal-Portfolio",
      website: "https://jonathanfloresdev.netlify.app/",
    },
    {
      title: "E-Commerce Website",

      imgUrl: projImg2,
    },
    {
      title: "Pomodoro App",

      imgUrl: projImg3,
      githubLink: "https://github.com/TheUnknown-Programmer/focusapp",
      website: "https://focusapp-beige.vercel.app",
    },
  ];

  const projects2 = [
    {
      title: "Email Landing Page",

      imgUrl: emailImg1,
    },
    {
      title: "Email Advertisement",

      imgUrl: emailImg2,
    },
    {
      title: "Email Transaction",

      imgUrl: emailImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p></p>
              <Tab.Container
                id="projects-tabs"
                defaultActiveKey="first"
                className="mb-5"
              >
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Web Dev</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Email Dev</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {projects2.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
