  // Enable the DevTools API
  document.documentElement.setAttribute("devtools", "true")
  

  // Add a CSS class to the element to apply the hover effect
  function applyHoverEffect(element) {
    element.classList.add("devtools-hover")
  }

  // Remove the CSS class from the element to remove the hover effect
  function removeHoverEffect(element) {
    element.classList.remove("devtools-hover")
  }

  // Function to handle the mouseover event and apply hover effect
  function handleElementMouseOver(event) {
    const target = event.target
    applyHoverEffect(target)
  }

  // Function to handle the mouseout event and remove hover effect
  function handleElementMouseOut(event) {
    const target = event.target
    removeHoverEffect(target)
  }

  // Function to handle the click event and stop element selection
  function handleElementClick(event) {
    console.log(event.target)
    event.preventDefault()
    //stopElementSelection()
  }

  // Add mouseover and mouseout event listeners to all elements
  const elements = document.querySelectorAll("*")

  // Function to stop capturing events and clean up
  export function stopElementSelection() {
    // Disable the DevTools API
    document.documentElement.removeAttribute("devtools")

    // Remove mouseover, mouseout, and click event listeners from all elements
    elements.forEach((element) => {
      element.removeEventListener("mouseover", handleElementMouseOver)
      element.removeEventListener("mouseout", handleElementMouseOut)
      element.removeEventListener("click", handleElementClick)
      removeHoverEffect(element)
    })
    console.log("ended.....>>>>>")
  }

  // Define the CSS styles for the hover effect
  const styleElement = document.createElement("style")
  styleElement.textContent = `
  .devtools-hover {
    /* Add your desired hover styles here */
    /* For example: */
    box-shadow: 0px 0px 21px 15px rgba(172, 222, 229, 0.65);
    border: 1px solid rgba(232, 242, 53, 0.65);
    /* ... */
  }
`
document.head.appendChild(styleElement)

export function start () {  
    console.log("WORKING INSPECT")
    elements.forEach((element) => {
        element.addEventListener("mouseover", handleElementMouseOver)
        element.addEventListener("mouseout", handleElementMouseOut)
        element.addEventListener("click", handleElementClick)
        })
}

    elements.forEach((element) => {
    element.addEventListener("mouseover", handleElementMouseOver)
    element.addEventListener("mouseout", handleElementMouseOut)
    element.addEventListener("click", handleElementClick)
    })
console.log("End of EXECUTION")
    


