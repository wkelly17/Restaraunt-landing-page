const listItems = document.querySelectorAll(
  ".top-nav-header ul li:not(:first-child)"
);

const dropdown = document.querySelector(".down-arrow");
dropdown.addEventListener("click", openNav);

function openNav(event) {
  console.log("open fired");
  listItems.forEach(function (item) {
    item.classList.toggle("visible");
  });
}


document.body.addEventListener("click", closeNav);

function closeNav(event) {
  // console.log('close fired');
  if (event.target.classList.contains("down-arrow")) {
    return;
  } else {
    listItems.forEach((item) => item.classList.remove("visible"));
  }
}

/* -------------- SLICK CAROUSEL -------------- */

$(document).ready(function () {
  $(".hero-image-carousel").slick({
    prevArrow: $(".left-bracket"),
    nextArrow: $(".right-bracket"),
  });
});



// ? Why can't I access the slick-current img in the DOM to get the src attribute to set it to the background by adding an additional event listener to the buttons?
//@ DONE = used slicks event handler mechanism below (per Bryce's help).

// const photos = document.querySelectorAll(".carousel-photo img");
// console.log(photos);
// let heroSection = $(".hero-section");
// console.log(heroSection);
let current = $(".slick-current");
console.log(current);

let nextButton = $(".right-bracket");
let prevButton = $(".left-bracket");


$('.hero-image-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
	let newSrc = $("div[data-slick-index='" + nextSlide + "'] img").attr("src") 
	console.log(newSrc)
	 $(".hero-background").attr("src", newSrc);
  });

//  function changeBackground() {
// let current = $(".slick-active img")
// console.log(current)
// let src = current.src;

//  }

//  changeBackground()
