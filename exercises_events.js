$(function() {
  $("form").submit(function(e) {
    e.preventDefault();
    var character = $("input:text").val();
    var char_code = character.charCodeAt(0);

    $(document).keypress(function(key) {
      if (key.which !== char_code) { return; };
      $("a").trigger("click");  
    });
  });

  $("a").click(function(e) {
    e.preventDefault();
    $("p").slideToggle();
  });
});