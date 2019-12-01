import React from "react";
import DescriptionContainer from "../../components/DescriptionContainer/descriptionContainer.js";
import Button from "../../components/Button/button.js"
export default class ResumeDescription extends React.Component {

  render() {
    return (
      <div className="personalDescription resumeDescription">
        <DescriptionContainer title="THE RESUME">
          <div>
      	     Experience. Skills. The two most important aspects to this painting. Naturally, they should get their own sections. </div>
          <br />
          <div className="subTitle">Experience:</div>
            <div> Currently, I’m working within Salesforce, developing a financial services app. The intent of the app is to facilitate the process  that advisors go through when managing client financials. The app sits on top of the Salesforce platform, allowing us to take advantage of the platforms functionality. The aura front end framework was used to present client financials in a visually appealing and intuitive way. Reports could be run by the client to see their data in real time. To learn more about the app, visit the webpage <a href="https://www.salesforce.com/solutions/industries/financial-services/financial-services-cloud/" target="_blank">here</a>. </div>
            <br />
          <div className="subTitle">Skills:</div>
            <div>Most of my development experience has centered around front end development. This gallery was built using React. Aura is the Salesforce front end framework, which I have used extensively along with Lightning Web Components (LWC). Though my coding experience is not limited to the front end. Apex, Salesforce proprietary language, was used to create the API that our front end interacted with. The language is a derivative of Java. I have also developed in Python, as evidenced by a dupe detector project that I wrote. </div>
        <br />
        <div className="resumePageButtonContainer">
          <Button buttonContainer={"wordButtonContainer"} name={"Resume (.docx)"} downloadURL={"/downloadResume/Word"} buttonClass={"resumeButton resumeWord"} file={"word"} />
          <Button name={"Resume (.pdf)"} downloadURL={"/downloadResume/PDF"} buttonClass={"resumeButton resumePDF"} file={"pdf"} />
       </div>
        </DescriptionContainer>
      </div>
    );
  }
}