import React from "react";
import Frame from "../../components/Frame/frame.js"
export default class AboutMe extends React.Component {

  constructor() {
    super();

    this.state = {
      pictureStyle:{
        "width":"35%"
      }
    };
  }

  render() {
    return (
      <div className="personalDescriptionContainer">
      <div className="personalDescription">
      <div className="sectionTitle">
       THE PROFILE PIC
      </div>
      <div className="description">
       About the Artist:
      </div>
      <div className="descriptionContainer">
      	I enjoy learning as much as I can about JavaScript, jQuery, AJAX,RESTful web services, and JavaScript frameworks like React. In fact, I have used all of these technologies when designing 
      	this site. Through my work at Salesforce  I have also become enveloped with the proper ways of creating an app.
        </div>
      </div>
      </div>
    );
  }
}