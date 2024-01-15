import "./style.css"

document.addEventListener("DOMContentLoaded", () => {
  const captures = document.querySelectorAll(".glow-capture")

  captures.forEach((capture) => {
    // Clone a child element. For example, we can clone the first child.
    const clonedChild = capture.children[0].cloneNode(true)
    const overlay = capture.querySelector(".glow-overlay")

    // Append the cloned child to the overlay.
    overlay.appendChild(clonedChild)

    capture.addEventListener("mousemove", (event) => {
      const x = event.pageX - capture.offsetLeft
      const y = event.pageY - capture.offsetTop

      overlay.style.setProperty("--glow-x", `${x}px`)
      overlay.style.setProperty("--glow-y", `${y}px`)
      overlay.style.setProperty("--glow-opacity", "1")
    })

    // Add mouseleave event to remove the glow effect
    capture.addEventListener("mouseleave", () => {
      overlay.style.setProperty("--glow-opacity", "0")
    })
  })
})
