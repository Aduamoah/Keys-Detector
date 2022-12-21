$(document).on("keydown", function(event){
$("h1").html('<strong><em>' + event.key + '</em></strong>');
$("h1").css("font-size", "100px");
})