// exports shorthand ok for just methods on an export
// function as a value for entire export so need module.exports

// async function
module.exports = (x, y, callback) => {
    // if inputs are invalid create error message and pass it into callback function
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    } else {
        // else pass a 'null' errors argument and also pass and object with key value methods
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
};