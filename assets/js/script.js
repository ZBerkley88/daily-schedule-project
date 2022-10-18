var today = moment();

$(document).ready(function () {

    // listens for button clicks
    $('.saveBtn').on('click', function () {

        // get ID value for respective save button 
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        // save in local storage
        localStorage.setItem(time, value);

        // show the save notification
        $('.notification').show();
        
        // hide the save notification
        setTimeout(function () {
            $('.notification').hide();
        }, 5000);
    })  
})

// displays the time on the webpage, but why isn't it ticking?
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm a")); 

// gets the current hour and returns it as a number between 0 and 23
var today = new Date();
var currentTime = today.getHours();


$(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("-o-clock")[0]);
    // changes the class for time-blocks earlier than the current hour
    if (blockTime < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    // changes the class for time-blocks later than the current hour
    else if (blockTime > currentTime) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
    // changes the class for the remaining time-block to "present"
    else {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
})

// load data saved in localStorage
$('#9-o-clock .description').val(localStorage.getItem('9-o-clock'));
$('#10-o-clock .description').val(localStorage.getItem('10-o-clock'));
$('#11-o-clock .description').val(localStorage.getItem('11-o-clock'));
$('#12-o-clock .description').val(localStorage.getItem('12-o-clock'));
$('#13-o-clock .description').val(localStorage.getItem('13-o-clock'));
$('#14-o-clock .description').val(localStorage.getItem('14-o-clock'));
$('#15-o-clock .description').val(localStorage.getItem('15-o-clock'));
$('#16-o-clock .description').val(localStorage.getItem('16-o-clock'));
$('#17-o-clock .description').val(localStorage.getItem('17-o-clock'));


// add the time the entry was added?