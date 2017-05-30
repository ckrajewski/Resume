import React from "react";
import Frame from "../Frame/frame";
import Job from "../Job/job";
import Title from "../Title/title";
import Button from "../Button/button";
export default class LandingPage extends React.Component {


  render() {
    return (
      <div className="headerAndButtonContainer">
        <Frame >
            <Title />
        </Frame>
        <div className="buttonContainer">
          <Button buttonContainer={"wordButtonContainer"} name={"Resume (.docx)"} downloadURL={"/src/what/"} buttonClass={"resumeButton resumeWord"} file={"word"} />
          <Button name={"Resume (.pdf)"} downloadURL={"/downloads"} buttonClass={"resumeButton resumePDF"} file={"pdf"} />
       </div>
      </div>
    );
  }
}