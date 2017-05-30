import React from "react";
export default class Job extends React.Component {

  handleNavigation (event){
    if(this.props.navTo){
        var win = window.open(this.props.navTo, '_blank');
      if (win) {
        //Browser has allowed it to be opened
      win.focus();
      } 
    }
  }
  
  render() {
    var pointerStyle = "";
    if(this.props.navTo!=null){
          pointerStyle=" pointer";
      }
    return (
      <div className={"wrapper" + pointerStyle} onClick={this.handleNavigation.bind(this)}>
        <div className="picture" style={this.props.pictureStyle}>
          <div className="hook"></div>
            <div className="frame">
              <div className="inside">
                {this.props.children}
              </div>
            </div>
        </div>
      </div>
    );
  }
}