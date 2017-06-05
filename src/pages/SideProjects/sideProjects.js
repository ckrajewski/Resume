import React from "react";
import ImageContainer from "../../components/ImageContainer/imageContainer";
import DescriptionContainer from "../../components/DescriptionContainer/descriptionContainer";
import Floor from "../../components/Floor/floor";
export default class SideProjects extends React.Component {


  render() {
    return (
    	<div>
     <div className="wall">
      <div className="projects">
      	<ImageContainer insideClass="pictureInsideProject"
                      img= "/public/images/fsc.png"
                      imageWidth="290px"
                      navTo="https://www.salesforce.com/solutions/industries/financial-services/financial-services-cloud/" />

         <DescriptionContainer title="Financial Services Cloud" descriptionContainerClass="projectsDescriptionContainer">
         I helped to develop the Financial Services Cloud, a financial app that sits on top of the Salesforce platform. 
         </DescriptionContainer>
         <ImageContainer insideClass="pictureInsideProject"
                      img= "/public/images/DeleteDupes.png"
                      imageWidth="295px"
                      navTo="https://github.com/ckrajewski/DeleteDupes" />

         <DescriptionContainer title="Delete Dupes" descriptionContainerClass="projectsDescriptionContainer">
         A python based program that scans through folders to find duplicate files and deletes them. 
         </DescriptionContainer>
      </div>
      </div>
      <Floor/>
      </div>
    );
  }
}