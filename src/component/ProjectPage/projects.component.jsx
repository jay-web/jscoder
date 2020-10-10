import React from "react";
import ProjectCard from "../projectCard/projectCard";
import "./projects.styles.css";
import Header from "../header/header.component";
import Footer from "../footer/footer.component";

class Projectpage extends React.Component {
    render(){
    return (
        <React.Fragment>
        <Header ></Header>
        <div class="projectContainer">
       <ProjectCard title="Fashion Look"></ProjectCard>
       <ProjectCard title="Fashion Look"></ProjectCard>
       <ProjectCard title="Fashion Look"></ProjectCard>
       <ProjectCard title="Fashion Look"></ProjectCard>
       <ProjectCard title="Fashion Look"></ProjectCard>
       <ProjectCard title="Fashion Look"></ProjectCard>
       <ProjectCard title="Fashion Look"></ProjectCard>
       <ProjectCard title="Fashion Look"></ProjectCard>
       </div>
       <Footer></Footer>
       </React.Fragment>
    ) }
}

export default Projectpage;