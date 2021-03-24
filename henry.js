// -Write a function called areaOfCircle that will take one argument (the radius),
//  calculate the area based on that, and return the result. It should also log a string like 
// "The area for a circle with radius 2 is 12.566370614359172."
// --Bonus: Round the result so there are only two digits after the decimal.

// -Write a function that will take one argument (a number) and perform the following operations, 
// using the functions you wrote earlier1:
// Take half of the number and store the result. 1
// Square the result of #1 and store that result. 2 
// Calculate the area of a circle with the result of #2 as the radius. 3
// Calculate what percentage that area is of the squared result (#3).  4
//-------------------------------------------------------------
function areaOfCircle(radius) {
    let area = Math.PI * sqNum(radius);
    let round = area.toFixed(2)
    console.log('The area of circle with radius ' + radius + ' is ' + round);
    return area;
}

function halfsies(num) {
    let half = num / 2;
    return half;
}

function sqNum(num) {
    let sqNum = num * num;
    return sqNum;
}

function percentaga(num1, num2) {
    let percent = (num1 / num2) * 100;
    return percent;
}

function fourTasks(num) {
    let half = halfsies(num);
    let squared = sqNum(half);
    let area = areaOfCircle(squared);
    let result = percentaga(squared, area);
}
console.log("First Entry:");
areaOfCircle(2);
console.log("Second Entry:");
fourTasks(7);