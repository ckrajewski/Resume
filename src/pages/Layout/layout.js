import React from "react";
import Header from "../../components/Header/header";
import LandingPage from "../../components/LandingPage/landingPage";
import Resume from "../../pages/Resume/resume";
import AboutMe from "../../pages/AboutMe/aboutMe";
import SideProjects from "../../pages/SideProjects/sideProjects";

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            "navTo": LandingPage,
            "LandingPage":LandingPage,
            "Resume": Resume,
            "AboutMe" : AboutMe,
            "SideProjects":SideProjects
        };
    }

    handleAllClickEvents(event) {
        debugger;
        //this.state.navTo=event.target.parentNode.getAttribute("data-content");
        var navTo = event.target.getAttribute("data-content");
        if (navTo) {
            this.setState({ "navTo": this.state[navTo] });
            return;
        }
        navTo = event.target.parentNode.getAttribute("data-content");
        if(navTo) {
            this.setState({ "navTo":  this.state[navTo] });
        }

    }
    render() {

     var Content = this.state.navTo;
     return (
      <div className="layout" onClick={this.handleAllClickEvents.bind(this)}>
       <Header />
       <Content /> 
      </div>
    );
}
}
