import React from "react";


export default class ImageContainer extends React.Component {

  render() {
    return (
      <div className={this.props.imageContainerClass} >
        <img src={this.props.img} />
      </div>
    );
  }
}