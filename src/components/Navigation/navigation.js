import React from "react";

import Tab from "../Tab/tab";

export default class Navigation extends React.Component {

   constructor() {
    super();
    this.state = {
      aboutMe: "About Me",
      aboutMeNav:"AboutMe",
      resume:"Resume",
      sideProjects:"Side Projects",
      sideProjectsNav:"SideProjects",

    };
  }

  render() {
    return (
      <div className="navigation">
        <Tab navTo={this.state.aboutMeNav} title={this.state.aboutMe} />
        <Tab navTo={this.state.resumeNav} title={this.state.resume} />
        <Tab navTo={this.state.sideProjectsNav} title={this.state.sideProjects} />
      </div>
    );
  }
}