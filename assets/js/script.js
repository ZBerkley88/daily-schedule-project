// test to see if the value was added to the element correctly
// console.log(document.getElementById('hour-12').getAttribute('value'));

var today = moment();

// why isn't the time ticking on the webpage?
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a")); 

// this function gets the current hour and returns it as a number between 0 and 23
function checkTime() {
    var today = new Date();
    var currentTime = today.getHours();

    return currentTime
}



function changeColor() {
    for (var i = 0; i < 10; i++) {

        // this console.logs the value of all IDs on the page
        $("*").each(function() {
            if (this.id) {
                console.log(document.getElementById(this.id).getAttribute('value'));
        
            }

        });
    
    }
    // check to see if the container time is in the past, present, or future
    // apply a number value to each container

}
// depending on time, change container class to .past, .present, or .future

// EXTRA maybe split each cell into entry/entered? 