
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
>True. The value of the string and the value of the number are equivalent. 

**b)** `"1" === 1`
>False. The values are the same but they are not the same AND of the same type. 

**c)** `x == 'x'`
>False. The first is a variable and the second is a string of 'x'. The variable could hold any value. This would be true if the value of x was "x"

**d)** `x == (x+'')`
>True. Adding an empty string concatenates nothing to the variable. This leaves it unchanged. 

**e)** `'' == ' '`
>False. The first value is empty but the second contains a space. 

**f)** `x = true`
>True. We are assigning a boolean true. So it returns the truth. 

**g)** `var x; x == 'undefined'`
>False. 'var x' does not assign a value, so x retains whatever unknown value it previously had. "x == 'undefined'" is a string. So this will only be true if x = 'undefined' (not the same as x = undefined).

**h)** `'9'<'10'`
>False. Because these are strings it evaluates the first character and then quits. Since 9 > 1 it decides that the boolean is false.

**i)** `typeof x + 1 === "number"`
>False. Without parentheses this will return number1 and interpret these as two separate elements. The parentheses are required for the console to interpret them as a unit. 

**j)** `typeof x % 2 === "number"`
>False. For the same reason as above.

**k)** `typeof (x % 2) === "number"`
>True. The parentheses allow the equation to be performed before the typeof registers. (Question about why it isn't true with just number without quotes)

**l)** `x++ == ++x`
>False. In the first instance the value of X is determined before the addition but in the second instance X is evaluated after. 

**m)** `++x == x++`
>True. If X is a number value the addition takes place after the comparison. If the value of x is not a number this will be false.

**n)** `"1"+x == 1+x`
>False. If X is a number it will concatenate the first pair and add the second. If X is a string it will contcatenate both sides and be true.

**o)** `"0"+1 == 1`
>True. "0" is interpreted as a number, and 1+0=1

**p)** `(typeof (x+1))===(typeof x)`	
>If X is a number, string or NaN it evaluates to true. False if X is a boolean, undefined, or null. The console registers (x+1) as a number. 

**q)** `(x*1 == x) || ((typeof x) != "number")`
>True unless X is NaN. If X is NaN both sides are false, but for all other value types at least one side of the statement will be true.
**r)** `(x=(typeof (x+(typeof x))))==x`
>True. You are assigning X to be something and then checking to see if X is equal to it. The answer will always be true. 
---

All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes.

 **2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.
>(x + y + z) / 3

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward their mean.
That is, reset the value of each variable to something based on its previous value.

>var mean = (x + y + z) / 3;
x = x + (mean/2 - x);
y = y + (mean/2 - y);
z = z + (mean/2 -z);
---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.
>(Not sure that I understood the placement of the variables) 
var
var area = (t - b) * (r - l)

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.
>(t - b) > (r - l)

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)
>if ((t - b) > (r - l)); {
	var maxCircumference = 3.14 * ((r - l)/2); 
	} else {
		var maxCircumference = 3.14 * ((t - b)/2);
	}

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)

---

**4)** (_Difficulty: easyish_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N==0 and the bottom-right has N==63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.
>var N = (R * 8) + (C);

**b)**  Given N, find R.  Write an expression for R which contains N.
>var R = (N - C)/8;
Pretty sure I got this one wrong.

**c)**  Given N, find C.  Write an expression for C which contains N.
>Var C = N % 8;

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N.
(_Hint: If you prefer, you may use a pair of conditional statements instead of a single expression._)
>if (N % 2 = 0) {
+	var color =  black
+	} else {
+	var color = white}

---

**5)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  For example, when _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.
(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)
