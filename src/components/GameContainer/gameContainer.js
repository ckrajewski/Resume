import React from "react";
import Frame from "../Frame/frame.js"

export default class GameContainer extends React.Component {

   constructor() {
    super();

    this.state = {
      gameId:"gameArea",
      pictureStyle:{
        "width":"250px"
      }
    };
  }

  render() {
    var insideClass=this.props.insideClass;
    if(insideClass==null)
    {
  	 var pictureWidth = Number.parseInt(this.props.imageWidth) + 50 + "px";
     this.state.pictureStyle.width=pictureWidth;
    }
    else
    {
  	 this.state.pictureStyle.width=Number.parseInt(this.props.imageWidth)+32+"px";
    }
    return (
       <Frame wrapperClass="" pictureStyle={this.state.pictureStyle} navTo={this.props.navTo} insideClass={this.props.insideClass}>
    	<div className={this.props.imageContainerClass} id={this.state.gameId}>
        
      </div>
      </Frame>
  
    );
  }
}