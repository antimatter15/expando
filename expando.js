$(window).resize(function(){
  $('.hexpando').each(function(){
		function excess(el){
			if(el.is('html')) return 0;
			var add = el.outerWidth(true) - el.width();

			var top = $(el).position().top;
			$(el).siblings().each(function(){
				if(top == $(this).position().top && $(this).is(':visible')){

					add += $(this).outerWidth(true)
				}
			})

			return add;
		}
		var input = $(this);
		var margin = input.outerWidth(true) - input.width();
		var diff = excess(input);

		// console.log(diff, margin)
		if(Modernizr.csscalc){
			var base = "calc(100% - "+ diff +"px)";
			input.css('width', "-webkit-" + base)
			input.css('width', "-moz-" + base)
			input.css('width', "-o-" + base)
			input.css('width', base);
		}else{
			input.width(input.parent().width() - diff);
		}
	})
	$('.vexpando').each(function(){
		function excess(el){
			if(el.is('body')) return 0;
			var add = el.outerHeight(true) - el.height();
			// console.log($(el)[0].className, add)
			var left = $(el).position().left;
			$(el).siblings().each(function(){
				if(left == $(this).position().left && $(this).is(':visible') && $(this).width() > 0){
					// console.log("sib", $(this)[0], add)
					add += $(this).outerHeight(true)
				}
			})
			add += excess(el.parent());

			return add;
		}
		var input = $(this);
		var diff = excess($(this));
		// console.log(diff)
		if(Modernizr.csscalc){
			var base = "calc(100% - "+ diff +"px)";
			input.css('height', "-webkit-" + base)
			input.css('height', "-moz-" + base)
			input.css('height', "-o-" + base)
			input.css('height', base);
		}else{
			input.height($(window).height() - diff);
		}
	})
});

$(document).ready(function(){
	$(window).resize();
})
