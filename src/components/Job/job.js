import React from "react";
import ImageContainer from "../ImageContainer/imageContainer";
export default class Job extends React.Component {

  constructor() {
    super();
    this.state = {
      jobImageContainerClass: "jobLogo"
    };
  }

  render() {
    return (
      <div className="job">
        <div className="jobInfo">
          <div className="position"> {this.props.position} </div>
          <div className="company"> {this.props.company}</div>
          <div className="duration"> {this.props.duration} </div>
        </div>
        <div className="jobLogo">
        <ImageContainer imageContainerClass={this.state.jobImageContainerClass} 
                                           img= {this.props.jobImage} />
      </div>
      </div>
    );
  }
}