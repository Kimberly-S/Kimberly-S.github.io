// navbar highlight current page

document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById("navbar");
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");

    const homeSection = document.getElementById("background");
    const aboutSection = document.getElementById("section2");
    const projectsSection = document.getElementById("section3");
    const contactSection = document.getElementById("footer");

    window.addEventListener("click", function(event) {
        if (event.target.id == "home") {
            about.classList.remove("current");
            projects.classList.remove("current");
            contact.classList.remove("current");
            home.classList.add("current");
            window.location.href = "#background";
        }

        if (event.target.id == "about") {
            about.classList.add("current");
            projects.classList.remove("current");
            contact.classList.remove("current");
            home.classList.remove("current");
            window.location.href = "#section2";
        }

        if (event.target.id == "projects") {
            about.classList.remove("current");
            projects.classList.add("current");
            contact.classList.remove("current");
            home.classList.remove("current");
            window.location.href = "#section3";
        }

        if (event.target.id == "contact") {
            about.classList.remove("current");
            projects.classList.remove("current");
            contact.classList.add("current");
            home.classList.remove("current");
            window.location.href = "#footer";
        }
    });

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
        if (scrollPosition >= aboutPosition) {
            about.classList.add("current");
            projects.classList.remove("current");
            contact.classList.remove("current");
            home.classList.remove("current");
        } 
        if (scrollPosition >= projectsPosition) {
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