// menu header
function mobileMenu() {
	const windowWidth = $(window).width();

	$('.menu-hamburger').click(function () {
		$(this).siblings('.menu-overlay').addClass('active');
		$(this).siblings('.menu-items').addClass('active');
	});

	if (windowWidth < 992) {
		$('.menu-parent i').click(function () {
			$(this)
				.toggleClass('active')
				.parent()
				.siblings('.menu-sub')
				.slideToggle();
		});
	}

	$(document).mouseup(function (e) {
		if (
			!$('.menu-items').is(e.target) &&
			$('.menu-items').has(e.target).length === 0
		) {
			$('.menu-items').siblings('.menu-overlay').removeClass('active');
			$('.menu-items').removeClass('active');
		}
	});
}

let bannerSlideIndex = 0;
let textSlideIndex = 0;
let imgSlideIndex = 0;

$(document).ready(function () {
	mobileMenu();
	autoShowSlide();

	// $(".banner").on("mouseenter", () => {
	// 	clearTimeout(autoShowSlide);
	// 	console.log("mouse enter");
	// }) 
	// $(".banner").on("mouseleave", () => {
	// 	setTimeout(autoShowSlide, 2000);
	// 	console.log("mouse leave");
	// })
	
});

function changeBannerColor() {
	let page1 = $("#page1");
	let page2 = $("#page2");
	
	page1.removeClass("inactive");
	page1.removeClass("active");
	page2.removeClass("active");
	page2.removeClass("inactive");
	console.log(bannerSlideIndex);

	if(bannerSlideIndex === 1) {
		page1.addClass("active");
		page2.addClass("inactive");
	}
	else {
		page2.addClass("active");
		page1.addClass("inactive");
	}
}

function autoShowSlide() {
	let i;
	let slides = document.getElementsByClassName("banner-image");
	for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";
	}
	bannerSlideIndex++;
	if (bannerSlideIndex > slides.length) {bannerSlideIndex = 1}
	slides[bannerSlideIndex-1].style.display = "block";
	changeBannerColor();
	setTimeout(autoShowSlide, 4000); // Change image every 2 seconds
}

function changeBannerSlide(index) {
	let slides = document.getElementsByClassName("banner-image");
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[index].style.display = "block";
	bannerSlideIndex = index + 1;
	changeBannerColor();
}

function changeTextSlide() {
	if(textSlideIndex === 2) return;
	let slides = document.getElementsByClassName("text-slider");
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	textSlideIndex++;
	if(textSlideIndex === 2) {
		document.getElementsByClassName("next-btn")[0].style.opacity = "0.5";
	}
	slides[textSlideIndex].style.display = "block";
	document.getElementById("current-text-page").innerHTML = "0" + (textSlideIndex + 1);
	// document.getElementsByClassName("current-page")[0].textContent = (textSlideIndex + 1);
}

function changeImgSlide(action) {
	if(action === "prev" && imgSlideIndex === 0) return;
	if(action === "next" && imgSlideIndex === 3) return;
	let slides = document.getElementsByClassName("slide-img");
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	console.log(action);
	if(action === "prev" ) {
		imgSlideIndex--;
		if(imgSlideIndex === 0)
			document.getElementById("prev-pic").style.opacity = "0.5";
		else 
			document.getElementById("prev-pic").style.opacity = "1";
	}
	else {
		imgSlideIndex++;
		if(imgSlideIndex === 3)
			document.getElementById("next-pic").style.opacity = "0.5";
		else 
			document.getElementById("next-pic").style.opacity = "1";
	}
	if(imgSlideIndex === 0) {
		document.getElementById("prev-pic").style.opacity = "0.5";
		document.getElementById("next-pic").style.opacity = "1";
		
	}
	else if(imgSlideIndex === 3){
		document.getElementById("next-pic").style.opacity = "0.5";
		document.getElementById("prev-pic").style.opacity = "1";
	}
	else {
		document.getElementById("next-pic").style.opacity = "1";
		document.getElementById("prev-pic").style.opacity = "1";
	}
	slides[imgSlideIndex].style.display = "block";
	document.getElementById("current-img-page").innerHTML = "0" + (imgSlideIndex + 1);
	// document.getElementsByClassName("current-page")[0].textContent = (textSlideIndex + 1);
}