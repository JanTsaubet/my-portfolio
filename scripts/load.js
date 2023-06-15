// const skills = [
//   { name: "HTML" },
//   { name: "CSS" },
//   { name: "JavaScript" },
//   { name: "GIT" },
//   { name: "React" },
//   { name: "Node" },
//   { name: "NextJS" },
//   { name: "MongoDB" },
//   { name: "Typescript" },
//   { name: "AWS" },
// ];

// const proyectos = [
//   {
//     name: "Ecommerce prodcut page",
//     skillsUsed: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
//   },
//   {
//     name: "Exploty kittens page",
//     skillsUsed: [
//       { name: "HTML" },
//       { name: "CSS" },
//       { name: "JavaScript" },
//       { name: "AWS" },
//     ],
//   },
//   {
//     name: "Web3 DAPP page",
//     skillsUsed: [{ name: "React" }, { name: "NextJS" }, { name: "Solidity" }],
//   },
// ];

let skills = [];
let proyectos = [];

const backendUrl = "http://127.0.0.1:5500";

function load() {
  const urlDb = `${backendUrl}/assets/db.json`;
  const promise = fetch(urlDb);
  promise
    .then((response) => response.json())
    .then((resultDb) => {
      db = resultDb;
      render();
    })
    .catch((err) => {
      console.log(err);
    });
}

async function loadAsync() {
  const urlDb = `${backendUrl}/assets/db.json`;
  try {
    const response = await fetch(urlDb);
    const resultDb = await response.json();
  
    db = resultDb;
  } catch (e) {
    console.log("loadAsync", e);
  }
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  loadAsync();
})
