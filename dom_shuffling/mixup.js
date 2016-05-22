$(function() {
  function moveToTopOf(container, element) {
    element.remove();
    container.prepend(element);
  }
  function moveToBottomOf(container, element) {
    element.remove();
    container.append(element);
  }

  $body = $("body");
  $header = $("nav").parent("header");
  $title = $("a").parent("h1");
  $subtitle = $("h2");
  $chin_figure = $("img[alt='The chin stick']").parent();
  $baby_figure = $("img[alt='The baby mop']").parent();
  $chin_caption = $baby_figure.find("figcaption");
  $baby_caption = $chin_figure.find("figcaption");
  $article = $("article");

  moveToTopOf($body, $header);
  moveToTopOf($header, $title);
  moveToBottomOf($article, $chin_figure);
  moveToBottomOf($article, $baby_figure);
  moveToBottomOf($chin_figure, $chin_caption);
  moveToBottomOf($baby_figure, $baby_caption);
})