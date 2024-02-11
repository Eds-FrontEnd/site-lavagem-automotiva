
// Função para animar o título
const animateTitle = () => {
    let originalTitle = document.title; 
    let newTitle = "Estética Automotiva"; 
    let timeout = 3000; 
  
    const toggleTitle = () => {
    document.title = (document.title == originalTitle) ? newTitle : originalTitle;
    }
  
    let interval = setInterval(toggleTitle, timeout);
  
    setTimeout(() => {
    clearInterval(interval); 
    document.title = originalTitle; 
    }, timeout * 100); 
  }
  
  document.addEventListener('DOMContentLoaded', animateTitle);
  