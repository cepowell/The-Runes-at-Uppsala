$(document).ready(function() {
  $("#credits-popup").dialog({
    autoOpen: false,
    draggable: true,
    resizeable: true,
    width: "auto",
    maxHeight: 500,
    minHeight: 200
  });
  $("#credits").click(function() {
    $("a").blur();
    $("#credits-popup").dialog("open");
  });
});

$(document).ready(function() {
  $("#help-popup").dialog({
    autoOpen: false,
    draggable: true,
    resizeable: true,
    width: 400,
    maxHeight: 500,
    minHeight: 200
  });
  $("#help").click(function() {
    $("#help-popup").dialog("open");
  });
});

$(document).ready(function() {
  $('#flash').hide();
});
