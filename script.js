const homepage = document.querySelector(".home-page"); 
const projectspage = document.querySelector(".projects-page");
const resumepage = document.querySelector(".resume-page");
const contactpage = document.querySelector(".contact-page");


const homebtn = document.getElementById("homebtn");
const projectsbtn = document.getElementById("projectsbtn");
const resumebtn = document.getElementById("resumebtn"); 
const contactbtn = document.getElementById("contactbtn");

homebtn.addEventListener("click", () => switchSolve(homebtn))
projectsbtn.addEventListener("click", () => switchSolve(projectsbtn))
resumebtn.addEventListener("click", () => switchSolve(resumebtn))
contactbtn.addEventListener("click", () => switchSolve(contactbtn))

function switchSolve(curBtn){
    if(homepage.classList.contains("active")){
        homepage.classList.remove("active")
    }
    else if(projectspage.classList.contains("active")){
        projectspage.classList.remove("active")
    }
    else if(resumepage.classList.contains("active")){
        resumepage.classList.remove("active")
    }
    else if(contactpage.classList.contains("active")){
        contactpage.classList.remove("active")
    }

    if(curBtn == homebtn){
        homepage.classList.add("active")
    }
    else if(curBtn == projectsbtn){
        projectspage.classList.add("active")
    }
    else if(curBtn == resumebtn){
        resumepage.classList.add("active")
    }
    else if(curBtn == contactbtn){
        contactpage.classList.add("active")
    }
}
