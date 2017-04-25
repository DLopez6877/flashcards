$(document).ready(function() {

  $(".flashcard").click(function() {
    $(this).children().toggleClass('initially-hidden');
    $(this).children().toggleClass('table-cell');
  });

});
