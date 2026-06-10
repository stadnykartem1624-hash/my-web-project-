console.log("JS connected!");

// ???????
const myProjects = [
  { id: 1, title: "????-???????", tech: "HTML/CSS" },
  { id: 2, title: "???????", tech: "JavaScript" }
];

const list = document.querySelector("#projects-list");

myProjects.forEach(project => {
  const li = document.createElement("li");
  li.textContent = `${project.title} (${project.tech})`;
  list.appendChild(li);
});

// ????
const themeBtn = document.querySelector("#theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// ???????
const modal = document.querySelector("#modal");
const openBtn = document.querySelector("#open-modal");
const closeBtn = document.querySelector("#close-modal");

openBtn.addEventListener("click", () => {
  modal.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modal.classList.remove("is-open");
  }
});

// ?????
const form = document.querySelector("#contact-form");
const input = document.querySelector("#user-name");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.trim().length < 2) {
    alert("??'? ??? ???? ??????? 2 ???????");
  } else {
    alert("????? ???????????!");
    input.value = "";
  }
});