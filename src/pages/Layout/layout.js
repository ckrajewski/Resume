import React from "react";
import Header from "../../components/Header/header";
import Resume from "../../pages/Resume/resume";
import AboutMe from "../../pages/AboutMe/aboutMe";
import SideProjects from "../../pages/SideProjects/sideProjects";

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            "navTo": Resume,
            "Resume": Resume,
            "AboutMe" : AboutMe,
            "SideProjects":SideProjects
        };
    }

    handleAllClickEvents(event) {
        //this.state.navTo=event.target.parentNode.getAttribute("data-content");
        var navTo = event.target.parentNode.getAttribute("data-content");
        if (navTo) {
            this.setState({ "navTo": this.state[event.target.parentNode.getAttribute("data-content")] });
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
