const projectCard_Container = document.querySelector(".project-cards");
const projectButton = document.querySelector(".project-list");

let projects = [];
let showingAllProjects = false;

function renderProjects(cantidad) {
    projectCard_Container.innerHTML = "";

    projects.slice(0, cantidad).forEach(project => {
        const projectCard = document.createElement("article");
        projectCard.className = "project-desc";

        projectCard.innerHTML = `
            <img src="" alt="Project thumbnail" class="project-icon"/>

            <h3>${project.name}</h3>

            <p>
                ${project.description}
            </p>

            <div class="progress-info">
                <span>Progress</span>
                <span>${project.progress}%</span>
            </div>

            <progress value="${project.progress}" max="100"></progress>

            <div class="team-avatars">
                <img src="" alt="Avatar of the project owner">
                <img src="" alt="Avatar of a team member">
                <img src="" alt="Avatar of a team member">
                <span>+${project.teamMembers}</span>
            </div>
        `;

        projectCard_Container.appendChild(projectCard);
    });
}

fetch("recentProjects_data.json")
    .then(response => response.json())
    .then(data => {     
        projects = data.recentProjects;
        renderProjects(2);
    });

projectButton.addEventListener("click", () => {
    showingAllProjects = !showingAllProjects;

    renderProjects(
        showingAllProjects
            ? projects.length
            : 2
    );

    projectButton.textContent = showingAllProjects
        ? "Show Less"
        : "See Full List";
});