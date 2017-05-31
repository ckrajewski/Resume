import React from "react";
import ReactDOM from "react-dom";

export default class Tab extends React.Component {

handleClickEvents (){
	debugger;
}

  render() {
    return (
      <div className="tabContainer" data-content={this.props.dataContent}>
        <div className="tab" data-content={this.props.dataContent} onClick={this.handleClickEvents.bind(this)}> {this.props.title} </div>
     </div>
    );
  }
}