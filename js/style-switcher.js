/*========================= Toggle Style Switcher =======================*/
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
const styleSwitcher = document.querySelector(".style-switcher");

styleSwitcherToggler.addEventListener("click", (event) => {
  // Stop propagation so clicking the toggler doesn't immediately trigger the window click event
  event.stopPropagation();
  styleSwitcher.classList.toggle("open");
});

/*========================= Hide Style Switcher on Outside Click =======================*/
window.addEventListener("click", (event) => {
  // If the click is outside both the style switcher and its toggler, close the panel
  if (
    !styleSwitcher.contains(event.target) &&
    !styleSwitcherToggler.contains(event.target)
  ) {
    styleSwitcher.classList.remove("open");
  }
});

/*========================= Theme Colors =======================*/
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (style.getAttribute("title") === color) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

/*=========================Theme light and dark mode =======================*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click" , () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load" , () =>
{
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})