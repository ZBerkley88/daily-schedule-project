# Daily Work Scheduler

## Description

The purpose of this exercise was to create a responsive work day scheduler. The schedule is divided into hours which change color depending on the actual time. If a time block has passed, it appears in red. The current hour appears in an off-white, and future time blocks appear in green. 

The buttons to the right side of each time block save any information written in the time block to localStorage. This way, the information in each time block can be reviewed even if the browser is closed and reopened.

The biggest hurdle to this project was getting the colors of each time block to respond to the current time. I initially chose to hardcode values into the HTML initially, but later decided to dynamically add values to each time block in the web app's logic. The code in `lines 33-34` in `script.js` derives a number from the ID tag of each time block and stores it in a variable. The value of that variable is then compared to the current time, and the color of the time block is assigned accordingly.


## Web App Link and Preview

Link: [The Daily Work Scheduler Project](https://zberkley88.github.io/daily-schedule-project/)

![The Daily Work Scheduler Project](./assets/images/Screenshot%202022-10-18%20162940.jpg)


## Installation

n/a 

## Usage

 n/a

## Credits

n/a 

## License

Please refer to the LICENSE in the repo.