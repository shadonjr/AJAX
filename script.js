$("button").click(function() {
    $("div").animate({
        // width: "+=400px",
        top: "100px",
        left: "100px",
        width: "400px",
        height: "400px",}, 5000, function() {
            $("p").html("Animation complete.");
            $("div").css("backgroundColor", "red");
        }
    )
});

$.get("info.txt", function(data) {
    $("#one").html(data);
});
$.ajax("info.txt").done(function(data) {
    $("#two").html(data);
}).fail(function() {
    alert("Could not connect!")
});