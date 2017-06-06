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
       <Frame pictureStyle={this.state.pictureStyle} navTo={this.props.navTo} insideClass={this.props.insideClass}>
    	<div className={this.props.imageContainerClass} >
        <img className={"maxImageSize " + this.props.imageClass} src={this.props.img} width={this.props.imageWidth} height={this.props.imageHeight} />
      </div>
      </Frame>
  
    );
  }
}