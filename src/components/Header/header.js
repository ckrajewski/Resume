import React from "react";
import TabSection from "../TabSection/tabSection";

export default class Header extends React.Component {


  render() {
    return (
      <div className="headerSection" >
        <div className="headerName">
            <h1> Chris Krajewski </h1>
        </div>
        <TabSection />
      </div>
    );
  }
}