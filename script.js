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

const themeicon = document.getElementById("theme-icon")
const theme = document.querySelector(".theme")
const changethemebtn = document.querySelector(".change-theme")
changethemebtn.addEventListener("click", ()=> changeTheme())
function changeTheme(){
    if(theme.classList.contains("dark-mode")){
        theme.classList.remove("dark-mode")
    }
    else{
        theme.classList.add("dark-mode");
    }
    let curSrc = themeicon.getAttribute("src")
    if(curSrc === "Image/moon.png"){
        themeicon.src = "Image/sun.png"
    }
    else{
        themeicon.src = "Image/moon.png"
    }
}
