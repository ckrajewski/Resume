import React from "react";

import Job from "../Job/job";
import SectionTitle from "../SectionTitle/sectionTitle";

export default class Experience extends React.Component {

   constructor() {
    super();
    this.state = {
      aboutMe: "About Me",
      resume:"Resume",
      sideProjects:"Side Projects"
    };
  }

  render() {
    return (
      <div className="Experience">
      <SectionTitle title="Experience" />
      <div className="ExperienceLayout">
        <Job  position="Developer"
              company="Salesforce"
              duration={"2015 - Present"}
              jobImage={"/public/images/salesforceLogo.png"}
              jobImageWidth="140px"
              navTo="https://salesforce.com"
              />
        <Job  position={"Developer"} 
              company={"Terrace Software"}
              duration={"2013 - 2014"}
              jobImage={"/public/images/terrace.png"}
              jobImageWidth="140px"
              jobImageHeight="100px"
              navTo="http://salesforce.com"
              />
        </div>
        <div className="ExperienceLayout">
        <Job  position="Developer" 
              company={"Forefront Corp"}
              duration={"2012 - 2013"}
              jobImage={"/public/images/forefrontLogo.jpg"}
              jobImageWidth="200px"
              navTo="http://forefrontcorp.com"
              />
      </div>
      </div>
    );
  }
}