import React from "react";
import ImageContainer from "../../components/ImageContainer/imageContainer";
import DescriptionContainer from "../../components/DescriptionContainer/descriptionContainer";
import Floor from "../../components/Floor/floor";
export default class SideProjects extends React.Component {


  render() {
    const widthContainer = {width:"33%", minWidth:"340px"};
    return (
   <div>
     <div className="wall">
      <div className="projects">
      <div style={widthContainer}>
      	<ImageContainer insideClass="pictureInsideProject"
                      img= "/public/images/fsc.png"
                      imageWidth="290px"
                      navTo="https://www.salesforce.com/solutions/industries/financial-services/financial-services-cloud/" />

         <DescriptionContainer title="Financial Services Cloud" descriptionContainerClass="projectsDescriptionContainer">
         I helped to develop the Financial Services Cloud, a financial app that sits on top of the Salesforce platform. 
         <br/>
         To learn more, click the picture!
         </DescriptionContainer>
         </div>
         <div style={widthContainer}>
        <ImageContainer insideClass="pictureInsideProject"
                      img= "/public/images/OpenTransit.png"
                      imageWidth="290px"
                      navTo="http://openTransit.city" />
          <DescriptionContainer title="Open Transit" descriptionContainerClass="projectsDescriptionContainer">
         I am currently working on open transit. A project devoted to improving and getting data about the San Francisco Muni public transit system.
         <br/>
         To learn more, click the picture!
         </DescriptionContainer>
         </div>
         <div style={widthContainer}>
         <ImageContainer insideClass="pictureInsideProject"
                      img= "/public/images/DeleteDupes.png"
                      imageWidth="295px"
                      navTo="https://github.com/ckrajewski/DeleteDupes" />

         <DescriptionContainer title="Delete Dupes" descriptionContainerClass="projectsDescriptionContainer">
         A python based program that scans through folders to find duplicate files and deletes them. 
         <br/>
         To learn more, click the picture!
         </DescriptionContainer>
         </div>
      </div>
      </div>
      <Floor/>
      </div>
    );
  }
}