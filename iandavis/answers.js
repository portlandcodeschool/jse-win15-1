/* SECTION 1*/


//a
"1" == 1;
//true converts string "1" to number 1;

//b 
"1" === 1;
//false no conversion, no equality

//c
x == 'x'
// only true if x is a number unless Infinity, -Infinity, or NaN; false if boolean

//d 
x == (x + '')
//true unless x = NaN, undefined, Boolean

//e
'' == ' '
//true

//f
x = true;
//assignment of x to true

//g
var x; x == undefined
//true, a variable without a defined value given the value undefined

//h
'9'<'10'
//intuitively true, actually false because JS goes by the first character of the string.  So, '090000000000'<'1000' is true, but '9'<'10'

//i
typeof x + 1 === "number"
//Always false because "typeof x" has precedence.  typeof x evaluates to a string which is then concatenated with 1 resulting in "string1", "number1", "undefined1", or "boolean1"

//j
typeof x % 2 === "number"
//Always false for basically the same reason as above (i), except the result is always NaN because % is operating of the string that results from "typeof x"

//k
typeof (x % 2) ==== "number"
// always true because any x value % 2 will result in a "number" type

//l
x++ == ++x
//true if x is Infinity or -Infinity because any operation on Infinity results in Infinity again. false if x is a string (always results in NaN). false for any number because the postfix increment operator increments after returning a value, while the prefix does so before returning a value.  Used in this way the prefix and postfix operators increment _away_ from each other, causing the value to never equal itself in this instance.

//m
++x == x++
//true if x equals any number, including Infinity, though not NaN, because x is incremented left of the equality operator, then remains the same right of the equality operator. Also true for strings that are quoted numbers, which are converted to numbers. Also true if x is a boolean value.

//n
"1" + x == 1 + x
// only true if x is a string.  if x is anything else it is converted to a string right of equality and the left of equality never evaluates to a string


//o
"0" + 1 == 1
//true because the string "01" is converted to 1 by the equality operator.


//p
(typeof (x + 1)) === (typeof x)
//true is x is any string or number, including NaN and Infinity. For a string x it is concatenated with 1, both side of the strict equality being strings. False if x is boolean because booleans are reduced to a number when added to a number. undefined is false because undefined + 1 is NaN, a number, while typeof undefined is "undefined".


//q
(x * 1 == x) || ((typeof x) != "number")
//true except when x is NaN because does not equal itself (left of ||) and is a number.
//left of || is true in all but two other cases. when x is a string that isn't a quoted number (with that it is converted to a number with the * operator) it evaluates to NaN which is not equal to itself. In this case, right of ||, and evaluates to true. The other case is when x is undefined. left of || evaluates to NaN, right of || evaluates to true, typeof undefined being the string "undefined".

//r
(x = (typeof (x + (typeof x)))) == x
// always true, including if x is NaN, because typeof always outputs a string


var testCases = ["string", "1", true, false, Infinity, 20, undefined, NaN];

for (var x = 0, length = testCases.length; x < length; x++) {
	var result = (testCases[x] = (typeof (testCases[x] + (typeof testCases[x])))) == testCases[x];
	console.log(testCases[x] + " is " + result)
};


/* SECTION 2*/

//a) Write an expression for the mean (i.e. average) of x, y, and z.
(x + y + z) / 3;


//b) Write a series of expressions to adjust each of x, y, and z halfway toward their mean. That is, reset the value of each variable to something based on its previous value.

var x = 200, y = 500, z = 300;
var mean = (x + y + z) / 3;

x < average ? (x += (average - x) / 2) : (x -= (x - average) / 2);
y < average ? (y += (average - y) / 2) : (y -= (y - average) / 2);
z < average ? (z += (average - z) / 2) : (z -= (z - average) / 2);


/* SECTION 3*/

//a) Write an expression for the rectangle's area.
var width = r - l, height = t - b;
var area = width * height;

//b) Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.

height > width > ? true : false
(height > width)|| false

//c) Write an expression for the circumference of the biggest circle which can fit inside the rectangle. (Hint: you'll need logic similar to that in b.)
var circumference = Math.PI * height;


//d) Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.
var radius = (width/2 + height/2)
var area = Math.PI * Math.pow(radius, 2)
 
//e) Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position. Define four new variables describing the centermost small rectangle. (Hint: one of the many solutions is very similar to the solution of 2b above.)

var outerWidth = r - l, outerHeight = t - b;
var innerWidth = outerWidth / 3;
var innerHeight = outerHeight / 3; 
var innerL, innerR, innerT, innerB;

innerL = l + innerWidth;
innerR = r - innerWidth;
innerT = t + innerHeight;
innerB = b - innerHeight;

/* SECTION 4 */

//a) Given a particular R and C, find the corresponding N. That is, write an expression for variable N containing variables R and C.
//creates an array to represent squares in checkboard
var grid = [];
for (var i = 0; i <= 63; i++) {
    grid.push(i);
}

var r = 1, c = 5;

var column = n % 8 /* 8 is width*/
//a) Given a particular R and C, find the corresponding N. That is, write an expression for variable N containing variables R and C.
n = (r * width) + c;

//b) Given N, find R. Write an expression for R which contains N.
r = Math.floor(n / width)

//c) Given N, find C. Write an expression for C which contains N.



























//d
var color = "";
for (var i = 0, length = grid.length; i++){
	if (i % 2 == 0)
		color = black;
	else
		color = white;
}

//e
//input improper fraction (7/4) output string proper fraction (1 3/4)
var n = 7, d = 4;
var wholeNumber = Math.floor(n / d);
if (n % d == 0) {
	var fractionString = "";
} else {
	fractionString = (n % d) + "/" + d;
}
console.log(wholeNumber + " " + fractionString)






