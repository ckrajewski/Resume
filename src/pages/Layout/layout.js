import React from "react";
import Header from "../../components/Header/header";
import LandingPage from "../../components/LandingPage/landingPage";
import Resume from "../../pages/Resume/resume";
import AboutMe from "../../pages/AboutMe/aboutMe";
import SideProjects from "../../pages/SideProjects/sideProjects";
import Game from "../../pages/Game/game";

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            "navTo": LandingPage,
            "LandingPage":LandingPage,
            "Resume": Resume,
            "AboutMe" : AboutMe,
            "SideProjects":SideProjects,
            "Game":Game,
            "VistedGame":false,
            "Page":"default"
        };
    }
    createGame(){
      var visitedGame=this.state.VistedGame;
      if (!visitedGame){
        this.setState({"VisitedGame":true});
      }
      return <Game CreatedGame={vistedGame} />
    }
    getGame(){
      //var navTo=this.state.Page;
      return <Game/>;
    }
    handleAllClickEvents(event) {
        var navTo = event.target.getAttribute("data-content");
        if (navTo) {
          this.setState({ "navTo": this.state[navTo] });
        }
        navTo = event.target.parentNode.getAttribute("data-content");
        if(navTo) {
          this.setState({ "navTo": this.state[navTo] });
        }
        
        
      
        /*
        if(navTo=="Game"){
          if(!this.state.visitedGame){
            this.setState({ "vistedGame": true });
          }
          else{

          }
        }
        */     
        
    }
    render() {

     var Content = this.state.navTo;
     //debugger;
     //if(Content.name=="Game"){
      //  Content=this.getGame();
     //}
     return (
      <div className="layout" onClick={this.handleAllClickEvents.bind(this)}>
       <Header />
       <Content /> 
      </div>
    );
}
}
