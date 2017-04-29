import React from "react";
import ReactDOM from "react-dom";

export default class Tab extends React.Component {


  render() {
    return (
      <div className="tabContainer">
        <div className="tab" data-content={this.props.dataContent}> {this.props.title} </div>
     </div>
    );
  }
}