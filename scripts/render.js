const skillsDiv = document.getElementById("skills_container");
const proyectosDiv = document.getElementById("proyectos_container");

function createProjectTemplate(_project) {
  let projectTemplate = "";

  projectTemplate += `<div class="full-height d-flex-p-b">
                <a class="btona"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                <div class="section-project">
                    <h3>${_project.name}</h3>
                    `;

  _project.skillsUsed.forEach((_skill) => {
    projectTemplate += `<button class="btn-common">${_skill.name}</button>
            `;
  });

  projectTemplate += `
            </div>
        </div>`;
  return projectTemplate;
}

function render() {
  //_________________________________________________________________________________ skills
  skillsDiv.innerHTML = "";
  db.skills.forEach((_skill) => {
    skillsDiv.innerHTML += `<button class="btn-common">${_skill.name}</button>`;
  });

  //_________________________________________________________________________________ proyectos
  //_____________________________________________________________________ first proyecto
  let templateProyectos = "";
  templateProyectos = "";
  templateProyectos +=
    '<div class="img-one d-flex-p-b">' +
    '<a class="btona"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>' +
    '<div class="section-project">' +
    `<h3>${db.proyectos[0].name}</h3>`;
  db.proyectos[0].skillsUsed.forEach((_skill) => {
    templateProyectos += `<button class="btn-common">${_skill.name}</button>
            `;
  });
  templateProyectos += `
            </div>
        </div>`;

  //_____________________________________________________________________ proyectyos secondary
  templateProyectos += '<div class="half-width">';
  for (let p in db.proyectos) {
    if (p == 0) continue;
    templateProyectos += createProjectTemplate(db.proyectos[p]);
  }
  templateProyectos += "</div>";

  proyectosDiv.innerHTML = templateProyectos;
}
