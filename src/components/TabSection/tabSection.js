import React from "react";
import Tab from "../Tab/tab";

export default class TabSection extends React.Component {


  render() {
    return (
      <div>
        <div className="flexContainer tabSection">
            <Tab title="Home" dataContent="LandingPage" selectedTabStyle="selectedTabStyle"/>
            <Tab title={"Resume"} dataContent="Resume"/>
            <Tab title={"About Me"} dataContent="AboutMe"/>
            <Tab title="Side Projects" dataContent="SideProjects"/>
        </div>

      </div>
    );
  }
}