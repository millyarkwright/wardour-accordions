const variant = document.getElementsByTagName('section')
const accordionHeaders = document.getElementsByClassName('accordion-header')
const accordionElements = document.getElementsByClassName('accordion')
const toggle = document.getElementsByClassName('toggle')
let currentIndex = -1
const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', ' ', 'Tab'] 

// Remove Border
const removeBorder = (index) => {
  if (variant[0].classList.contains('bg-white')){
    accordionElements[index].classList.remove('border-blue-darker', 'border-4')
  } else {
    accordionElements[index].classList.remove('border-blue-darker', 'border', 'border-4')
  }
}

// Add Border
const addBorder = (index) => {
  if (variant[0].classList.contains('bg-white')){
    accordionElements[index].classList.add('border-blue-darker', 'border-4')

  } else {
    accordionElements[index].classList.add( 'border-blue-darker', 'border', 'border-4' )
  }
}

// Event Listener for Click/Touch
for (let i = 0; i < accordionHeaders.length; i++) {
  accordionHeaders[i].addEventListener('click', function() {
    toggleAccordion(i)
  })
}

// Event Listener for Keyboard Navigation. 
document.addEventListener('keydown', function(event) {
  if (keys.includes(event.key) && currentIndex === -1){
    currentIndex = 0
    addBorder(currentIndex)

    // Left or up arrow pressed
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    if (currentIndex === 0) {
      return
    }
    removeBorder(currentIndex)
    currentIndex--
    addBorder(currentIndex)


    // Right or down arrow pressed
  } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    if (currentIndex === accordionHeaders.length - 1) {
      return
    } 
    removeBorder(currentIndex)
    currentIndex++
    addBorder(currentIndex)

    // Enter key or space bar pressed
  } else if (event.key === 'Enter' || event.key === ' ') {
    toggleAccordion(currentIndex)
  }
})

// Show/hide panel, change toggle text

const toggleAccordion = (index) => {
  accordionHeaders[index].classList.toggle('active')
  const panel = accordionHeaders[index].nextElementSibling
  if (panel.style.display === 'block') {
    panel.style.display = 'none'
    panel.classList.add('hidden')
    // Header Styling
    accordionHeaders[index].classList.remove('bg-blue', 'text-white')
    accordionHeaders[index].classList.add('bg-white')
    toggle[index].textContent = '+'
  } else {
    panel.style.display = 'block'
    panel.classList.remove('hidden')
    // Header Styling
    accordionHeaders[index].classList.remove('bg-white')
    accordionHeaders[index].classList.add('bg-blue', 'text-white')
    toggle[index].textContent = 'x'
  }
}


