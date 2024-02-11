
// Close Modal
document.querySelector(".fechar").addEventListener("click", ()=>{

    document.querySelector(".darkw").style.display = "none";
    document.querySelector(".modal").style.opacity = 0;
  
    setTimeout(function() {
      document.querySelector(".modal").style.display = "none";
      document.querySelector(".modal").style.opacity = 1;
    }, 300); 
});
  