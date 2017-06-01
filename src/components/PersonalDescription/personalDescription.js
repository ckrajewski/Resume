import React from "react";
import DescriptionContainer from "../../components/DescriptionContainer/descriptionContainer.js"
export default class PersonalDescription extends React.Component {

  render() {
    return (
      <div className="personalDescription">
        <DescriptionContainer title="THE PROFILE PIC" description="About the Artist:">
        <div>
      	I enjoy learning as much as I can about JavaScript, jQuery, AJAX,RESTful web services, and JavaScript frameworks like React. In fact, I have used all of these technologies when designing 
      	this site. Through my work at Salesforce  I have also become enveloped with the proper ways of creating an app.
        </div>
        </DescriptionContainer>
      </div>
    );
  }
}