import React from "react";
import ImageContainer from "../../components/ImageContainer/imageContainer";
import ResumeDescription from "../../components/ResumeDescription/resumeDescription";
export default class Resume extends React.Component {


  render() {
    return (
     <div className="resume">
      <ImageContainer insideClass="pictureInsides"
                      img= "/public/images/resume3.jpg"
                      imageWidth="750px" />

      <ResumeDescription/>

      </div>
    );
  }
}