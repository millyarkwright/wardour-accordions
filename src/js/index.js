const accordion = document.getElementsByClassName("accordion");
const accordionHeader = document.getElementsByClassName("accordion-header");
const toggle = document.getElementsByClassName("toggle");
const variant = document.getElementsByTagName("section")
let currentIndex = -1;
let keys = [37,38,39,40,32,13]; // Left, Up, Right, Down, Space, Enter

// Event Listener for Click/Touch
for (let i = 0; i < accordionHeader.length; i++) {
  accordionHeader[i].addEventListener("click", function() {
    toggleAccordion(i);
  });
}

// Event Listener for Keyboard Navigation
document.addEventListener("keydown", function(event) {
  console.log(currentIndex)
  if (keys.includes(event.keyCode) && currentIndex === -1){
    currentIndex = 0;
    // For the White Background
    accordion[currentIndex].classList.remove("border")
    // For the Yellow Background
    accordionHeader[currentIndex].classList.add("border", "border-blue");

    // left or up arrow pressed
  } else if (event.keyCode === 37 || event.keyCode === 38) {
    // For the White Background
    accordion[currentIndex].classList.add("border")
    // For the Yellow Background
    accordionHeader[currentIndex].classList.remove("border", "border-blue");

    if (currentIndex > 0) {
      currentIndex--;
      // For the White Background
      accordion[currentIndex].classList.remove("border")
      // For the Yellow Background
      accordionHeader[currentIndex].classList.add("border", "border-blue");
    }

    // right or down arrow pressed
  } else if (event.keyCode === 39 || event.keyCode === 40) {
    // For the White Background
    accordion[currentIndex].classList.add("border")
    // For the Yellow Background
    accordionHeader[currentIndex].classList.remove("border", "border-blue");

    if (currentIndex < accordionHeader.length - 1) {
      currentIndex++;
      // For the White Background
      accordion[currentIndex].classList.remove("border")
      // For the Yellow Background
      accordionHeader[currentIndex].classList.add("border", "border-blue");
    }
  } else if (event.key === "Enter" || event.keyCode === 32) {
    toggleAccordion(currentIndex);
  }
});

// toggle active class, show/hide panel, change toggle text

function toggleAccordion(index) {
  accordionHeader[index].classList.toggle("active");
  const panel = accordionHeader[index].nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
    panel.classList.add("hidden")
    accordionHeader[index].classList.remove("bg-blue", "text-white");
    accordionHeader[index].classList.add("bg-white");
    toggle[index].textContent = "+";
    // For the White Background
    if (variant.hasClass("bg-white")){
      accordion[currentIndex].classList.remove("border")
    }
  } else {
    panel.style.display = "block";
    panel.classList.remove("hidden")
    accordionHeader[index].classList.remove("bg-white");
    accordionHeader[index].classList.add("bg-blue", "text-white");
    toggle[index].textContent = "x";
    // For the White Background
    if (variant.hasClass("bg-white")){
      accordion[currentIndex].classList.add("border")
    }
  }
}

















// ! Transition Code (Not working)

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
