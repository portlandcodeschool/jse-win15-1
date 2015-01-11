### Ondine Gallatin

### Homework #1
(Due Monday 1/12)

---

**1)** (_Difficulty: mixed_)
Predict the output of each of the following expressions, and explain the rules which determine it.
If the output depends on the value of x, identify the conditions when the expression will output true.  Assume the cases are independent, and x is reset to an unknown value before each.

Some of these are tricky!  Don't trust your first instinct.  


**a)** `"1" == 1`

Always true. Nonempty string is truthy, and number other than 0 is truthy.

**b)** `"1" === 1`

Always false. The operator is strict equals - the operands must be of the same data type as well as value.

**c)** `x == 'x'`

False. Any x value does not equal x that is a string. True only if x is assigned the value 'x'. (x = 'x')

**d)** `x == (x+'')`

Always true. The value of x is the same as x plus an empty string.

**e)** `'' == ' '`

Always false. An empty string is not the same as a string that contains a spaceband.

**f)** `x = true`

True. Boolean value.

**g)** `var x; x == 'undefined'`

False. The value of x is not been declared, so its value is undefined. The type of x is "undefined".

**h)** `'9'<'10'`

False. Comparing two strings in order from left to right, 9 !< 1.

**i)** `typeof x + 1 === "number"`

Always false. Whatever x is, the result is not a number. If typeof x is "number", still false because without parentheses, typeof x + 1 returns a string "number1".

**j)** `typeof x % 2 === "number"`

Always false. Whatever x is, the result is not a number. If typeof x is "number", still false

**k)** `typeof (x % 2) === "number"`

Always true. Whatever x is, the type of the remainder is a number.

**l)** `x++ == ++x`

Always false. x++ evaluates to unincremented value of x. ++x evaluates to the incremented value of x.

**m)** `++x == x++`

False if x is not a number value. True if x is a number, because the incremented value of x on the left equals the unincremented value on the right.

**n)** `"1"+x == 1+x`

Only true if x is a string. With any other value, type coercion returns a concatenated string "1value".

**o)** `"0"+1 == 1`

True. Type conversion. "0" converts to 0, then addition makes the result true.

Or - "0" as a string is truthy, numbers other than 0 are truthy.

**p)** `(typeof (x+1))===(typeof x)`

True if the value of x is a number, a string or NaN because the type is "number" for both sides.

False if x is a Boolean, undefined, or null because (x + 1) converts its type to "number" while x is a type of "boolean", "undefined", or "object", respectively.

**q)** `(x*1 == x) || ((typeof x) != "number")`

True. If x is a number, then the left side is true. If anything else other than NaN, the typeof x is not a number.

False only if x is NaN, because then the type of x is a number, and the left side is false.

**r)** `(x=(typeof (x+(typeof x))))==x`

Always true. Whatever the left side evaluates to, x is assigned that value, which is equal to x.

---

All of the following can be solved with ordinary expressions and global variables with primitive values. You don't need functions, loops, or other topics beyond our first two classes.

 **2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.

(x + y + z)/3

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward their mean.
That is, reset the value of each variable to something based on its previous value.

```var mean = (x + y + z)/3;
x = (mean-x)/2 + x;
y = (mean-y)/2 + y;
z = (mean-z)/2 + z;```

---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.

var areaRect = (r - l) * (t + b)

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.

if (t + b) > (r - l);
  areaRect == true

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)

var circleCircumference = Math.PI * (r - l)

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

var circleArea = Math.PI * ((r - l)e2 / 2)e2

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)

var mean = (x + y + z)/3;
x = (mean-x)/2 + x;
y = (mean-y)/2 + y;
z = (mean-z)/2 + z;

var l1 = l + ((r - l)/3);
var r1 = r - ((r - l)/3);
var t1 = t + ((b - t)/3);
var b1 = b - ((b - t)/3);

---

**4)** (_Difficulty: easyish_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).



* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N==0 and the bottom-right has N==63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.

**b)**  Given N, find R.  Write an expression for R which contains N.

**c)**  Given N, find C.  Write an expression for C which contains N.

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N.
(_Hint: If you prefer, you may use a pair of conditional statements instead of a single expression._)

---

**5)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  For example, when _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.
(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)
