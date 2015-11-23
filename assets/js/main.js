$(function () {
	var galleryGrid = null;
	
	var galleryItems = [
		{
			src: '../assets/img/g/1.jpg',
			tnSrc: '../assets/img/g/tn/tn1.jpg',
			w: 620,
			h: 400,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 2,
			height: 1
		},
		{
			src: '../assets/img/g/2.jpg',
			tnSrc: '../assets/img/g/tn/tn2.jpg',
			w: 600,
			h: 934,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 2
		},
		{
			src: '../assets/img/g/3.jpg',
			tnSrc: '../assets/img/g/tn/tn3.jpg',
			w: 600,
			h: 600,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 1	
		},
		{
			src: '../assets/img/g/4.jpg',
			tnSrc: '../assets/img/g/tn/tn4.jpg',
			w: 600,
			h: 900,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 2
		},
		{
			src: '../assets/img/g/5.jpg',
			tnSrc: '../assets/img/g/tn/tn5.jpg',
			w: 600,
			h: 900,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 2
		},
		{
			src: '../assets/img/g/6.jpg',
			tnSrc: '../assets/img/g/tn/tn6.jpg',
			w: 600,
			h: 600,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 2,
			height: 2
		},
		{
			src: '../assets/img/g/7.jpg',
			tnSrc: '../assets/img/g/tn/tn7.jpg',
			w: 600,
			h: 900,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 2
		},
		{
			src: '../assets/img/g/8.jpg',
			tnSrc: '../assets/img/g/tn/tn8.jpg',
			w: 600,
			h: 900,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 2
		},
		{
			src: '../assets/img/g/9.jpg',
			tnSrc: '../assets/img/g/tn/tn9.jpg',
			w: 600,
			h: 900,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 2,
			height: 1
		},
		{
			src: '../assets/img/g/10.jpg',
			tnSrc: '../assets/img/g/tn/tn10.jpg',
			w: 600,
			h: 600,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 1
		},
		{
			src: '../assets/img/g/11.jpg',
			tnSrc: '../assets/img/g/tn/tn11.jpg',
			w: 500,
			h: 500,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 2,
			height: 2
		},
		{
			src: '../assets/img/g/12.jpg',
			tnSrc: '../assets/img/g/tn/tn12.jpg',
			w: 600,
			h: 400,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 2,
			height: 1
		},
		{
			src: '../assets/img/g/13.jpg',
			tnSrc: '../assets/img/g/tn/tn13.jpg',
			w: 600,
			h: 900,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 2
		},
		{
			src: '../assets/img/g/14.jpg',
			tnSrc: '../assets/img/g/tn/tn14.jpg',
			w: 600,
			h: 400,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 2,
			height: 1
		},
		{
			src: '../assets/img/g/15.jpg',
			tnSrc: '../assets/img/g/tn/tn15.jpg',
			w: 600,
			h: 900,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 2
		},
		{
			src: '../assets/img/g/16.jpg',
			tnSrc: '../assets/img/g/tn/tn16.jpg',
			w: 600,
			h: 900,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 2
		},
		{
			src: '../assets/img/g/17.jpg',
			tnSrc: '../assets/img/g/tn/tn17.jpg',
			w: 600,
			h: 900,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 2
		},
		{
			src: '../assets/img/g/18.jpg',
			tnSrc: '../assets/img/g/tn/tn18.jpg',
			w: 500,
			h: 500,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 1
		}
	];
	
	var setupGrid = function () {
		// initialize gallery grid
		for (var i = 0; i < galleryItems.length; i++) {
			var width = galleryItems[i].width === 2 ? "grid-item--width2" : "";
			var height = galleryItems[i].height === 2 ? "grid-item--height2" : "";
			var template = 
				"<div class='grid-item wow fadeInUp " + width + " " + height + "' data-index='" + i + "'>" +
					"<img src='" + galleryItems[i].tnSrc + "' />" +
					"<div class='mask'>" +
						"<h4>" + galleryItems[i].title + "</h4>" +
						// "<p>" + galleryItems[i].desc + "</p>" +
					"</div>" +
				"</div>";
			
			$("#gallery .grid").append(template);
		}
		
		galleryGrid = $("#gallery .grid").masonry({
			itemSelector: '.grid-item',
			columnWidth: '.grid-sizer',
			percentPosition: true
		});
	};
	
	var setupParallax = function () {
		$('#home').parallax("50%", 0.1);
		$('#about').parallax("50%", 0.3);
		$('#services').parallax("50%", 0.3);
		$('#gallery').parallax("50%", 0.3);
		$('#contact').parallax("50%", 0.3);
	};
	
	var doScroll = function (elem) {
		var position = 0;
		var contents = $(elem).prevAll(".content");
		$.each(contents, function(index, content) {
			position += $(content).outerHeight();
		});
		
		$(window).scrollTo(position + "px", 800);
	};
		
	var initialize = (function () {
		new WOW().init();
		setupGrid();
		$('#content-nav').localScroll(800);
		
		var width = $(this).outerWidth();
		if (width >= 1024) {
			setupParallax();
		}
	})();
		
	$("#nav-about").on("click", function (ev) {
		ev.preventDefault();
		doScroll("#about");
	});
	
	$("#nav-gallery").on("click", function (ev) {
		ev.preventDefault();
		doScroll("#gallery");
	});
	
	$("#nav-services").on("click", function (ev) {
		ev.preventDefault();
		doScroll("#services");
	});
	
	$("#nav-contact").on("click", function (ev) {
		ev.preventDefault();
		doScroll("#contact");
	});
	
	$("#gallery").on("click", ".grid-item", function (ev) {
		var pswpElement = document.querySelectorAll('.pswp')[0];
		var index = $(this).data("index");
		var options = {
			index: index
		};
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, galleryItems, options);
		gallery.init();
	});
});

// var map;
// function initMap() {
	// var coordinates = {lat: 14.6769066, lng: 121.0304979};
	// map = new google.maps.Map(document.getElementById('map'), {
		// center: coordinates,
		// zoom: 16
    // });
	
	// var marker = new google.maps.Marker({
		// position: coordinates,
		// map: map,
		// title: 'I\'m here!'
	// });
// };