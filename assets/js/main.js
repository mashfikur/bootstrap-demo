let btn = document.getElementById("open-btn");
let menu = document.getElementById("dropmenu");
let close_it = true;
let close = true;

btn.addEventListener("click", () => {
  close_it = !close_it;
  menu.classList.add("no-margin");

  if (close_it) {
    menu.classList.remove("no-margin");
  }
});

// toggle functionality

$(document).ready(function () {
  $("#hide-btn").click(() => {
    $("#right-div").hide();
    close = !close;
    if (close) {
      $("#right-div").show();
    }
  });
});

// animating text

const mainText = new SpltType("#main--text");

gsap.from("#main--text", {
  scale: 1.5,
  duration: 0.4,
});

Gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: "#smooth--wrapper",
  content: "#smooth--content",
});
