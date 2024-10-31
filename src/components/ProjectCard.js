import { Col } from "react-bootstrap";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  githubLink,
  website,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`${title} thumbnail`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="social-icon">
            <a href={githubLink} style={{ marginRight: "15px" }}>
              <img src={navIcon4} alt="GitHub Link" />
            </a>
            <a href={website}>
              <img src={navIcon5} alt="Website Link" />
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
