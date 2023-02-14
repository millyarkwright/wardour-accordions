// // console.log(" JS is loading ")

// const accordion = document.getElementsByClassName("accordion-header")
// const toggle = document.getElementById("toggle")
// let currentIndex = 0

// // Prevent page moving around when using the arrow function 
// window.addEventListener('keydown', function(e) {
//   if ([32, 37, 38, 39, 40].indexOf(e) > -1) {
//     e.preventDefault()
//   }
// }, false)

// // Event Listener to display additional content (article)
// for (let i = 0; i < accordion.length; i++) {
//   // Listen for Click
//   accordion[i].addEventListener("click", function() {
//     this.classList.toggle("active")
//     const panel = this.nextElementSibling
//     if (panel.style.display === "block") {
//       panel.style.display = "none"
//       accordion[i].classList.remove("bg-blue","text-white")
//       accordion[i].classList.add("bg-white")
//       toggle.textContent = "+"
//     } else {
//       panel.style.display = "block"
//       accordion[i].classList.remove("bg-white")
//       accordion[i].classList.add("bg-blue", "text-white")
//       toggle.textContent = "x"

//     }    
//   })


//   // Navigate the Accordions by keyboard
//   // document.addEventListener("keydown", function(event) {
//   //   if (event.key === "Up" || event.key === "Left") {

//   //   }
//   // })

//   // Listen for keydown
//   accordion[i].addEventListener("keydown", function(e) {
//     if (e.key === "Enter") {
//       this.classList.toggle("active")
//       const panel = this.nextElementSibling
//       if (panel.style.display === "block") {
//         panel.style.display = "none"
//         accordion[i].classList.remove("bg-blue","text-white")
//         accordion[i].classList.add("bg-white")
//         toggle.textContent = "+"
//       } else {
//         panel.style.display = "block"
//         accordion[i].classList.remove("bg-white")
//         accordion[i].classList.add("bg-blue", "text-white")
//         toggle.textContent = "x"
//       }    
//     }
//   })
// }

const accordion = document.getElementsByClassName("accordion-header");
const toggle = document.getElementById("toggle");
let currentIndex = -1;
let keys = [37,38,39,40,32,13] // Left, Up, Right, Down, Space, Enter

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    // toggle active class, show/hide panel, change toggle text
    toggleAccordion(i);
  });
  // accordion[i].addEventListener("keydown", function(event) {
  //   if (event.keyCode === 13) {
  //     toggleAccordion(i);
  //   }
  // });
}

document.addEventListener("keydown", function(event) {
  console.log(currentIndex)
  if (keys.includes(event.keyCode) && currentIndex === -1){
    currentIndex = 0;
    accordion[currentIndex].classList.add("border-8");
  } else if (event.keyCode === 37 || event.keyCode === 38) {
    // left or up arrow pressed
    accordion[currentIndex].classList.remove("border-8");
    if (currentIndex > 0) {
      currentIndex--;
      accordion[currentIndex].classList.add("border-8");
    }
  } else if (event.keyCode === 39 || event.keyCode === 40) {
    // right or down arrow pressed
    accordion[currentIndex].classList.remove("border-8");
    if (currentIndex < accordion.length - 1) {
      currentIndex++;
      accordion[currentIndex].classList.add("border-8");
    }
  } else if (event.keyCode === 13) {
    toggleAccordion(currentIndex);
  }
});

function toggleAccordion(index) {
  accordion[index].classList.toggle("active");
  const panel = accordion[index].nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
    accordion[index].classList.remove("bg-blue", "text-white");
    accordion[index].classList.add("bg-white");
    toggle.textContent = "+";
  } else {
    panel.style.display = "block";
    accordion[index].classList.remove("bg-white");
    accordion[index].classList.add("bg-blue", "text-white");
    toggle.textContent = "x";
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
