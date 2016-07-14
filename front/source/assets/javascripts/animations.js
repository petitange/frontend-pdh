var mobileBreakPoint, menu;
mobileBreakPoint = 768;
// jshint ignore:line
menu = new mlPushMenu(document.getElementById('menu-group-1'), document.getElementById('trigger-18'), {
  type: 'overlap'
});
//Init scripts
$(document).ready(function () {
  var widthScreen = getWidthScreen();
  getSizeMenu(widthScreen);
  getAnimations();
});

$(window).load(function () {
  $('.loader').fadeOut('slow');
});

$('.close-menu').click(function () {
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
  var widthScreen = getWidthScreen();
  $('.mcp-wrapper #menu-group-1').css('width', widthScreen - 30);
  getSizeMenu(widthScreen);
  if (widthScreen < mobileBreakPoint) {
    $('#toolbar-search.animate-search').css('width', widthScreen - 50);
  } else {
    $('#toolbar-search.animate-search').css('width', 300);
  }
});

function getSizeMenu(widthScreen) {
  if (widthScreen < 1281) {
    $('.menu-creator-pro .grid-container5').css('width', widthScreen - 195);
  } else {
    $('.menu-creator-pro .grid-container5').css('width', 1115);
  }
  getSizeMeuMobile(widthScreen);
  if (widthScreen < 910) {
    groupSubMenu(210, 571);
  } else {
    groupSubMenu(190, 571);
  }
}
function getSizeMeuMobile(widthScreen) {
  if (widthScreen < 500) {
    $('.mcp-wrapper #menu-group-1').css('width', widthScreen);
    $('.mp-pusher.mp-pushed').css('transform', 'translate3d(' + widthScreen + 'px, 0px, 0px)');
  } else if (widthScreen < 769 && widthScreen >= 500) {
    $('.mcp-wrapper #menu-group-1').css('width', '500');
    $('.mp-pusher.mp-pushed').css('transform', 'translate3d(500px, 0px, 0px)');
  } else {
    $('.mcp-wrapper #menu-group-1').css('width', widthScreen - 30);
  }
}

function getWidthScreen() {
  return window.innerWidth;
}

//search
$('.search-button').click(function () {
  var widthScreen = getWidthScreen();
  animateSearch(widthScreen);
});

function animateSearch(widthScreen) {
  var minSizeSearch = 300;
  $('#search-mini-form #search').css('display', 'block');
  if (widthScreen > mobileBreakPoint) {
    $('#toolbar-search').addClass('animate-search');

    $('#toolbar-search.animate-search').css('width', 300);
    $('#search-mini-form #search').animate({
      width: '85%'
    }, 500, function () {
      addStyleSearch();
    });
  } else {
    $('#toolbar-search').addClass('animate-search');
    $('#toolbar-search.animate-search').css('width', widthScreen - 50);
    $('#search-mini-form #search').animate({
      width: '85%'
    }, 500, function () {
      addStyleSearch();
    });
  }
}

$('#search-mini-form #search .close-search').click(function () {
  var hasQueryString = $('#search-mini-form #search input').val();
  if (!hasQueryString) {
    $('#search-mini-form #search input').attr('placeholder', '');
    $('#search-mini-form #search').animate({
      width: '0%'
    }, 500, function () {
      $('.search-button').css('color', '#fff');
      $('#toolbar-search.animate-search').css('width', '25px');
      $('#toolbar-search').removeClass('animate-search');
    });
  } else {
    $('#search-mini-form #search input').val('');
  }
});

$('.animation').click(function () {
  $('.front').addClass('perspectiveDown');
});
function addStyleSearch() {
  $('.search-button').css('color', '#ffc61e');
  $('#search-mini-form #search input').focus();
  $('#search-mini-form #search input').attr('placeholder', '¿Qué buscas?');
}

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
