import React from "react";
import Frame from "../Frame/frame.js"

export default class ImageContainer extends React.Component {

   constructor() {
    super();

    this.state = {
      pictureStyle:{
        "width":"250px"
      }
    };
  }

  render() {
  	var pictureWidth = Number.parseInt(this.props.imageWidth) + 50 + "px";
  	this.state.pictureStyle.width=pictureWidth;
    return (
       <Frame pictureStyle={this.state.pictureStyle} navTo={this.props.navTo}>
    	<div className={this.props.imageContainerClass} >
        <img src={this.props.img} width={this.props.imageWidth} height={this.props.imageHeight} />
      </div>
      </Frame>
  
    );
  }
}