
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

True - Due to the == not looking for an exact similarity, but a 'truthiness'.
Console says: True

**b)** `"1" === 1`

False - 3 ==='s are looking for a 100% match, and string 1 is not exactly the same as number 1.
Console says: False

**c)** `x == 'x'`

True - Again, because double ='s are looking to see a close fit, rather than an exact match, and x is similar to string x. Moreover, javascript will turn x into a string in an effort to 'help out'
Console says: Uncaught (x is not defined)
After defining x as 1, console says: false, my assumption being that variable x is not == string x.

**d)** `x == (x+'')`

True - Because '' is considered an empty string and thus nothing, leaving x to be evaluated to itself.
Console says: True (x defined as 1, otherwise says undefined)

**e)** `'' == ' '`

False - In this case '' is an empty string, whereas ' ' actually contains content, in this case a space.
Console says: False


**f)** `x = true`

True - Because you are declaring x as true.
Console says: True

**g)** `var x; x == 'undefined'`

False - In the first step a variable, x, has been defined.
Console says: false (because of why I say, I'm not so sure)

**h)** `'9'<'10'`

True - javascript will look at these strings as numbers for the operator
Console says: false. Because in retrospect, javascript looks at the first digit in the string, rather than the string as a whole. Essentially this turns into 9<1, which is false.

**i)** `typeof x + 1 === "number"`

If x has been defined earlier as a number, this will output True.
Console says: False. After tinkering around with what typeof x + 1 is on its own (after declaring x = 1), it retrieved "number1". So the console is actually adding a 1 to the type of x, which of course is not ultimately === "number"


**j)** `typeof x % 2 === "number"`

Similarly, if x has been defined earlier as a number, this will output True.
Console says: False. I assume for the same reasons that I was wrong on the last example. I think the next example should still be true, however, because it is evaluating the typeof everything in the ()'s rather than the first thing it encounters.


**k)** `typeof (x % 2) === "number"`

Again, the same as i and j.
Console says: True (though not by being the same as i and j!)

**l)** `x++ == ++x`

True, because though x (assuming it is a number) will output a different number on the console if these are placed in individually, they both store the same value in javascript. It is more a matter that x++ reflects the value of x and then adds one afterwards, while ++x adds one and then reflects its new value.
Console says: False. I believe false because the order of operations is different and so the are not precisely equivalent, though I would have expected true with just double ='s. Perhaps my next prediction should have been false as well then.

**m)** `++x == x++`


True, because though x (assuming it is a number) will output a different number on the console if these are placed in individually, they both store the same value in javascript. It is more a matter that x++ reflects the value of x and then adds one afterwards, while ++x adds one and then reflects its new value.
Console says: True. This is just a pile of nopes to me. I'll have to look at this again.

**n)** `"1"+x == 1+x`

True - Because of double ='s string 1 is seen as number 1 and added against x. This supposes x has been defined as a number.
Console says: False. "1" == 1, and x == x, but "1"+x != 1+x. Perhaps the gaze of javascript does not squint through expressions.

**o)** `"0"+1 == 1`

True - Similar to above. In this case 0 is treated as a number, and added to 1 remains 1 and thus == 1.
Console says: True. Though for my own logic..?

**p)** `(typeof (x+1))===(typeof x)`	

If x is defined as a number, typeof should evaluate x as a number, and thus both sides of typeof should evaluate True. If x is a string number, or a string, it will evaluate false.
Console says: True

**q)** `(x*1 == x) || ((typeof x) != "number")`

If x is a number, this will evaluate as True. This is because the ||(or) operator will evaluate the leftmost expression as True, and will not move on to the second expression, as its requirements have already been met.
Console says: True

**r)** `(x=(typeof (x+(typeof x))))==x`

True - At the end of all of this, x remains x, equal to x.
Console says: True.

---

All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes.

 **2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.

(x+y+z)/3;

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward their mean.
That is, reset the value of each variable to something based on its previous value.

a = (x+y+z)/3;
x = x*(a/x);
y = y*(a/y);
z = z*(a/z);

---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.

var area = (t - b) * (r - l);

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.

(t - b) > (r - l);

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)

(t - b) > (r - l) ? 2 * 3.14 * ((r - l) * 0.5) : 2 * 3.14 * ((t - b) * 0.5); 

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

(t - b) > (r - l) ? 2 * 3.14 * ((t - b) * 0.5) : 2 * 3.14 * ((r - l) * 0.5);

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)

var tm = t*0.75; 
var bm = b*1.25;
var rm = r*0.75;
var lm = l*1.25;

---

**4)** (_Difficulty: easyish_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N==0 and the bottom-right has N==63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.

var N = (R * 8) + C

**b)**  Given N, find R.  Write an expression for R which contains N.

var R = Math.floor(N/8)

**c)**  Given N, find C.  Write an expression for C which contains N.

var C = (N % 8)

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N.
(_Hint: If you prefer, you may use a pair of conditional statements instead of a single expression._)

var color;
((R + C) % 2) == 0 ? color = 'black' : color = 'white';

---

**5)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  For example, when _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.
(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)

n = 9
d = 4
var rem = n % d
n > d ? console.log(Math.floor(n/d) + " " + rem + "/" + d) : console.log(n + "/" + d)
