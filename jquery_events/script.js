$(document).ready(function () {
    $("#stream1_btn").on(function () {
        $(".steam1").hide();
        $(".steam1").hide('slow');
        $(".steam1").hide('medium');
        $(".steam1").hide('fast');
        $(".steam1").hide(1000);


    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });
});

// Method chaining

$('button').mouseenter(function () {
    $('button').removeClass('make-red').addClass('make-border');
});

$('button').mouseleave(function () {
    $('button').removeClass('make-border').addClass('make-red');
});