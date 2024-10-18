import { Project } from "./Project";

interface ProjectCardProps {
    project: Project;
}

function formatDescription(description: String){
    return description.substring(0, 60) + "...";
}

function ProjectCard(props: ProjectCardProps){
    const handleClick = (editedProject:Project) => {
        console.log(editedProject)
    };
    return (
        <div className = "card">
                        <img src={props.project.imageUrl} alt={props.project.name}></img>
                        <section className="section dark">
                            <h5 className="strong">
                                <strong>{props.project.name}</strong>
                            </h5>
                            <p>{formatDescription(props.project.description)}</p>
                            <p>Budget : {props.project.budget.toLocaleString()}</p>
                            <button className="bordered" onClick={()=>{
                                handleClick(props.project)
                            }}>
                            <span className="icon-edit"></span>
                            Edit
                        </button>
                        </section>
                        
                    </div>
    );
}

export default ProjectCard;