import React from "react"
import Skills from "../components/skills"
import Projects from "../components/projects"
import RightSidebar from "../components/rightSidebar"
// eslint-disable-next-line
import fontawesome from "../fontawesome"

import Layout from "../components/layout"
import "../components/styles/index.scss"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="container">
      <div className="left__div">
        <p className="typewriter title">Hello, my name is Abel Acosta!</p>
        <h3>
          I'm a front end developer with experience using modern JavaScript
          libraries. I enjoy every aspect of it, and I love building responsive
          websites from start to finish.
        </h3>
        <Skills />
        <h2 className="projects__title">Projects</h2>
        <Projects />
      </div>
      <div className="right__div">
        <RightSidebar />
      </div>
    </div>
  </Layout>
)

export default IndexPage
