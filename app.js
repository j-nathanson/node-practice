// import the function from the rectangle file
const rect = require('./rectangle');

function solveRect(l, w) {
    // console log inputs
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    // first validate inputs greater than 0,
    //  if it fails the callback will have just error argument which is truthy so it will console log the error object's msaage
    //  if it passes then it will wait 2 seconds and then the callback function will have 'null' for error argument and an object 'rectangle' which has 2 methods
    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR:', err.message);
        } else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
    });
    console.log('This statement is logged after the call to rect()');
}

// setTimeout is not called for invalid inputs

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);