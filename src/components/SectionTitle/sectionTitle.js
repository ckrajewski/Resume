import React from "react";

export default class SectionTitle extends React.Component {


    render() {
    return (
      <div>
        <div className={"sectionTitle"}> {this.props.title} </div>
      </div>
    );
    }
}
