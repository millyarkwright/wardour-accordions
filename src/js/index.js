// console.log(" JS is loading ")

const accordion = document.getElementsByClassName("accordion-header")
const toggle = document.getElementById("toggle")

// Event Listener to display additional content (article)
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active")
    const panel = this.nextElementSibling
    if (panel.style.display === "block") {
      panel.style.display = "none"
      accordion[i].classList.remove("bg-blue","text-white")
      accordion[i].classList.add("bg-white")
      toggle.textContent = "+"
    } else {
      panel.style.display = "block"
      accordion[i].classList.remove("bg-white")
      accordion[i].classList.add("bg-blue", "text-white")
      toggle.textContent = "x"

    }    
  })
}

// for (let i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", function() {
//     this.classList.toggle("active")
//     const panel = this.nextElementSibling
//     if (panel.classList.contains("open")) {
//       panel.classList.remove("open")
//       accordion[i].classList.remove("bg-blue","text-white")
//       accordion[i].classList.add("bg-white")
//       toggle.textContent = "+"
//     } else {
//       panel.classList.add("open")
//       accordion[i].classList.remove("bg-white")
//       accordion[i].classList.add("bg-blue", "text-white")
//       toggle.textContent = "x"
//     }    
//   })
// }


// 
