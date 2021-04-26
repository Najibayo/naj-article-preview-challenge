const btn = document.querySelector("button");
const socials = document.querySelector(".socials");

// Event listener and function
btn.addEventListener(
    'click', ()=> {
        if (socials.style.display ==="none") {
            socials.style.display ="block";}
        else {socials.style.display="none";}
    }
)