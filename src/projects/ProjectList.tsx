import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { useState } from "react";

interface ProjectListProps {
    projects: Project[];
    onSave: (project: Project) => void;
}

function ProjectList(props: ProjectListProps){
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    const handleEdit = (project: Project) => {
        console.log(project);
        setProjectBeingEdited(project);
    }

    const onCancel = () => {
        setProjectBeingEdited({});
    }

    return(
        <div className = "row">
            {props.projects.map((project) => (
                <div key={project.id} className = "cols-sm">
                    {projectBeingEdited === project ? <ProjectForm project={project} onCancel={onCancel} onSave={props.onSave}></ProjectForm> : <ProjectCard project={project} onEdit={handleEdit}></ProjectCard>}
                </div>
            ))}
        </div>

    );

}

export default ProjectList;