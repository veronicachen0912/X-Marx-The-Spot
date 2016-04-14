function toggleFavorite(e) {
  if ($(e).hasClass('favorite'))
    $(e).removeClass('favorite');
  else
    $(e).addClass('favorite');
}

function editBookMarx(e) {

}

function showDeleteConf(e) {
  var parentContainer = e.parentNode;
  $(e).addClass('hide');
  $(parentContainer).find( ".deleteConfirmationContainer").removeClass('hide');
}
function cancelDelete(e) {
  var parentContainer = e.parentNode.parentNode;
  $(parentContainer).find( ".closeButton").removeClass('hide');
  $(parentContainer).find( ".deleteConfirmationContainer").addClass('hide');
}
function confDelete(e) {
  var parentContainer = e.parentNode.parentNode;
  $(parentContainer).remove();
}
function toggleSort() {
  if ($('.dropdown-content').hasClass('hide')) {
    $('.dropdown-content').removeClass('hide');
  }
  else {
    $('.dropdown-content').addClass('hide');
  }
}
function sort(e) {
  toggleSort();
}

function toggleFolder(e) {
  if ($(e).hasClass('closedFolder')) {
    $(e).removeClass('closedFolder');
    $(e).addClass('openFolder');
    $(e).find( "img").attr("src","img/ic_keyboard_arrow_down_black_48dp_2x.png");
    $(e.parentNode.parentNode).find('.folderContent').removeClass('hide');
  }
  // If folder is open
  else {
    $(e).addClass('closedFolder');
    $(e).removeClass('openFolder');
    $(e).find( "img").attr("src","img/ic_keyboard_arrow_up_black_48dp_2x.png");
    $(e.parentNode.parentNode).find('.folderContent').addClass('hide');
  }
}