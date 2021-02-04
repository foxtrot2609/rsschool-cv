const panels = document.querySelectorAll(".panel");

function slideOpen() {   
    const checkOpen = this.className.includes("open");
    panels.forEach((panel) => panel.classList.remove("open"));
    checkOpen ? this.classList.remove("open") : this.classList.add("open");
};

panels.forEach((panel) => panel.addEventListener("click", slideOpen));
