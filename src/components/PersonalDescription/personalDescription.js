import React from "react";
import DescriptionContainer from "../../components/DescriptionContainer/descriptionContainer.js"
export default class PersonalDescription extends React.Component {

  render() {
    return (
      <div className="personalDescription aboutMePersonalDescription">
        <DescriptionContainer title="THE PROFILE PIC" description="About the Artist:">
        <div>
      	I enjoy learning as much as I can about front end frameworks like Aura and React. In fact, I have used React when designing 
      	this site. <br/>
        Through my work at Salesforce I have also become enveloped with the proper ways of creating an app. As a developer, delivering a good product is more than just writing good code.
        It's questioning whether the design pattern you've chosen is the best one.   It's understanding why you're even writing it. Salesforce encourages these behaviors, and I've taken a more active approach by engaging with leads when designing new features. I've 
        also learned new languages and tools whenever the opportunity was afforded to me. It's what excites and drives me to do my best at work.
        </div>
        </DescriptionContainer>
      </div>
    );
  }
}