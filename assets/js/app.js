$(function() {


	let nav = $("#nav");
	let navToggle = $("#navToggle");


	/*Smooth scroll*/
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let $this = $(this),
			blockID = $this.data('scroll'),
			blockOffset = $(blockID).offset().top;

			$("#nav a").removeClass("active");
			$this.addClass("active");

			$("#nav").removeClass("active");
			$("#navToggle").removeClass("active");

		$("html, body").animate ({
			scrollTop: blockOffset - 60
		}, 500);

	});


	/*Menu nav toggle*/
	$("#navToggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	})


})
