//Cards - Services
const cardsImage = document.querySelectorAll(".card_img");

cardsImage.forEach((item, index)=>{

  item.setAttribute("data-key-card", index);

  item.addEventListener("click", (e)=>{
    let key = e.target.closest(".card_img").getAttribute("data-key-card");
    
    switch(key){
      
      case "0":
        document.querySelector(".darkw").style.display = "block";
        document.querySelector(".modal").style.display = "block";
        document.querySelector("body").style.overflow = "hidden"; 
        document.querySelector("#image-modal").setAttribute("src", "assets/img/modal-farol.png");
      break;

      case "1":
        document.querySelector(".darkw").style.display = "block";
        document.querySelector(".modal").style.display = "block";
        document.querySelector("body").style.overflow = "hidden"; 
        document.querySelector("#image-modal").setAttribute("src", "assets/img/modal-insumos.png");
       break;

      case "2":
        document.querySelector(".darkw").style.display = "block";
        document.querySelector(".modal").style.display = "block";
        document.querySelector("body").style.overflow = "hidden"; 
        document.querySelector("#image-modal").setAttribute("src", "assets/img/modal-espelhamento.png");
       break;

      case "3":
        document.querySelector(".darkw").style.display = "block";
        document.querySelector(".modal").style.display = "block";
        document.querySelector("body").style.overflow = "hidden"; 
        document.querySelector("#image-modal").setAttribute("src", "assets/img/modal-bancos.png");
       break;

      case "4":
        document.querySelector(".darkw").style.display = "block";
        document.querySelector(".modal").style.display = "block";
        document.querySelector("body").style.overflow = "hidden"; 
        document.querySelector("#image-modal").setAttribute("src", "assets/img/modal-ar.png");
       break;

      case "5":
        document.querySelector(".darkw").style.display = "block";
        document.querySelector(".modal").style.display = "block";
        document.querySelector("body").style.overflow = "hidden"; 
        document.querySelector("#image-modal").setAttribute("src", "assets/img/modal-motor.png");
       break;
    }
  });
});













