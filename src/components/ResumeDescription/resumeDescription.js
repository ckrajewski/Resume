import React from "react";
import DescriptionContainer from "../../components/DescriptionContainer/descriptionContainer.js";
import Button from "../../components/Button/button.js"
export default class ResumeDescription extends React.Component {

  render() {
    return (
      <div className="personalDescription">
        <DescriptionContainer title="THE RESUME" description="About the Artist:">
        <div>
      	I enjoy learning as much as I can about JavaScript, jQuery, AJAX,RESTful web services, and JavaScript frameworks like React. In fact, I have used all of these technologies when designing 
      	this site. Through my work at Salesforce  I have also become enveloped with the proper ways of creating an app.
        </div>
        <div className="buttonContainer">
          <Button buttonContainer={"wordButtonContainer"} name={"Resume (.docx)"} downloadURL={"/src/what/"} buttonClass={"resumeButton resumeWord"} file={"word"} />
          <Button name={"Resume (.pdf)"} downloadURL={"/downloads"} buttonClass={"resumeButton resumePDF"} file={"pdf"} />
       </div>
        </DescriptionContainer>
      </div>
    );
  }
}