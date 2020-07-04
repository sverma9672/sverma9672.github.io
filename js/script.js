$(".animation").each(function () {
  var waypoint = new Waypoint({
    element: this,
    handler: function (direction) {
      if (direction == "down") {
        var animation = $(this.element).attr("data-animation");
        $(this.element).css("opacity", "1");
        $(this.element).removeClass("zoomOut");
        $(this.element).addClass(" animated " + animation);
      }
      if (direction == "up") {
        var animation = $(this.element).attr("data-animation");
        // $(this.element).css("opacity", "0");
        $(this.element).removeClass("animated");
        $(this.element).removeClass(animation);
        $(this.element).addClass(" animated " + "zoomOut");
      }
    },
    offset: "75%",
  });
});
