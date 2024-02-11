
// No navegador do usuário e verifica*/
if (!localStorage.nossoCook) {
    document.querySelector(".box-cook").classList.remove("hide");
  }
  const acceptCookies = () => {
    document.querySelector(".box-cook").classList.add("hide");
    localStorage.setItem("nossoCook", "accept");
  };
  
  const recusarCookies = () => {
    document.querySelector(".box-cook").classList.add("hide");
  }
  
  const btnRecusar = document.querySelector("#recusar");
  btnRecusar.addEventListener('click', recusarCookies);
  
  const btnCookies = document.querySelector(".btn-cook");
  btnCookies.addEventListener("click", acceptCookies);