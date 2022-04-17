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
  
