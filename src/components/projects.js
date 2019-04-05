import React from "react"
import { projects } from "../data/projectsInfo"
import { Link } from "gatsby"

import "./styles/projects.scss"

class Projects extends React.Component {
  render() {
    return (
      <div id="projects" className="projects-grid">
        {projects.map(project => (
          <div key={project.name}>
            <Link to={`/${project.slug}`}>
              <img
                src={require("../images/projects/" + project.img + ".png")}
                className="projects-row__image"
                alt={project.name}
              />
              <h4>{project.name}</h4>
              <p className="projects-row_info">{project.briefIntro}</p>
            </Link>
          </div>
        ))}
      </div>
    )
  }
}

export default Projects
