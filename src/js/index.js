// console.log(" JS is loading ")
const accordion = document.getElementsByClassName("accordion-header")

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active")
    const panel = this.nextElementSibling
    if (panel.style.display === "block") {
      panel.style.display = "none"
    } else {
      panel.style.display = "block"
    }
  })
}
