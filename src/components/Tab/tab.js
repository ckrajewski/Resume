import React from "react";
import ReactDOM from "react-dom";

export default class Tab extends React.Component {

handleTabClickEvents (event){
	var tabs=document.getElementsByClassName("tab");
	for(var i=0; i<tabs.length; i++){
		tabs[i].style.color="black";
	}
	event.currentTarget.style.color="#AF6622";
}

  render() {
    return (
      <div className="tabContainer"  data-content={this.props.dataContent}>
        <div className={"tab " + this.props.selectedTabStyle}  data-content={this.props.dataContent} onClick={this.handleTabClickEvents.bind(this)}> {this.props.title} </div>
     </div>
    );
  }
}