/*
// TODO - I haven't quite tested this properly
$(document).ready(function() {
	$( "#show-hidden-section" ).click(function(event) {
		event.preventDefault();
		$('#hidden-section').slideDoown();
	});
});
*/

$(document).ready(function () {
  $("#show-hidden-section").click(function (event) {
    // Prevent the default action
    event.preventDefault();
    // Get the hidden section element
    var hiddenSection = $("#hidden-section");
    if (hiddenSection.is(":visible")) {
      hiddenSection.slideUp();
      $(this).text("Show more");
    } else {
      hiddenSection.slideDown();
      $(this).text("Show less");
    }
  });
});
