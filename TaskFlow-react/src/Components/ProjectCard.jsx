function ProjectCard({project}) {
    return(
        <article className="project-desc">
            <img src={project.img || null} alt="Project thumbnail" className="project-icon"/>

            <h3>{project.name}</h3>

            <p>
                {project.description}
            </p>

            <div className="progress-info">
                <span>Progress</span>
                <span>{project.progress}%</span>
            </div>

            <progress value={project.progress} max="100"></progress>

            <div className="team-avatars">
                <img src={project.img || null} alt="Avatar of the project owner" />
                <img src={project.img || null} alt="Avatar of a team member" />
                <img src={project.img || null} alt="Avatar of a team member" />
                <span>+{project.teamMembers}</span>
            </div>
        </article>
    )
}
export default ProjectCard