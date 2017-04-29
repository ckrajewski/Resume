import React from "react";
import Navigation from "../Navigation/navigation";
import ImageContainer from "../ImageContainer/imageContainer";

export default class LeftPanel extends React.Component {

	constructor() {
    super();
    this.state = {
      //profilePic : "../../public/images/profilePic.jpg",
      profilePic : "/src/public/images/profilePic.jpg",
      imageContainerClass: "profileImageContainer"
    };
  }

  render() {
    return (
      <div className="leftPanel">
      	<ImageContainer imageContainerClass ={this.state.imageContainerClass} img={this.state.profilePic} />
        <Navigation />
      </div>
    );
  }
}