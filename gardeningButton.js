// XIV gardening project WIP) and navigation
function gardeningButton() {
    document.getElementById("gardeningProject").style.display = "block";
    document.getElementById("gardeningProject").style.opacity = 1;
    document.body.style.position = 'fixed'; // prevent scrollbar / scrolling
}

function closeButton() {
    document.getElementById("gardeningProject").style.display = "none";
    document.getElementById("gardeningProject").style.opacity = 0;
    document.body.style.position = '';
}

// buttons
function gridButton(id) {
    const button = document.getElementById(id);
    button.classList.toggle("grid-coloured");
}

function resetButton() {
    let buttons = [1, 2, 3, 4, 6, 7, 8, 9]
    for (let i = 0; i < buttons.length; i++) {
        document.getElementById(buttons[i]).classList.remove("grid-coloured");
    }
}
  
