$(document).ready(function() {
  $("#credits-popup").dialog({
    autoOpen: false,
    draggable: true,
    resizeable: true,
    maxHeight: 500,
    minHeight: 200
    //position: {my: "right top", at: "center top", of: "#title"}
  });
  $("#credits").click(function() {
    $("#credits-popup").dialog("open");
  });
});

$(document).ready(function() {
  $("#help-popup").dialog({
    autoOpen: false,
    draggable: true,
    resizeable: true,
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
