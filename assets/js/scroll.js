
// Scroll Page
const scrollPage = () => {
    const scrollLinks = document.querySelectorAll('.scroll');
    scrollLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetOffset = targetElement.offsetTop;
        const scrollDuration = 1000;
        const startTime = performance.now();
        
        const scrollStep = (timestamp) => {
          const elapsedTime = timestamp - startTime;
          const progress = Math.min(elapsedTime / scrollDuration, 1);
          const scrollTop = progress * (targetOffset - startPosition) + startPosition;
          window.scrollTo(0, scrollTop);
          
          if (progress < 1) {
            requestAnimationFrame(scrollStep);
          }
        };
        
        const startPosition = window.pageYOffset;
        requestAnimationFrame(scrollStep);
        
        // Este trecho de código faz o menu ser ocultado quando um link de rolagem é clicado
        // Ajuste isso conforme necessário, dependendo da estrutura do seu menu
        const menuLabel = document.querySelector('label');
        if (menuLabel) {
          menuLabel.click();
        }
        
        return false;
      });
    });
  };

  document.addEventListener("DOMContentLoaded", scrollPage);