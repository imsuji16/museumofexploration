const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.fontSize = "17px";
    });
});

links.forEach(link => {
    link.addEventListener("mouseout", () => {
        link.style.fontSize = "16px";
    });
});