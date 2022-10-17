var today = moment();

// displays the time on the webpage, but why isn't it ticking?
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm a")); 

// gets the current hour and returns it as a number between 0 and 23
var today = new Date();
var currentTime = today.getHours();


$(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("-o-clock")[0]);

    if (blockTime < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blockTime > currentTime) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
    else {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");

    }
})
// function changeColor() {
//     var currentTime = checkTime();
//     $( "div" ).each(function( index ) {
//         console.log( index + ": " + $( this ).value() );
//       });

// }


        

    // check to see if the container time is in the past, present, or future
    // apply a number value to each container


// depending on time, change container class to .past, .present, or .future

// EXTRA maybe split each cell into entry/entered? 