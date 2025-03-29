import { projects } from "./data.js";

const templateProject = document.querySelector(
  '[data-Template="Project-Card"]'
);

const prohjectsUl = document.querySelector("#projects ul");

projects.forEach((project) => {
  const card = templateProject.content.cloneNode(true);
  const image = card.querySelector("img");
  const tittle = card.querySelector("h4");
  const description = card.querySelector("p");
  const link = card.querySelector("a");
  const tech = card.querySelectorAll("p")[1];

  image.src = project.image.src;
  image.alt = project.image.alt;

  tittle.textContent = project.tittle;

  description.textContent = project.description;
  
  tech.insertAdjacentHTML("beforeend", project.tech);

  link.href = project.link;

  prohjectsUl.appendChild(card);
});
