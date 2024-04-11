$(document).ready(function(){

  // slider
$('#home_slider').owlCarousel({
  items: 1,
  loop:true,
  margin:0,
  nav:true,
  dots:false,
});

// testimonial slider
$('#testimonial_items').owlCarousel({
items:1,
loop:true,
margin:10,
nav:true,
dots:false,
autoplay:true,
autoplayTimeout: 3000,
navText:['<i class="las la-angle-left"></i>','<i class="las la-angle-right"></i>']
});

// pre loader
setTimeout(function(){
  $('.preloader').fadeOut();
},2000);

// counter
function visible(partial) {
var $t = partial,
    $w = jQuery(window),
    viewTop = $w.scrollTop(),
    viewBottom = viewTop + $w.height(),
    _top = $t.offset().top,
    _bottom = _top + $t.height(),
    compareTop = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;

return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));
}

$(window).scroll(function(){

if(visible($('.count-digit')))
{
  if($('.count-digit').hasClass('counter-loaded')) return;
  $('.count-digit').addClass('counter-loaded');
  
  $('.count-digit').each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
      duration: 3000,
      easing: 'swing',
      step: function () {
        $this.text(Math.ceil(this.Counter));
      }
    });
  });
}
});  

// header fixed
$(window).scroll(function(){
var sticky = $('.sticky'),
    scroll = $(window).scrollTop();

if (scroll >= 100) sticky.addClass('fixed');
else sticky.removeClass('fixed');
});

// bottom to top
$(window).scroll(function(){ 
if ($(this).scrollTop() > 100) { 
    $('#scroll').fadeIn(); 
} else { 
    $('#scroll').fadeOut(); 
} 
}); 
$('#scroll').click(function(){ 
$("html, body").animate({ scrollTop: 0 }, 600); 
return false; 
}); 

AOS.init();

})