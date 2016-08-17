var mobileBreakPoint = 1024,
    menu = new mlPushMenu(document.getElementById('menu-group-1'), document.getElementById('trigger-18'), {
      type: 'overlap'
    }),
    nav = $('#header'),
    scrolled = false,
    lastPositionScroll;
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
  $('.overlay-search').fadeOut('slow');
});

$(window).resize(function () {
  var widthScreen = getWidthScreen();
});

//Sticky Menu
$(window).scroll(function () {
  var positionScroll;
      positionScroll = $(window).scrollTop();
      widthScreen = getWidthScreen();
  if (positionScroll > 140 && !scrolled) {
    nav.addClass('header-fixed').animate({ top: '0px' }, 300);
    scrolled = true;
  }
  if(widthScreen > mobileBreakPoint) {
    if (positionScroll > 140 && scrolled) {
      if (lastPositionScroll > positionScroll) {
        $('#header.header-fixed  #secundary-menu').animate({ height: '0px' }, 200);
      } else {
        $('#header.header-fixed  #secundary-menu').animate({ height: '50px' }, 200);
      }
    }
  }
  if (positionScroll < 140  && scrolled) {
    removeMenuSticky(widthScreen)
  }
  lastPositionScroll = positionScroll;
});

function removeMenuSticky(widthScreen) {
  if(widthScreen > mobileBreakPoint) {
    $('#header.header-fixed  #secundary-menu').animate({ height: '50px' }, 50, function () {
      $('#header #secundary-menu').removeAttr('style');
    });
  }
  nav.animate({ top: '-30px' });
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
