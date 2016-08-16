var mobileBreakPoint = 1024,
    menu = new mlPushMenu(document.getElementById('menu-group-1'), document.getElementById('trigger-18'), {
      type: 'overlap'
    }),
    nav = $('.mcp-pushnew-menu'),
    car = $('#header-minicart-container'),
    scrolled = false;
//Init scripts
$(document).ready(function () {
  var widthScreen = getWidthScreen ();
  getSizeMenu(widthScreen);
  if (widthScreen < 910) {
    groupSubMenu(210, 571);
  } else {
    groupSubMenu(190, 571);
  }
  getAnimations();
});

$(window).load(function () {
  $('.loader').fadeOut('slow');

});

$(window).resize(function () {
  var widthScreen = getWidthScreen ();
});

//Sticky Menu
$(window).scroll(function () {
  if ($(window).scrollTop() > 140 && !scrolled) {
    nav.addClass('menu-fixed').animate({ top: '0px' }, 300);
    car.addClass('car-fixed').animate({ top: '-10px' }, 300);
    scrolled = true;
  }

  if ($(window).scrollTop() < 140  && scrolled) {
    //animates it out of view
    nav.animate({ top: '-30px' });
    car.animate({ top: '-30px' });
    //sets it back to default style
    nav.removeClass('menu-fixed');
    car.removeClass('car-fixed');
    scrolled = false;
  }
});

//Lines Animation when close the menu
$('.content-close-menu').click(function () {
  menu._resetMenu();
  $('.menu-lines .line1').animate({
    left: '0px'
  }, 550);
  $('.menu-lines .line2').animate({
    left: '0px'
  }, 800);
});

function animateLines() {
  $('.menu-lines .line1').css('left', '-30px');
  $('.menu-lines .line2').css('left', '-30px');
}

$(window).resize(function () {
  var widthScreen = getWidthScreen ();
  getSizeMenu(widthScreen);
});

function getSizeMenu(widthScreen) {
  if (widthScreen < 1281) {
    $('.menu-creator-pro .grid-container5').css('width', widthScreen - 195);
  } else {
    $('.menu-creator-pro .grid-container5').css('width', 1115);
  }
  getSizeMenuMobile(widthScreen);
  if (widthScreen < 910) {
    groupSubMenu(210, 571);
  } else {
    groupSubMenu(190, 571);
  }
}
function getSizeMenuMobile(widthScreen) {
  if (widthScreen < 500) {
    $('.mcp-wrapper #menu-group-1').css('width', widthScreen);
    $('.mp-pusher.mp-pushed').css('transform', 'translate3d(' + widthScreen + 'px, 0px, 0px)');
  } else if (widthScreen < 769 && widthScreen >= 500) {
    $('.mcp-wrapper #menu-group-1').css('width', '500');
    $('.mp-pusher.mp-pushed').css('transform', 'translate3d(500px, 0px, 0px)');
  } else {
    $('.mcp-wrapper #menu-group-1').css('width', '100%');
  }
}

function getWidthScreen() {
  return window.innerWidth;
}

//search
$('.search-button').click(function () {
  var widthScreen = getWidthScreen ();
  if(widthScreen < 1024) {
    $('#search input').slideDown('medium');
    $('#search input').focus();
  }
});

$('#search .close-search').click(function () {
  var hasQueryString = $('#search input').val();
  if (!hasQueryString) {
    $('#search input').slideUp('medium');
  } else {
    $('#search input').val('');
  }
});

$('.animation').click(function () {
  $('.front').addClass('perspectiveDown');
});

function groupSubMenu(columnWidth, rowHeight) {
  $('.content-sub-menu').masonry({
    itemSelector: '.sub-menu',
    columnWidth: columnWidth,
    rowHeight: rowHeight
  });
}

function getAnimations() {
  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  $('.animated-logo').addClass('animated slideInDown').one(animationEnd, function () {
    $('.animated-logo').removeClass('animated slideInDown');
  });
}
