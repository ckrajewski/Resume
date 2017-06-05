import React from "react";
import Frame from "../Frame/frame";
import Title from "../Title/title";
import Button from "../Button/button";
import DescriptionContainer from "../../components/DescriptionContainer/descriptionContainer.js";
export default class LandingPage extends React.Component {
constructor() {
    super();

    this.state = {
      pictureStyle:{
        "width":"400px"
      }
    };
  }

  render() {
    return (
      <div className="headerAndButtonContainer" >
      <div className="landingPage" >
        <Frame pictureStyle={this.state.pictureStyle}>
            <Title />
        </Frame>
        <DescriptionContainer title="The Name" descriptionContainerClass="landingPageDescriptionContainer">
        They say a picture is worth a thousand words. Sometimes, you only need two. They also say simplicity is the ultimate sophistication. And I think that goes without saying.
        <div className="buttonContainer">
          <Button buttonContainer={"wordButtonContainer"} name={"Resume (.docx)"} downloadURL={"/src/what/"} buttonClass={"resumeButton resumeWord"} file={"word"} />
          <Button name={"Resume (.pdf)"} downloadURL={"/downloads"} buttonClass={"resumeButton resumePDF"} file={"pdf"} />
       </div>
       </DescriptionContainer>
      </div>
      </div>
    );
  }
}