const mobileButton=document.querySelector("#mobile-menu");
const navItems=document.querySelector(".nav-items");
const navLinks=document.querySelectorAll(".nav-link");
/* console.log(navLinks); */
mobileButton.addEventListener('click',() => {
    navItems.classList.toggle("active");
})

navLinks.forEach((navl)=>{
    navl.addEventListener('click',()=>{
        navItems.classList.toggle("active");
    })
})