var mobileBreakPoint = 1025,
    menu = new mlPushMenu(document.getElementById('menu-group-1'), document.getElementById('trigger-18'), {
      type: 'overlap'
    }),
    nav = $('#header'),
    scrolled = false,
    columnWidth = 190,
    lastPositionScroll;
//Init scripts
$(document).ready(function () {
  var widthScreen = getWidthScreen ();
  getSizeMenu(widthScreen);
  groupSubMenu(columnWidth);
});

$(window).load(function () {
  $('.overlay-search').fadeOut('slow');
  setTimeout(function() {
    $('.load').fadeOut('slow', function () {
      $('#header').removeClass('animated-element');
    });
  }, 2000);
});

$(window).resize(function () {
  var widthScreen = getWidthScreen();
});

//Sticky Menu
$(window).scroll(function () {
  var positionScroll;
      positionScroll = $(window).scrollTop();
  if (positionScroll > 100 && !scrolled) {
    nav.addClass('header-fixed');
    $('#header.header-fixed #secundary-menu').css('display', 'none');
    scrolled = true;
  }

  if (positionScroll > 100 && scrolled) {
    if (lastPositionScroll > positionScroll) {
      $('#header.header-fixed  #secundary-menu').css('display', 'block');
    } else {
      $('#header.header-fixed  #secundary-menu').css('display', 'none');
    }
  }

  if (positionScroll < 100  && scrolled) {
    removeMenuSticky()
  }
  lastPositionScroll = positionScroll;
});

function removeMenuSticky() {
  $('#header.header-fixed  #secundary-menu').css('display', 'block');
  nav.removeClass('header-fixed');
  scrolled = false;
}
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
  getSizeMenuMobile(widthScreen);
}
function getSizeMenuMobile(widthScreen) {
  if (widthScreen < 500) {
    $('.mcp-wrapper #menu-group-1').css('width', widthScreen);
    $('.mp-pusher.mp-pushed').css('transform', 'translate3d(' + widthScreen + 'px, 0px, 0px)');
  } else if (widthScreen < mobileBreakPoint && widthScreen >= 500) {
    $('.mcp-wrapper #menu-group-1').css('width', '500');
    $('.mp-pusher.mp-pushed').css('transform', 'translate3d(500px, 0px, 0px)');
  } else {
    $('.mcp-wrapper #menu-group-1').css('width', '100%');
  }
}

function getWidthScreen() {
  return window.innerWidth;
}

$('.animation').click(function () {
  $('.front').addClass('perspectiveDown');
});

function groupSubMenu(columnWidth) {
  $('.content-sub-menu').masonry({
    itemSelector: '.sub-menu',
    columnWidth: columnWidth
  });
}
