import React from "react";
export default class Plaque extends React.Component {

constructor() {
    super();
    this.state = {
      pictureStyle:{
        "width":"250px"
      }
    };
  }

  render() {
    return (
      <div className="PlaqueContainer">
    <div className="Plaque">
      <div className="Position">
        {this.props.position}
        </div>
      <div className="CompanyName">
        {this.props.company}
        </div>
         <div className="Duration">
        {this.props.duration}
        </div>
      </div>
      </div>
    );
  }
}