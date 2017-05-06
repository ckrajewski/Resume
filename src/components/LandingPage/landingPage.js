import React from "react";
import Frame from "../Frame/frame";
import Button from "../Button/button";
export default class LandingPage extends React.Component {

  // constructor() {
 //    super();
 //    this.state = {
 //      //profilePic : "../../public/images/profilePic.jpg",
 //      profilePic : "/src/public/images/profilePic.jpg",
 //      imageContainerClass: "profileImageContainer"
 //    };
 //  }

  render() {
    return (
      <div className="headerAndButtonContainer">
        <Frame component="Title" />
         <div className="buttonContainer">
         <Button buttonContainer={"wordButtonContainer"} name={"Resume (.docx)"} downloadURL={"/src/what/"} buttonClass={"resumeButton resumeWord"} file={"word"} />
         <Button name={"Resume (.pdf)"} downloadURL={"/downloads"} buttonClass={"resumeButton resumePDF"} file={"pdf"} />
      </div>
      </div>
    );
  }
}