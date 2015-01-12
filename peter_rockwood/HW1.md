
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

	True, type-converting equality.     					

**b)** `"1" === 1`

	False, strict equality.    					

**c)** `x == 'x'`  

	True if the value of x is 'x', otherwise false.   					

**d)** `x == (x+'')`  

	True, the empty string is ignored.					

**e)** `'' == ' '`	

	False, a space counts as a character in a string.					

**f)** `x = true`

	True, this is just the value 'true' assigned to x, which returns 'true'.						

**g)** `var x; x == 'undefined'`

	False, an initialized, but unassigned variable has the value and returns 'undefined',
	but does not have the value of the string 'undefined'		

**h)** `'9'<'10'`	

	False, no type-conversion for inequalities.					

**i)** `typeof x + 1 === "number"`	

	False, typeof x gets evaluated first returning a string then adding 1.	

**j)** `typeof x % 2 === "number"`	

	False, typeof x gets evaluated first returning a string and then applying modulus.	

**k)** `typeof (x % 2) === "number"`	

	True if x happens to be assigned a number.

**l)** `x++ == ++x`	

	False, x++ returns x previous to the add, ++x returns x after the add.

**m)** `++x == x++`	

	True, ++x returns x+1 and assigns it to x. x++ returns the 							same, new value of x. 

**n)** `"1"+x == 1+x`	

	False, "1"+x prepends '1' onto number value x, which will increase the order of x by 1 and never be equal to x+1.				

**o)** `"0"+1 == 1`							

	True, prepending a zero onto 1 still evaluates to 1.

**p)** `(typeof (x+1))===(typeof x)`		

	True, if x is a number. Also true if x is a string, (x+1) will convert x to a string before the expression on the right is evaluated.

**q)** `(x*1 == x) || ((typeof x) != "number")`	

	False, if x is a number, the first condition is true, but the 
	second condition is false. If x is not a number the same holds 
	true vice-versa.

**r)** `(x=(typeof (x+(typeof x))))==x`		

		True, x is first assigned, in this case as a string, and then tested for equality with itself.		


---

All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes.

 **2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.

	var mean = (x+y+z)/3;

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward their mean.
That is, reset the value of each variable to something based on its previous value.

	x = x + ((mean - x)/2);
	y = y + ((mean - y)/2);
	z = z + ((mean - z)/2);

---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.

	Var area = (r - l)*(t - b);

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.

	(t - b) > (r - l)

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)

	if((t - b) > (r - l))
		return (t - b) * Math.PI;
	else
		return (r - l) * Math.PI;


**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

	var diameter = Math.sqrt(Math.pow((r - l), 2) + Math.pow((t - b), 2);
	var circleArea = Math.PI * Math.pow((0.5 * diameter), 2);


**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)

var thirdXlength = (r - l)/3;
var thirdYlength = (t - b)/3;

var small_l = l + thirdXlength;
var small_r = r - thirdXlength;
var small_t = t + thirdYlength;
var small_b = b - thirdYlength;

---

**4)** (_Difficulty: easyish_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N==0 and the bottom-right has N==63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.

	var findN = (R * 8) + C;

**b)**  Given N, find R.  Write an expression for R which contains N.

	var findR = Math.floor(N / 8);

**c)**  Given N, find C.  Write an expression for C which contains N.

	var findC = N % 8;

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N.
(_Hint: If you prefer, you may use a pair of conditional statements instead of a single expression._)

	if(N % 2 === 0 ){
		var color = 'black'
	}
	else {
		var color = 'white'
	}

	-or using R and C

	if((R * 8 + C) % 2 === 0 ){
		var color = 'black'
	}
	else {
		var color = 'white'
	}

---

**5)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  For example, when _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.
(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)


var wholeNumber = Math.floor(n/d);

var numerator = n % d;

var properFraction = wholeNumber.toString() + " " + numerator.toString() + "/" + d.toString();











