var toggleButton = document.querySelector(".header__nav-button");
var mobileNav = document.querySelector(".header__mobile-nav");
var anyBody = document.querySelector("body");


toggleButton.addEventListener("click", function() {
  mobileNav.classList.add("open");
	setTimeout(function() {  
		mobileNav.classList.add("open");
		}, 10);
});


anyBody.addEventListener("click", function() {
  mobileNav.classList.remove("open");
	setTimeout(function() {  
		  mobileNav.classList.remove("open");
		}, 8);
});