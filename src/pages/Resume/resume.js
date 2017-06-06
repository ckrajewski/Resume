import React from "react";
import ImageContainer from "../../components/ImageContainer/imageContainer";
import ResumeDescription from "../../components/ResumeDescription/resumeDescription";
import Floor from "../../components/Floor/floor";
export default class Resume extends React.Component {


  render() {
    return (
      <div>
     <div className="resume wall">
      <ImageContainer insideClass="pictureInsides"
                      img= "/public/images/resume.jpg"
                      imageClass="resumeImageClass"
                      pictureClass="resumeImageClass" />

      <ResumeDescription/>
      </div>
      <Floor />
      </div>
    );
  }
}