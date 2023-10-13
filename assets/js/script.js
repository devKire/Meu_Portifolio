let lastScrollTop = 0;
const header = document.querySelector('.e-zine-header');

window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY;
  var sidebarToggleButton = document.querySelector(".sidebar-toggle-button");
  var sidebar = document.querySelector(".sidebar");

  if (currentScrollTop > lastScrollTop) {
    // O usuário está rolando para baixo, oculte o header, o slidebar e feche o botão
    header.style.transition = 'top 0.3s ease';
    header.style.top = '-200px';
    if (sidebar.style.right === "0px" || sidebar.style.right === "") {
      sidebar.style.right = "-100px"; // Esconder a barra lateral
      sidebarToggleButton.classList.remove("clicked"); // Remover a classe clicked
    }
  } else {
    // O usuário está rolando para cima, mostre o header
    header.style.transition = 'top 0.3s ease';
    header.style.top = '0';
  }

  lastScrollTop = currentScrollTop;
});

// barra lateral direita:

// function toggleSidebar() {
//   var sidebar = document.querySelector(".sidebar");
//   var sidebarToggleButton = document.querySelector(".sidebar-toggle-button");

//   if (sidebar.style.right === "0px" || sidebar.style.right === "") {
//       sidebar.style.right = "-200px"; // Esconder a barra lateral
//       sidebarToggleButton.classList.remove("clicked"); // Remover a classe clicked
//   } else {
//       sidebar.style.right = "0px"; // Mostrar a barra lateral
//       sidebarToggleButton.classList.add("clicked"); // Adicionar a classe clicked
//   }
// }

// barra lateral direita

function toggleSidebar() {
  var sidebar = document.querySelector(".sidebar");
  var header = document.querySelector(".e-zine-header");
  var sidebarToggleButton = document.querySelector(".sidebar-toggle-button");

  if (sidebar.style.right === "0px" || sidebar.style.right === "") {
      sidebar.style.right = "-100px"; // Esconder a barra lateral
      if (header){
        header.style.transition = 'top 0.3s ease';
        header.style.top = '-200px';
      }
      sidebarToggleButton.classList.remove("clicked"); // Remover a classe clicked
  } else {
      sidebar.style.right = "0px"; // Mostrar a barra lateral
      if (header){
        header.style.transition = 'top 0.3s ease';
        header.style.top = '0';
      }
      
      sidebarToggleButton.classList.add("clicked"); // Adicionar a classe clicked
  }
}