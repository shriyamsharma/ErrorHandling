var rect = require('./rectangle');

function solveRect(l,b){
    console.log("solving for rect with l = " + l + " and b = " + b);

    rect(l,b, (err, rectangle) => {
        if(err) {
            console.log("ERROR: " + err.message);
        }
        else{
            console.log("The area of the rectangle of dimention l = "
                + l + " and b = " + b + " is "+ rectangle.area());
        
            console.log("The perimeter of the rectangle of dimention l = "
                + l + " and b = " + b + " is "+ rectangle.area());
        }
    });
    console.log("this statement is after the the call to rect");

}

solveRect(2, 4);
solveRect(3,5);
solveRect(0,5);
solveRect(-1,3); 