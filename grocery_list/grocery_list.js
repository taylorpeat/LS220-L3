$(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var item = $("#item").val(),
        quantity = $("#quantity").val() || 1,
        $list = $("ul");
    if (item === "") { return };
    $list.append("<li>" + quantity + " " + item + "</li>");
    $("form")[0].reset();
  });
});