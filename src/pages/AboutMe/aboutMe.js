import React from "react";
import PersonalDescription from "../../components/PersonalDescription/personalDescription.js";
import ImageContainer from "../../components/ImageContainer/imageContainer.js";
import Floor from "../../components/Floor/floor.js";
export default class AboutMe extends React.Component {

  render() {
    return (
      <div className="wall">
        <div className="aboutMe">
        <ImageContainer img="/public/images/profilePic.png"
                        imageWidth="310px"
                        insideClass="pictureInside"/>
      <PersonalDescription/>
      </div>
      <Floor />
      </div>
    );
  }
}