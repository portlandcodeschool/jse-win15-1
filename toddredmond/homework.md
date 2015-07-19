
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


**a)** `"1" == 1` - True

**b)** `"1" === 1` - false

**c)** `x == 'x'` - If x has not been declared, you receive "ReferenceError: x is not defined" If delcared, the out is false

**d)** `x == (x+'')` - True because all that is add is a blank space, which does not affect the output.

**e)** `'' == ' '` - Outputs to false because the extra space modifies the second input.

**f)** `x = true` - Outputs to true because x was assigned the value of "true".

**g)** `var x; x == 'undefined'` - Outputs to false because the second output cannot be a string in order for this to output to a value of "true"

**h)** `'9'<'10'` - Outputs to false because a string '9' is not less than a string '10'

**i)** `typeof x + 1 === "number"` - Outputs to false because '1' is concatenated to 'x', which would output 'number1', which is not the same as 'number'

**j)** `typeof x % 2 === "number"` - Outputs false because typeof x%2 will output "NaN"

**k)** `typeof (x % 2) === "number"` - Outputs true because the paranthesis cause x%2 to be evaluated first before "typeof" is evaluated.

**l)** `x++ == ++x` - Outputs to false because with x++ the value is incremented, but the existing value is displayed, whereas with ++X, the value is changed and the new value is displayed. 

**m)** `++x == x++` - Outputs true because ++X will increment and output new value, but even though x++ will also increment, it will keep the existing value of x, which will be the same as ++X.

**n)** `"1"+x == 1+x` - Will output to false because the first input will concatenate the values, whereas 1+x will add '1' to the existing value of 'x'.

**o)** `"0"+1 == 1` - Will output to true because '0'+1 and 1 will be close enough, even though the first input is a string and the second is a number. If '===' was used instead, this would evaluate to 'false'

**p)** `(typeof (x+1))===(typeof x)` - Evaluates to true because the parenthesis force (x+1) to process before "typeof" is applied.	

**q)** `(x*1 == x) || ((typeof x) != "number")` - True because (x*1 == x) is true and so whether the next part is true or not, the whole expression is true because || operator was used, which basically equates to "or"

**r)** `(x=(typeof (x+(typeof x))))==x` - True

---

All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes.

 **2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.
var x, y, z, mean;
x=1;
y=2;
z=3;
mean = (x+y+z) / 3;

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward their mean.
That is, reset the value of each variable to something based on its previous value.
mean = (x+y+z) / 3
x = x+mea n;
y = y+mean;
z = z+mean;
---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.
area = (l+r)*(t+b)

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.
(l+r)>(t+b)
**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)
area = (l+r)*(t+b)
circumference = diameter*π
circumference<=area or (diameter*π)<=((l+r)*(t+b))

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.
((sqrt(a2+b2))*π)==((l+r)*(t+b))

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)
var row, column;
row = 2;
column = 2;
center = row && column;


**4)** (_Difficulty: easyish_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N==0 and the bottom-right has N==63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C. N = (R*8)+C

**b)**  Given N, find R.  Write an expression for R which contains N. R = (N-R)/8

**c)**  Given N, find C.  Write an expression for C which contains N. C = N-(R*8)

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N.
(_Hint: If you prefer, you may use a pair of conditional statements instead of a single expression._)
var counter = 0, var color;
while (counter <= 63) {
  if (counter%2===0) {
    color = Black;
  }
  else {
    color = White;
  };
  counter = counter + 1;
}
---

**5)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  For example, when _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.
(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._) 
var n=7, d=4, result;
result = n/d;
result = result%1;
result = result*100;
result = Math.round(result);
common = 100/d;
result = Math.round(result/common);
dem = 100/common;
fraction = result + "/" + dem;
console.log("1 "+ fraction);
