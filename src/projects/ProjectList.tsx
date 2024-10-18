import { Project } from "./Project";
import ProjectCard from "./ProjectCard";

interface ProjectListProps {
    projects: Project[];
}

function ProjectList(props: ProjectListProps){
    return(
        <div className = "row">
            {props.projects.map((project) => (
                <div key={project.id} className = "cols-sm">
                    <ProjectCard project={project}></ProjectCard>
                </div>
            ))}
        </div>

    );

}

export default ProjectList;