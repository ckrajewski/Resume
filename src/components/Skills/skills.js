import React from "react";
import SectionTitle from "../SectionTitle/sectionTitle";
import ImageContainer from "../ImageContainer/imageContainer";
export default class Skills extends React.Component {


  render() {
    return (
      <div className="">
      <SectionTitle title="Skills" />
      <div className="skillsLayout">
        <ImageContainer img="/public/images/web.png"
                  imageWidth="160px" />
        <ImageContainer img="/public/images/apex.png"
                  imageWidth="110px" 
                  />
        <ImageContainer img="/public/images/aura.png"
                  imageWidth="110px" />
                  </div>
        <div className="skillsLayout">
        <ImageContainer img="/public/images/java.png"
                  imageWidth="90px" />
        <ImageContainer img="/public/images/python.png"
                  imageWidth="90px" />
        <ImageContainer img="/public/images/git.png"
                  imageWidth="90px" />
        </div>
      </div>
    );
  }
}