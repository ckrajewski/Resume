import React from "react";
export default class DescriptionContainer extends React.Component {

  render() {
    return (
      <div className={"descriptionContainer " + this.props.descriptionContainerClass}>
      <div className="sectionTitle">
       {this.props.title}
      </div>
      <div className="description">
       {this.props.description}
      </div>
      <div className="descriptionContainer">
         {this.props.children}
        </div>
      </div>
    );
  }
}