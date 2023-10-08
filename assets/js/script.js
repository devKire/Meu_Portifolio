let lastScrollTop = 0;
const header = document.querySelector('.e-zine-header');

window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    // O usuário está rolando para baixo, oculte o header
    header.style.transition = 'top 0.3s ease';
    header.style.top = '-200px';
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

// barra lateral esqueda

function toggleSidebar() {
  var sidebar = document.querySelector(".sidebar");
  var sidebarToggleButton = document.querySelector(".sidebar-toggle-button");

  if (sidebar.style.left === "0px" || sidebar.style.left === "") {
      sidebar.style.left = "-100px"; // Esconder a barra lateral
      sidebarToggleButton.classList.remove("clicked"); // Remover a classe clicked
  } else {
      sidebar.style.left = "0px"; // Mostrar a barra lateral
      sidebarToggleButton.classList.add("clicked"); // Adicionar a classe clicked
  }
}


//caixa flutuante temporaria
var floatingBox = document.getElementById("floating-box");
floatingBox.style.display = "block";

// Esconda a caixa flutuante após alguns segundos
setTimeout(function() {
  floatingBox.style.display = "none";
}, 5000); // 5000 milissegundos (5 segundos)
