import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import RightSidebar from "../components/rightSidebar"
// import Image from "../components/image"
import SEO from "../components/seo"

export default props => {
  const { pageContext } = props
  const { name, paragraph, img, link, githubLink } = pageContext

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="container">
        <div className="left__div">
          <Link to="/" className="button">
            Back home
          </Link>
          <h2 className="project-details_header">{name}</h2>
          <img
            src={require("../images/projects/" + img + ".png")}
            alt=""
            className="project-details_image"
          />
          <p className="project-details_info">{paragraph} </p>
          <div className="button-container">
            <a href={link} className="button">
              Live Demo
            </a>
            <a href={githubLink} className="button">
              View Code
            </a>
          </div>
        </div>

        <div className="right__div">
          <RightSidebar />
        </div>
      </div>
    </Layout>
  )
}
