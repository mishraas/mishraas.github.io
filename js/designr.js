$(document).ready(function() {

	/*============================================
	Navigation Functions
	==============================================*/
	if ($(window).scrollTop()===0){
		$('#main-nav').removeClass('scrolled');
	}
	else{
		$('#main-nav').addClass('scrolled');    
	}

	$(window).scroll(function(){
		if ($(window).scrollTop()===0){
			$('#main-nav').removeClass('scrolled');
		}
		else{
			$('#main-nav').addClass('scrolled');    
		}
	});

	/*============================================
	ScrollTo Links
	==============================================*/
	$('a.scrollto').click(function(e){
		$('html,body').scrollTo(this.hash, this.hash, {gap:{y:-80}});
		e.preventDefault();

		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});

	/*============================================
	Header Functions
	==============================================*/
	$('.jumbotron').height($(window).height()+50);
	$('.message-box').css({'marginTop':$(window).height()*0.4});

	$('.home-slider').flexslider({
		animation: "slide",
		directionNav: false,
		controlNav: false,
		direction: "vertical",
		slideshowSpeed: 2500,
		animationSpeed: 500,
		smoothHeight: false
	});

	/*============================================
	Skills Functions
	==============================================*/
	var aboutColor = $('#about').css('backgroundColor');

	$('#skills').waypoint(function(){
		$('.chart').each(function(){
		$(this).easyPieChart({
				size:170,
				animate: 2000,
				lineCap:'butt',
				scaleColor: false,
				barColor: aboutColor,
				lineWidth: 10
			});
		});
	},{offset:'80%'});
	
	/*============================================
	Project thumbs - Masonry
	==============================================*/
	$(window).load(function(){

		$('#projects-container').css({visibility:'visible'});

		$('#projects-container').masonry({
			itemSelector: '.project-item:not(.filtered)',
			columnWidth:350,
			isFitWidth: true,
			isResizable: true,
			isAnimated: !Modernizr.csstransitions,
			gutterWidth: 0
		});

		scrollSpyRefresh();
		waypointsRefresh();
	});

	/*============================================
	Filter Projects
	==============================================*/
	$('#filter-works a').click(function(e){
		e.preventDefault();

		$('#filter-works li').removeClass('active');
		$(this).parent('li').addClass('active');

		var category = $(this).attr('data-filter');

		$('.project-item').each(function(){
			if($(this).is(category)){
				$(this).removeClass('filtered');
			}
			else{
				$(this).addClass('filtered');
			}

			$('#projects-container').masonry('reload');
		});

		scrollSpyRefresh();
		waypointsRefresh();
	});

	/*============================================
	Project Preview
	==============================================*/
	$('.project-item').click(function(e){
		e.preventDefault();

		var elem = $(this);
		var	title = elem.find('.project-title').text();
		var	link = elem.attr('href');
		var	descr = elem.find('.project-description').html();
			
		

		$('#project-modal').on('show.bs.modal', function () {
			$(this).find('h1').text(title);
			$(this).find('.btn').attr('href',link);
			$(this).find('.project-descr').html(descr);
		}).modal();
		
	});

	/*$('#project-modal').on('hidden.bs.modal', function () {
		$(this).find('.loader').show();
		$(this).find('.image-wrapper')
			.removeClass('flexslider')
			.removeClass('done')
			.html('')
			.flexslider('destroy');
	});*/
	
	
	/*============================================
	Resize Functions
	==============================================*/
	$(window).resize(function(){
		$('.jumbotron').height($(window).height());
		$('.message-box').css({'marginTop':$(window).height()*0.4});
		scrollSpyRefresh();
		waypointsRefresh();
	});
	
	/*============================================
	Backstretch Images
	==============================================*/
	$.backstretch('images/header-bg.jpg');

	$('body').append('<img class="preload-image" src="images/contact-bg.jpg" style="display:none;"/>');

	$('#about').waypoint(function(direction){
	
		if($('.preload-image').length){$('.preload-image').remove();}
		
		$('.backstretch').remove();
	
		if (direction=='down'){
			$.backstretch('images/contact-bg.jpg');
		}else{
			$.backstretch('images/header-bg.jpg');
		}
	});
	
	/*============================================
	Project Hover mask on IE
	==============================================*/
	$('.no-csstransitions .hover-mask').hover(
		function() {
			$( this ).stop(true,true).animate({opacity: 1});
		}, function() {
			$( this ).stop(true,true).animate({opacity: 0});
		}
	);
	
	/*============================================
	Placeholder Detection
	==============================================*/
	if (!Modernizr.input.placeholder) {
		$('#contact-form').addClass('no-placeholder');
	}

	/*============================================
	Scrolling Animations
	==============================================*/
	$('.scrollimation').waypoint(function(){
		$(this).toggleClass('in');
	},{offset:'90%'});

	/*============================================
	Refresh scrollSpy function
	==============================================*/
	function scrollSpyRefresh(){
		setTimeout(function(){
			$('body').scrollspy('refresh');
		},1000);
	}

	/*============================================
	Refresh waypoints function
	==============================================*/
	function waypointsRefresh(){
		setTimeout(function(){
			$.waypoints('refresh');
		},1000);
	}

});	