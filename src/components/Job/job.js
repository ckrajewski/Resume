import React from "react";
import ImageContainer from "../ImageContainer/imageContainer";
import Plaque from "../Plaque/plaque.js"
export default class Job extends React.Component {



  render() {
    return (
      <div>
      <ImageContainer imageContainerClass="jobImageContainer"
                      img= {this.props.jobImage} 
                      imageWidth={this.props.jobImageWidth} 
                      imageHeight={this.props.jobImageHeight}
                      navTo={this.props.navTo} />
      <Plaque position={this.props.position}
              company={this.props.company} 
              duration={this.props.duration}
              />
      </div>
    );
  }
}