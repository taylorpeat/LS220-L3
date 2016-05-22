$(function() {
  $members = $("#team").find("a");
  $members.click(function(e) {
    e.preventDefault();
    $(this).siblings().fadeIn(400);
  })
  $(".modal_layer, #modal_close").click(function(e) {
    $(".modal_layer, .modal_fix").fadeOut(400);
  });
});