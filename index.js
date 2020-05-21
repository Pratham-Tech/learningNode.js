// var rect = {
// 	perimeter: (x,y) => (2*(x+y)),
// 	area: (x,y) => (x*y)
// };

var rect = require('./rectangle');

function solverect(l,b){

	console.log("Solving for rectangle with l = "+l+" and b = "+b);

	if(l<=0 || b<=0)
		console.log("Rectangle dimension should be greater than 0.");
	else
      {	
      	console.log("The perimeter of rectangle is "+rect.perimeter(l,b)+" .");
		console.log("The area of rectangle is "+rect.area(l,b)+" .");
	}
}

solverect(2,4);
solverect(0,5);
solverect(1,3);