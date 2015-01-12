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
	true, number and string 1 are similar enough, js vill convert the string into number

**b)** `"1" === 1`	->	false, string 1 and number one are not equal

**c)** `x == 'x'` -> error, x is not defined; true if x = 'x'

**d)** `x == (x+'')`	->	error, x is not defined; true if x is a number, false if x is a string	

**e)** `'' == ' '`	-> false, string 2 space is not the same value as string space, differ in length 

**f)** `x = true` 	-> true, the value of x becomes true, a boolean

**g)** `var x; x == 'undefined'` ->	 false, x is undefined type, not the string 'undefined'

**h)** `'9'<'10'` 	-> false, js compares the first numbers that it converted from the strings.

**i)** `typeof x + 1 === "number"` 	-> false, typeof x + 1 is "undefined1", true if x got defined earlier as a number

**j)** `typeof x % 2 === "number"`	 -> false, typeof x is "undefined", %2 is Nan (unless x was defined earlier

**k)** `typeof (x % 2) === "number"` -> error, x not defined, if x was defined as a number relier, it's true

**l)** `x++ == ++x` ?

**m)** `++x == x++` ?

**n)** `"1"+x == 1+x` ->	if x is a defined number, false, because 1x doesn't equal 1+x (i.e. x=1, 11!=2)

**o)** `"0"+1 == 1` -> true, 01 is similar enough to 1

**p)** `(typeof (x+1))===(typeof x)` -> 	if x vas defined as a number or string, true "number"+"number" and "string"="string"	

**q)** `(x*1 == x) || ((typeof x) != "number")` -> if x defined, true. A)if x is a string, a*1 is Nan, Nan == x is false, so it"s true that its not a number. B) if x is a number, true or number is true, not number C) if its a boolean, also can never be a number, so !="number" can never be false.

**r)** `(x=(typeof (x+(typeof x))))==x` -> (typeof x) string, x will always be string, no matter what is was before.

---

All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes.

 **2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.

var mean = (x+y+z)/3

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward their mean.
That is, reset the value of each variable to something based on its previous value.

var mean = (x+y+z)/3

x = x + (mean/2 - x)

y = y + (mean/2 - y)

z = z + (mean/2 -z)

 

---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.

var area = (r-l) * (b-t)

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.

(r-l) < (b-t) = true

(r-l) > (b-t) = false


**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)

if ((r-l) < (b-t)){

circumference = (r-l)/2*2*3.14

} else {

circumference = (b-t)/2*2*3.14
)

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

if ((r-l) < (b-t)){

circle = ((b-t)*(b-t) - (r-l)*(r-l))*3.14

} else {

circle = ((r-l)*(r-l) - (b-t)*(b-t))*3.14
}

or 
(r-l) < (b-t)*(b-t) - ((r-l)*(r-l))*3.14 : ((r-l)*(r-l) - (b-t)*(b-t))*3.14; 

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)

lSmall = l + (r-l)/3

rSmall = r - (r-l)/3

tSmall = t + (b-t)/3

bSmall = b - (b-t)/3

---

**4)** (_Difficulty: easyish_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N==0 and the bottom-right has N==63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.

N = (R*8) + C

**b)**  Given N, find R.  Write an expression for R which contains N.

R = Math.floor(N/8) (the integers of the division)

**c)**  Given N, find C.  Write an expression for C which contains N.

 C = N % 8

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N.
(_Hint: If you prefer, you may use a pair of conditional statements instead of a single expression._)

if (N % 2 = 0) {

var color =  black

} else {

	var color = white}

or

N % 2 == 0 ? color='black' : color='white'; 

---

**5)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  For example, when _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.
(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)

var calc = n / d
var integer = Math.floor(n/d)
var fract = (%(n/d))/d

var calc = integer + fract
