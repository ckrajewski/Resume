import React from "react";

export default class Button extends React.Component {


    downloadResume() {

       window.location.href=this.props.downloadURL;
    }

    render() {
    return (
      <div className={this.props.buttonContainer}>
        <button onClick={this.downloadResume.bind(this)} className={this.props.buttonClass}> {this.props.name} </button>
      </div>
    );
    }
}
