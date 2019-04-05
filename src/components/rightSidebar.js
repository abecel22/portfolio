import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./styles/rightSidebar.scss"

class RightSidebar extends React.Component {
  render() {
    return (
      <div className="sidebar__container">
        <div className="profile__container">
          <div className="profile__image" />
          <p className="profile__bio">
            I am a technology enthusiast. My love for building software started
            with my Android. My curiosity was sparked as I challenged myself to
            build an app for my Android. I learned Java and successfully built 3
            simple apps.
          </p>
          <p className="profile__bio">
            I then learned about Javascript. After I realized all that
            Javascript could offer, I was hooked! Currently, I spend my time
            building new sites, practicing new algorithms on Codewars, and
            collaborating with a remote dev teams on a global collaboration
            platform, <a href="https://chingu.io/">Chingu</a>.
          </p>
        </div>
        <div className="bottom__links">
          <div className="icons">
            <a href="https://github.com/abecel22">
              <FontAwesomeIcon
                className="fa-2x"
                icon={["fab", "github-square"]}
              />
            </a>
            <a href="https://www.linkedin.com/in/abelacosta-dev/">
              <FontAwesomeIcon className="fa-2x" icon={["fab", "linkedin"]} />
            </a>
            <a href="mailto:abe2211@gmail.com">
              <FontAwesomeIcon
                className="fa-2x"
                icon={["fas", "envelope-square"]}
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default RightSidebar
