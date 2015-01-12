
// ### Homework #1
// (Due Monday 1/12)

// You need to turn in this homework by cloning this repo, making a new branch with your solutions, pushing to github, and issuing a pull request.
// For details, follow the instructions [here](http://portlandcodeschool.github.io/jse/2015/01/07/command-line-and-git-slides/#/14).

// Please also read the [learning objectives](objectives.md) for this week.

// ---

// **1)** (_Difficulty: mixed_)
// Predict the output of each of the following expressions, and explain the rules which determine it.
// If the output depends on the value of x, identify the conditions when the expression will output true.  Assume the cases are independent, and x is reset to an unknown value before each.

// Some of these are tricky!  Don't trust your first instinct.  


// **a)** `"1" == 1`
true

// **b)** `"1" === 1`
false

// **c)** `x == 'x'`
true // only when x is assinged to 'x' beforehand like x = 'x'

// **d)** `x == (x+'')`
true // no matter what is assigned to x, adding '' to is is like adding nothing, so x remains the same (no side effect)

// **e)** `'' == ' '`
false // no way to make this true

// **f)** `x = true`
true // because the console returns the result of the assignment

// **g)** `var x; x == 'undefined'`
false // because x has been defined by the "var x;" statement

// **h)** `'9'<'10'`
false // the string '9' compares first position with with first position in string '10' compare so '9' is more than '1'

// **i)** `typeof x + 1 === "number"`
false // something strange is happening.  the "typeof x+1" is returning "number1" the typeof on the expression only works correctly with parens around x+1 typeof (x+1) === "number" yields true

// **j)** `typeof x % 2 === "number"`
false // no parens
// **k)** `typeof (x % 2) === "number"`
true // has parens
// **l)** `x++ == ++x`
false // x is modified before comparison
// **m)** `++x == x++`
true // x is modified after the comparison
// **n)** `"1"+x == 1+x`
false // left side is is a two place string, right side is a number 
// **o)** `"0"+1 == 1`
true // wierd, string "01" compares as equal to number 1 must be converting to number?
// **p)** `(typeof (x+1))===(typeof x)`	
true // both are numbers (x can be number or string for this to be true)



// **q)** `(x*1 == x) || ((typeof x) != "number")`
true // if x is a number, then left side of the OR is true, if x is string then right side of OR is true.  x=NaN returns false

// **r)** `(x=(typeof (x+(typeof x))))==x`
true // assigning anything to x and then checking to see if x is equivalent to that thing.... seems to always be true.

// ---

// All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes.

//  **2)** (_Difficulty: easy_)

// Assume variables x, y, and z are numbers.

// **a)**
// Write an expression for the mean (i.e. average) of x, y, and z.

var mean = (x+y+z)/4;

// **b)**
// Write a series of expressions to adjust each of x, y, and z halfway toward their mean.
// That is, reset the value of each variable to something based on its previous value.

x = x + (mean - x) / 2;
y = y + (mean - y) / 2;
z = z + (mean - z) / 2;

// ---

// **3)** (_Difficulty: easyish_)

// Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

// - _l_ : horizontal position of left edge;
// - _r_ : horizontal position of right edge;
// - _t_ : vertical position of top edge;
// - _b_ : vertical position of bottom edge.

// **a)**
// Write an expression for the rectangle's area.
// first make sense of the input variables

var x1 = _l_ 
var x2 = _r_
var y1 = _b_
var y2 = _t_

// now (x1,y1) is lower left corner
// now (x2,y2) is upper right corner
var width = x2 - x1;
var height = y2 - y1;

var area = width * height;


// **b)**
// Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.
(height>width ? true : false ) 

// **c)**
// Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)
// circumference is 2*PI*R
var maxCircumference = 2 * Math.PI * ((height < width ? height : width )/2) // max circumference is based on radius inscribed inside whichever is smaller height or width

// **d)**
// Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.
// area is PI*R^2 distance is sqrt( (x2-x1)^2 + (y2-y1)^2 )
var minRadius = Math.sqrt( Math.pow((x2-x1),2) + Math.pow((y2-y1),2)) / 2; // half the diagonal is the minimal radius of the circumscribing circle
var minArea   = Math.PI * Math.pow((minRadius),2); 


// **e)**
// Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
// Define four new variables describing the centermost small rectangle.
// (_Hint: one of the many solutions is very similar to the solution of **2b** above._)

var centerX1 // left side of center rectangle
var centerX2 // right side
var centerY1 // lower side
var centerY2 // upper side

centerX1 = x1 + ((x2-x1)/3);
centerX2 = centerX1 + ((x2-x1)/3);
centerY1 = y1 + ((y2-y1)/3);
centerY2 = centerY1 + ((y2-y1)/3);

// ---

// **4)** (_Difficulty: easyish_)

// Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

// * Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

// * Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N==0 and the bottom-right has N==63.

// **a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.
	var row = 5
	var col = 2
	var n = (row * 8) + (col);



// **b)**  Given N, find R.  Write an expression for R which contains N.
var row = Math.trunc( n / 8 );


// **c)**  Given N, find C.  Write an expression for C which contains N.
var col = n % 8;


// **d)**  Assume the squares are colored black and white, with the upper-left square black.
// Write an expression to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N.
// (_Hint: If you prefer, you may use a pair of conditional statements instead of a single expression._)

//  squareColor = black if (even row AND even column) OR (odd row AND odd column)


	if      (((Math.trunc( n / 8 ) % 2) == 0) && (( n % 8 ) % 2) == 0) // row and col are both even
	{ 
		squareColor = "black"
	} 
	else if (((Math.trunc( n / 8 ) % 2) != 0) && (( n % 8 ) % 2) != 0) // row and col are both odd
	{
		squareColor = "black"
	} 
	else
	{
		squareColor = "white"
	};

// ---

// **5)** (_Difficulty: moderate_)

// Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
// If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

var n =3;
var d = 2;
var wholeNumber = 0;
var numerator = 0;
var properFraction = "";

wholeNumber = Math.trunc( n / d );
numerator = n % d;

properFraction = wholeNumber + " " + numerator + "/" + d;


// Write an expression for a string expressing the proper form of an improper fraction _n/d_.  For example, when _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.
// (_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)
