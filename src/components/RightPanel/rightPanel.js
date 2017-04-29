import React from "react";
import Resume from "../../pages/Resume/resume";
import AboutMe from "../../pages/AboutMe/aboutMe";
import SideProjects from "../../pages/SideProjects/sideProjects";

export default class RightPanel extends React.Component {

  constructor() {
    super();
    this.state = {
     "Resume":Resume,
     "About Me":AboutMe,
     "Side Projects":SideProjects
    };
  }

  render() {
    var Content = this.state[this.props.renderContent];
    return (
      <div class="rightPanel" >
        <div class="nameHeader">
            <h1> Sadi Mu </h1>
        </div>
        <div id="mainContentWindow" className="mainContentWindow">
          <Content />
        </div>
      </div>
    );
  }
}