import React from "react";
import Experience from "../../components/Experience/experience";
import Frame from "../../components/Frame/frame";
import Button from "../../components/Button/button";
import Skills from "../../components/Skills/skills";
import SectionTitle from "../../components/SectionTitle/sectionTitle";
export default class Resume extends React.Component {


  render() {
    return (
      <div>
      <div className="resume">
      <div className="experienceFrame">
        <Experience/>
      </div>
      <div className="skillsFrame">
        <Skills />
      </div>
      </div>
      <div className="resumePageButtonContainer">
      <div className="skillsLayout">
         <Button buttonContainer={"wordButtonContainer"} name={"Resume (.docx)"} downloadURL={"/src/what/"} buttonClass={"resumeButton resumeWord"} file={"word"} />
         <Button name={"Resume (.pdf)"} downloadURL={"/downloads"} buttonClass={"resumeButton resumePDF"} file={"pdf"} />
      </div>
      </div>
      {/*
      <div className="resume">
        <Experience />
        <div className="flexContainer resumeButtons">
        <div className="buttonPadding"/>
         <Button buttonContainer={"wordButtonContainer"} name={"Resume (.docx)"} downloadURL={"/src/what/"} buttonClass={"resumeButton resumeWord"} file={"word"} />
         <Button name={"Resume (.pdf)"} downloadURL={"/downloads"} buttonClass={"resumeButton resumePDF"} file={"pdf"} />
         </div>
        </div>
      */}

      </div>
      
      
    );
  }
}