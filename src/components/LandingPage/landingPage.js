import React from "react";
import Frame from "../Frame/frame";
import Title from "../Title/title";
import Button from "../Button/button";
import DescriptionContainer from "../../components/DescriptionContainer/descriptionContainer.js";
import Floor from "../../components/Floor/floor.js";
export default class LandingPage extends React.Component {
constructor() {
    super();

    this.state = {
      pictureStyle:{
        "width":"25em"
      }
    };
  }

  render() {
    return (
      <div>
      <div className="landingPageWrapper wall">
      <div className="headerAndButtonContainer" >
      <div className="landingPageContent" >
        <Frame pictureClass="landingPagePictureClass">
            <Title />
        </Frame>
        <DescriptionContainer title="The Name" descriptionContainerClass="landingPageDescriptionContainer">
        They say a picture is worth a thousand words. Sometimes, you only need two. They also say simplicity is the ultimate form of sophistication. And I think that goes without saying.
        <div className="buttonContainer">
          <Button buttonContainer={"wordButtonContainer"} name={"Resume (.docx)"} downloadURL={"/downloadResume/Word"} buttonClass={"resumeButton resumeWord"} file={"word"} />
          <Button name={"Resume (.pdf)"} downloadURL={"/downloadResume/PDF"} buttonClass={"resumeButton resumePDF"} file={"pdf"} />
       </div>
       </DescriptionContainer>
      </div>
      </div>
      </div>
      <Floor/>
      </div>
    );
  }
}