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
  $('#search .content-suggestions').slideUp('medium');
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
  nav.removeClass('header-fixed');
  scrolled = false;
  $('body').css('overflow', 'hidden');
  $('#search').addClass('search-overlay');
  $('body .overlay-search').css('display', 'block');
  $('#search .close-search').css('display', 'block');
  $('#search input').focus();
}
