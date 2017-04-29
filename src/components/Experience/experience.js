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
      <SectionTitle title={"Experience"} />
        <Job  position={"Global Wealth & Investment Management"} 
              company={"Merril Lynch"}
              duration={"2015 - 2016"}
              jobImage={"/src/public/images/merrilLynch.png"}
              />
        <Job  position={"Financial Planning and Analysis"} 
              company={"Walmart eCommerce"}
              duration={"2014 - 2014 (Less than a year"}
              jobImage={"/src/public/images/walMart.png"}
              />
        <Job  position={"Financial Planning and Analysis"} 
              company={"Intel Corporation"}
              duration={"2011 - 2014"}
              jobImage={"/src/public/images/intel.png"}
              />
        <Job  position={"Investment Management"} 
              company={"Berkeley Investment Group"}
              duration={"2010 - 2011"}
              jobImage={"/src/public/images/berkley.png"}
              />
        <Job  position={"Employee Wellness"} 
              company={"Berkeley Investment Group"}
              duration={"2010 - 2010 (Less than year)"}
              jobImage={"/src/public/images/kaiser.png"}
              />
      </div>
    );
  }
}