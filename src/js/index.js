// console.log(" JS is loading ")
const accordion = document.getElementsByClassName("accordion")

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active")
    const panel = this.nextElementSibling
    if (panel.style.maxHeight) {
      panel.styvle.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px"
    }
  })
}
