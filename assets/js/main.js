$(function () {
	new WOW().init();
	
	var galleryItems = [
		{
			src: 'http://lorempixel.com/620/400/',
			w: 620,
			h: 400,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 2,
			height: 1
		},
		{
			src: 'http://lorempixel.com/300/500/',
			w: 300,
			h: 500,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 2
		},
		{
			src: 'http://lorempixel.com/960/960/',
			w: 960,
			h: 960,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 2,
			height: 2
		},
		{
			src: 'http://lorempixel.com/550/550/',
			w: 550,
			h: 550,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 1
		},
		{
			src: 'http://lorempixel.com/350/350/',
			w: 350,
			h: 350,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 1
		},
		{
			src: 'http://lorempixel.com/400/600/',
			w: 400,
			h: 600,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 2
		},
		{
			src: 'http://lorempixel.com/640/480/',
			w: 640,
			h: 480,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 2,
			height: 1
		},
		{
			src: 'http://lorempixel.com/600/400/',
			w: 600,
			h: 400,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 2,
			height: 1
		},
		{
			src: 'http://lorempixel.com/300/300/',
			w: 300,
			h: 300,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 1,
			height: 1
		},
		{
			src: 'http://lorempixel.com/500/350/',
			w: 500,
			h: 350,
			title: "lorem ipsum dolor",
			desc: "Cupcake cheesecake ice cream. Jelly ice cream powder sugar plum halvah marshmallow. Fruitcake oat cake biscuit donut oat cake tootsie roll lemon drops.",
			width: 2,
			height: 1
		}
	];
	
	$('#content-nav').localScroll(800);
	$('#home').parallax("50%", 0.1);
	$('#about').parallax("50%", 0.3);
	$('#services').parallax("50%", 0.3);
	$('#gallery').parallax("50%", 0.3);
	$('#contact').parallax("50%", 0.3);
	
	// initialize gallery grid
	for (var i = 0; i < galleryItems.length; i++) {
		var width = galleryItems[i].width === 2 ? "grid-item--width2" : "";
		var height = galleryItems[i].height === 2 ? "grid-item--height2" : "";
		var template = 
			"<div class='grid-item " + width + " " + height + "' data-index='" + i + "'>" +
				"<img src='" + galleryItems[i].src + "' />" +
				"<div class='mask'>" +
					"<h4>" + galleryItems[i].title + "</h4>" +
					// "<p>" + galleryItems[i].desc + "</p>" +
				"</div>" +
			"</div>";
		
		$("#gallery .grid").append(template);
	}
	
	var galleryGrid = $("#gallery .grid").masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
	
	var doScroll = function (elem) {
		var position = 0;
		var contents = $(elem).prevAll(".content");
		$.each(contents, function(index, content) {
			position += $(content).outerHeight();
		});
		
		$(window).scrollTo(position + "px", 800);
	};
	
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

var map;
function initMap() {
	var coordinates = {lat: 14.6769066, lng: 121.0304979};
	map = new google.maps.Map(document.getElementById('map'), {
		center: coordinates,
		zoom: 16
    });
	
	var marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		title: 'I\'m here!'
	});
};