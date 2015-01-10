
### Homework #1
(Due Monday 1/12)

You need to turn in this homework by cloning this repo, making a new branch with your solutions, pushing to github, and issuing a pull request.
For details, follow the instructions [here](http://portlandcodeschool.github.io/jse/2015/01/07/command-line-and-git-slides/#/14).

Please also read the [learning objectives](objectives.md) for this week.

---

**1)** (_Difficulty: mixed_)
Predict the output of each of the following expressions, and explain the rules which determine it.
If the output depends on the value of x, identify the conditions when the expression will output true.  Assume the cases are independent, and x is reset to an unknown value before each.

Some of these are tricky!  Don't trust your first instinct.  


**a)** `"1" == 1`
	Output: "true" The == operator equates the string 1 close enough to the numerical 1 to return "true."

**b)** `"1" === 1`
	Output: "false" The === notices that the string 1 is not the same data type as numerical 1.

**c)** `x == 'x'`
	Output: "true" The true output will happen when x is equal to the string "x" otherwise the out put should always be false because only the string "x" can be equal to the string "x."

**d)** `x == (x+'')`
	Output: "true" The output will be true because x + ' ' is close enough to x for the == operator (like in a))

**e)** `'' == ' '`
	Output: "false" The output should be false as the two strings are not the same (or close enough for ==). 

**f)** `x = true`
	Output: "true" The output will be true because we are simply assing the boolean true to x.

**g)** `var x; x == 'undefined'`
	Output: "false" The output will be false as the string "undefined" is not equal to a variable that is actually undefined.

**h)** `'9'<'10'`
	Output: "false" the output will be false, when comparing strings Javascript compares the first character of each string. 

**i)** `typeof x + 1 === "number"`
	Output: "false" The output will always be false as 'typeof x + 1' will always have a 1 on the end of the varibale type of x. 

**j)** `typeof x % 2 === "number"`
	Output: "false" The output will be false no matter what the value of x is bescause typeof outputs a string and the mod of a string returns NaN which is not equal to "number."

**k)** `typeof (x % 2) === "number"`
	Output: "true" The output will always be true because even if x is a string, x % 2 will return NaN which is a "number" according to the typeof operator.

**l)** `x++ == ++x`
	Output: "false" The output is false because x is returned then incremented then incremented again before being compared.

**m)** `++x == x++`
	Output: "true" The output is true because x is first incremented then compared to the new value of x before being incremented yet again. 

**n)** `"1"+x == 1+x`
	Output: "true" The output will be true if a string is assigned to x because adding a 1 to a string string will have the same effect whether 1 is a string or not. 

**o)** `"0"+1 == 1`
	Output: "true" The output is true because "0"+1 returns "01" and that is close enough to numerical 1 for the == operator.

**p)** `(typeof (x+1))===(typeof x)`
	Output: "true" The ouput is true because we are doing nothing to change the variable type in either of the typeof operators.

**q)** `(x*1 == x) || ((typeof x) != "number")`
	Output: "true" the output is true because one side of the || will always be true. If x is a number then the left side is true and the output will be true. If x is a string then the left side is false and the right side is true. As long as atleast one statment is true the || operator will output true.

**r)** `(x=(typeof (x+(typeof x))))==x`
	Output: "true" The output is true because the 2 nested typeof operators will always result in x = "string," then x == x will return "true."

---

All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes.

 **2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.
	var mean;
	mean = (x + y + z)/3;

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward their mean.
That is, reset the value of each variable to something based on its previous value.
	var mean;
	mean = (x + y + z)/3;

	x = ((mean - x)/2) + x;
	y = ((mean - y)/2) + y;
	z = ((mean - z)/2) + z;
---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.
	var area;
	area = (r - l) * (t - b);

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.
	var width, 
		height;

	width = (r - l);
	height = (t - b);

	if (width < height) {
		true
	} else {
		false
	}

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)
	var width, 
		height, 
		radius,
		circumference;

	width = (r - l);
	height = (t - b);

	if (width < height) {
		radius = width/2;
		circumference = 2 * Math.PI * radius;
	} else {
		radius = height/2;
		circumference = 2 * Math.PI * radius;
	}

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.
	var width, 
		height, 
		radius,
		area;

	width = (r - l);
	height = (t - b);

	radius = (Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)))/2;
	area = Math.PI * Math.pow(radius, 2);
	
**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)
	var width, 
		height,
	
	centerRecLeft,		//horizontal position of the center rectangles left edge
	centerRecRight, 	//horizontal position of the center rectangles Right edge
	centerRecTop, 		//vertical position of the center rectangles top edge
	centerRecBottom;	//vertical position of the center rectangles bottom edge

	width = (r - l);
	height = (t - b);

	centerRecLeft = l + (width/3);
	centerRecRight = centerRecLeft + (width/3);
	centerRecTop = t - (height/3);
	centerRecBottom = centerRecTop - (height/3);

---

**4)** (_Difficulty: easyish_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N==0 and the bottom-right has N==63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.
	N = (C * 8) + R;

**b)**  Given N, find R.  Write an expression for R which contains N.
	R = Math.floor(N / 8);

**c)**  Given N, find C.  Write an expression for C which contains N.
	C = N % 8;

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N.
(_Hint: If you prefer, you may use a pair of conditional statements instead of a single expression._)
	if ((R % 2) = 0 ) {
		if ((N % 2) = 0){
			color = black;
		} else {
			color = white;
		}
	} else {
		if ((N % 2) != 0) {
			color = black;
		} else {
			color = white;
		}
	}

---

**5)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  For example, when _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.
(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)
	
	var wholeNumber,
		remainder,
		mixedFraction;

	wholeNumber = Math.floor(n/d);
	remainder = n % d;

	if (d == 0) {
		console.log("The result of dividing by 0 is", wholeNumber);
	} else{
		console.log("The mixed fraction is: ", wholeNumber, remainder + "/" + d);	
	}
	

