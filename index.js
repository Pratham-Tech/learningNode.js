// var rect = {
// 	perimeter: (x,y) => (2*(x+y)),
// 	area: (x,y) => (x*y)
// };

var rect = require('./rectangle');

function solverect(l,b){

	console.log("Solving for rectangle with l = "+l+" and b = "+b);

	rect(l,b, (err, rectangle) => {
		if(err) 
			console.log("Error! : ", err.message);
		else
		{
			console.log("The area of rectangle is "+rectangle.perimeter()+" .");
		    console.log("The perimeter of rectangle is "+rectangle.area()+" .");
		}
	});
}
solverect(2,6);
solverect(0,5);
solverect(1,3);