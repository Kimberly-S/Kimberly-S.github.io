// navbar highlight current page
// TODO: remove/refine repeated code sections
document.addEventListener('DOMContentLoaded', function() {
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");

    const aboutSection = document.getElementById("section2");
    const projectsSection = document.getElementById("section3");


    window.addEventListener("scroll", function(event) {
        let scrollPosition = document.body.scrollTop;

        let aboutPosition = aboutSection.offsetTop;
        let projectsPosition = projectsSection.offsetTop;
 
        if (scrollPosition >= 0) {
            about.classList.remove("current");
            projects.classList.remove("current");
            contact.classList.remove("current");
            home.classList.add("current");
        }
        if (scrollPosition >= aboutPosition - 100) {
            about.classList.add("current");
            projects.classList.remove("current");
            contact.classList.remove("current");
            home.classList.remove("current");
        } 
        if (scrollPosition >= projectsPosition - 100) {
            about.classList.remove("current");
            projects.classList.add("current");
            contact.classList.remove("current");
            home.classList.remove("current");
        }
        if((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            about.classList.remove("current");
            projects.classList.remove("current");
            contact.classList.add("current");
            home.classList.remove("current");
        }
    });
});