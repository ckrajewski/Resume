import React from "react";
import LandingPage from "../LandingPage/landingPage";
import AboutMe from "../../pages/AboutMe/aboutMe";
import Title from "../Title/title";
import Experience from "../Experience/experience"
export default class Job extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "LandingPage":LandingPage,
      "AboutMe":AboutMe,
      "Title": Title,
      "Experience":Experience
    };
  }

  render() {
    var Content = this.state[this.props.component];
    return (
      <div className="wrapper">
        <div className="picture">
          <div className="hook"></div>
            <div className="frame">
              <div className="inside">
                <Content />
              </div>
            </div>
        </div>
      </div>
    );
  }
}