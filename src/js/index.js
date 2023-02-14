// const accordionElements = document.getElementsByClassName("accordion");
const accordionHeaders = document.getElementsByClassName("accordion-header");
const toggle = document.getElementsByClassName("toggle");
// const variant = document.getElementsByTagName("section");
let currentIndex = -1;
const keys = [37,38,39,40,32,13]; // Left, Up, Right, Down, Space, Enter


// Remove Border
const removeBorder = (index) => {
  accordionHeaders[index].classList.remove("border");
};

// Add Border
const addBorder = (index) => {
  accordionHeaders[index].classList.add("border");
};


// Event Listener for Click/Touch
for (let i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener("click", function() {
    toggleAccordion(i);
  });
}

// Event Listener for Keyboard Navigation. 
document.addEventListener("keydown", function(event) {
  if (keys.includes(event.keyCode) && currentIndex === -1){
    currentIndex = 0;
    addBorder(currentIndex)

    // ! Left or up arrow pressed
  } else if (event.keyCode === 37 || event.keyCode === 38) {
    removeBorder(currentIndex)
    if (currentIndex > 0) {
      currentIndex--;
      addBorder(currentIndex)
    }

    // ! Right or down arrow pressed
  } else if (event.keyCode === 39 || event.keyCode === 40) {
    removeBorder(currentIndex)

    if (currentIndex < accordionHeaders.length - 1) {
      currentIndex++;
      addBorder(currentIndex)
    }

    // ! Enter key or space bar pressed
  } else if (event.key === "Enter" || event.keyCode === 32) {
    removeBorder(currentIndex)
    toggleAccordion(currentIndex);
  }
});

// Toggle active class, show/hide panel, change toggle text

const toggleAccordion = (index) => {
  accordionHeaders[index].classList.toggle("active");
  const panel = accordionHeaders[index].nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
    panel.classList.add("hidden")
    // Header Styling
    accordionHeaders[index].classList.remove("bg-blue", "text-white");
    accordionHeaders[index].classList.add("bg-white");
    toggle[index].textContent = "+";
  } else {
    panel.style.display = "block";
    panel.classList.remove("hidden");
    // Header Styling
    accordionHeaders[index].classList.remove("bg-white");
    accordionHeaders[index].classList.add("bg-blue", "text-white");
    toggle[index].textContent = "x";
  }
}


