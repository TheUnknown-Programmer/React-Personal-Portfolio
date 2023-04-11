import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import emailImg1 from "../assets/img/email-1.png";
import emailImg2 from "../assets/img/email-2.png";
import emailImg3 from "../assets/img/email-3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Old Portfolio",
      description: "Web Development",
      imgUrl: projImg1,
    },
    {
      title: "E-Commerce Webesite",
      description: "Web Development",
      imgUrl: projImg2,
    },
    {
      title: "Youtube Clone",
      description: "Web Development",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title: "Email Landing Page",
      description: "Email Development",
      imgUrl: emailImg1,
    },
    {
      title: "Email Advertisement",
      description: "Email Development",
      imgUrl: emailImg2,
    },
    {
      title: "Email Transaction",
      description: "Email Development",
      imgUrl: emailImg3,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Email Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Biography</Nav.Link>
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
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <p>I have been an artist for as long as I could remember. Trying to make something unique has always been my goal. The results of my creations have been my constant motivation; something I could proudly say, "Yea, I created that!". Once I got introduced to coding, I was able to create anything with my knowledge of coding. It let me create my website, which led you here. It's exciting being able to create anything by coding, I wonder what we can create together!</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
