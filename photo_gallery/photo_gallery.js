$(function() {
  $("nav").on("click", "a", function(e) {
    e.preventDefault();
    var idx = $(e.currentTarget).closest("li").index();
    if ($("figure").filter(":visible").index("figure") === idx) { return; }
    $("img.selected").removeClass();
    $("li").eq(idx).find("img").addClass("selected");
    $("figure").filter(":visible").fadeOut(300)
    $("figure").delay(300).eq(idx).fadeIn(300);
  })
});