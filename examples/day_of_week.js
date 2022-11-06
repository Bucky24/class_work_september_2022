/*
PRE-CLASS DRILL:

Write a function that takes in a number and returns the corresponding day of the week.

Ex:
Input: 1
Output: 'Monday'

Input: 5
Output: 'Friday'

Input: 8
Output: undefined
*/

function getDayName(dayNumber) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (dayNumber >= days.length) {
        return undefined;
    }

    return days[dayNumber];
}

var getDay = function (dayNum){
    switch(dayNum){
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      case 7:
        return 'Sunday';
      default:
        return undefined;
    }
  }

console.log(getDayName(1));
console.log(getDayName(5));
console.log(getDayName(8));