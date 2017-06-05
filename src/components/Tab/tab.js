import React from "react";
import ReactDOM from "react-dom";

export default class Tab extends React.Component {

handleTabClickEvents (event){
	debugger;
	var tabs=document.getElementsByClassName("tab");
	for(var i=0; i<tabs.length; i++){
		tabs[i].style.color="white";
	}
	debugger;
	event.currentTarget.style.color="black";
}

  render() {
    return (
      <div className="tabContainer"  data-content={this.props.dataContent}>
        <div className="tab" data-content={this.props.dataContent} onClick={this.handleTabClickEvents.bind(this)}> {this.props.title} </div>
     </div>
    );
  }
}