// New Age
const newAge = () => {
    let anoAtual = new Date().getFullYear();
    document.querySelector("#newAge").textContent = anoAtual;
  }

document.addEventListener("DOMContentLoaded", newAge);
