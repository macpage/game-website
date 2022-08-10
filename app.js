window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", reveal);

function reveal(){
    let reveals = document.querySelectorAll(".sector");
    for(let i = 0; i< reveals.length; i++){
        let windowheight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if(revealTop < windowheight - revealpoint){
            reveals[i].classList.add("active");
        } else {
            
        }
    }
}
