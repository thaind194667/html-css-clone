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

$(document).ready(function () {
	mobileMenu();
});
