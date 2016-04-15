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
    $(e.parentNode.parentNode).find('.folderContent').removeClass('hide');
    $(e).removeClass('closedFolder').addClass('openFolder');
    $(e).find('img').addClass('openFolderAnim').removeClass('removeFolderAnim');
    expandFolder($(e.parentNode.parentNode));
  }
  // If folder is open
  else {
    $(e).addClass('closedFolder').removeClass('openFolder');
    $(e.parentNode.parentNode).find('.folderContent').addClass('hide');
    $(e).find('img').removeClass('openFolderAnim').addClass('removeFolderAnim');
  }
}

function expandFolder(e) {
    var growDiv = e.find('.folderContent');
    if (growDiv.height()) {
      var maxHeight = growDiv.height();
      growDiv.css('height', 0);
      growDiv.animate({
            height: maxHeight +'px'
        }, 200);
    }
}

function expandFabOverlay() {
  if ($('.overlayContainer').find('.fab').hasClass('rotateFab')) {
    $('.overlayContainer').find('.fab').removeClass('rotateFab').addClass('unRotateFab');
    $('.mini-fab-container').children().each(function(index, element) {
      $(this).removeClass('rollin').addClass('rollout');
    });
    $('.overlay').addClass('hide');
  }
  // Show Overlay
  else {
    $('.overlayContainer').find('.fab').addClass('rotateFab').removeClass('unRotateFab');
    $('.mini-fab-container').removeClass('hide');
    $('.mini-fab-container').children().each(function(index, element) {
      $(this).removeClass('rollout').addClass('rollin');
    });
    $('.overlay').removeClass('hide');
  }
}
