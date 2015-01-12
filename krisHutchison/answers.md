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
**A:** True - String 1 is converted into a number 1 which is equal to 1.

**b)** `"1" === 1`
**A:** False - String 1 is not absolutely equal to number 1 because they are of different types.

**c)** `x == 'x'`
**A:** Error - Because x is undefined it can't be evaluated against string 'x'.

**d)** `x == (x+'')`
**A:** Error - again, x is undefined so it cannot be evaluated against (x+'').

**e)** `'' == ' '`
**A:** False - Whitespace is included in the second string. They are not equal.

**f)** `x = true`
**A:** Defines x as a variable equal to boolean true.

**g)** `var x; x == 'undefined'`
**A:** False - Var x evaluates to type undefined which is not equal to string 'undefined'

**h)** `'9'<'10'`
**A:** False - strings evaluated as numbers only use the first number so this expression is actually 9 < 1.

**i)** `typeof x + 1 === "number"`
**A:** False - because x is undefined it cannot have 1 added to it which makes x + 1 NaN which is not strictly equal to the string 'number'.

**j)** `typeof x % 2 === "number"`
**A:** False - again, x % 2 is Nan which is not strictly equal to string 'number'.

**k)** `typeof (x % 2) === "number"`
**A:** Error - The parens require x % 2 to be evaluated first which cannot happen because x is undefined.

**l)** `x++ == ++x`
**A:** Error - x is undefined and cannot be evaluated.

**m)** `++x == x++`
**A:** Error - expression terminates at ++x because x is undefined.

**n)** `"1"+x == 1+x`
**A:** Error - expression terminates at "1"+x because x is undefined.

**o)** `"0"+1 == 1`

**A:** True - "0"+1 evaluates to string "01" which is converted to a number when compared to number 1. The leading 0 on the string "01" is dropped.

**p)** `(typeof (x+1))===(typeof x)`	

**A:** Error - (x+1) is evaluated first but x is undefined so the operation terminates.

**q)** `(x*1 == x) || ((typeof x) != "number")`


**A:** Error - the expression is evaluated from within the inner parens. Typeof x is undefined which returns true when evaluated against not string 'number' the operation terminates when it gets to the undefined x on the left side of the expression.

**r)** `(x=(typeof (x+(typeof x))))==x`


**A:** Error - the inner (typeof x) evaluates to "undefined" which is added to x leaving a string 'xundefined' which is typeof string but the first x terminates because it's undefined.

---

All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes.

**2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.
**A:** 
`(x+y+z)/3`

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward their mean.
That is, reset the value of each variable to something based on its previous value.
**A:** 

	x = x-(((x-(x+y+z)/3))*0.5)
	y = ((((x+y+z)/3)-y)*0.5)+y
    z = ((((x+y+z)/3)-z)*0.5)+z

---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.
**A:** 
`(r-l) * (t-b)`

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.
**A:** 
`(t-b) > (r-l)`

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)
**A:** 
`(t-b) > (r-l) ? (r-l) * 3.14 : (t-b) * 3.14`

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.
**A:** 
`(Math.sqrt((Math.pow((t-b), 2) + Math.pow((r-l), 2))) *3.14);`

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)
**A:** 

	leftHorizontal = ((r-l) / 3 ) - l  
	rightHorizontal = ((r-l) /3 ) - r
	bottomVertical = ((t-b) / 3 ) -b
	topVertical = ((t-b) / 3 ) -t 

---

**4)** (_Difficulty: easyish_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N==0 and the bottom-right has N==63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.
**A:** 
`N = (R * 8) + C`

**b)**  Given N, find R.  Write an expression for R which contains N.
**A:** 
`R = N / 8`

**c)**  Given N, find C.  Write an expression for C which contains N.
**A:** 
`C = N % 8`

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N.
(_Hint: If you prefer, you may use a pair of conditional statements instead of a single expression._)
**A:** 
`((n % 2 == 0) && (r % 2 == 0)) ? n="black" : n="white"`

---

**5)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  For example, when _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.
(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)
**A:** 

	whole = Math.floor(n/d); 
	rem = Math.round( n % d ); 
	
	n > d ? whole + " " + rem + "/" + d : n+"/"+d


