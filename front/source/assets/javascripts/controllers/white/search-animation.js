//search

$('.search-button').click(function () {
  openSearch()
});


$('#search input').focus(function () {
  openSearch();
});


$('#search input' ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
  }
  $('#search .content-suggestions').show('slow');
});

$('#search .close-search').click(function () {
  var hasQueryString = $('#search input').val();
  if (!hasQueryString) {
    closeSearch()
  } else {
    $('#search input').val('');
  }
});

function closeSearch() {
  $('body').css('overflow', 'auto');
  $('body .overlay-search').css('display', 'none');
  $('#toolbar-search #search.search-overlay').removeAttr('style');
  $('#search').removeClass('search-overlay');
  $('#search .content-suggestions').css('display', 'none');
  $('#search .close-search').css('display', 'none');
}

function openSearch() {
  var widthScreen = getWidthScreen();
  if(widthScreen > mobileBreakPoint) {
    nav.removeClass('header-fixed');
    $('body').css('overflow', 'hidden');
  }
  scrolled = false;
  $('#search').addClass('search-overlay');
  $('body .overlay-search').css('display', 'block');
  $('#search .close-search').css('display', 'block');
  $('#search input').focus();
}

/**
 * Created by PavelCSS on 13.01.15.
 */
var time = 1,
    peopleCount = 1,
    peoples = [];

for (i = 0; i < peopleCount; i++) {
    peoples.push({
        distance : Math.floor((Math.random() * 140) + 1),
        angle    : Math.floor((Math.random() * 360) + 1)
    });
}

(function radar(){

    var radius = 20;
    for (i = 0; i < peoples.length; i++) {
        var disX = 90 < peoples[i].angle + 90 < 270 ? radius - peoples[i].distance : radius,
            disY = 180 < peoples[i].angle + 90 < 360 ? radius - peoples[i].distance : radius,
            angleNew = (peoples[i].angle + 90) * Math.PI / 180,
            getDegX = disX + peoples[i].distance - Math.round(peoples[i].distance * Math.cos(angleNew)),
            getDegY = disY + peoples[i].distance - Math.round(peoples[i].distance * Math.sin(angleNew)),
            delay = time / radius * (peoples[i].distance + 5);
      $("#sonar").addClass('animated');
    }
})();
