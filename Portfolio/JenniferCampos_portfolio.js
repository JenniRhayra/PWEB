document.addEventListener("DOMContentLoaded", function(){
    const btnMobile = document.querySelector(".btn-mobile");
    const menuMobile = document.querySelector(".menu-mobile");
    
    btnMobile.addEventListener("click", function(){
        menuMobile.classList.toggle("show");
    });
});
