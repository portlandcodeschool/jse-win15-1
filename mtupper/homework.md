### Homework #1

(Due Monday 1/12)

---

**1)** (_Difficulty: mixed_)
Predict the output of each of the following expressions, and explain the rules which determine it.
If the output depends on the value of x, identify the conditions when the expression will output true.  Assume the cases are independent, and x is reset to an unknown value before each.

Some of these are tricky!  Don't trust your first instinct.

**a)** `"1" == 1`<br />
> **true** - string 1 is "similar enough" to number 1<br />

**b)** `"1" === 1`<br />
> **false** - string 1 is, strictly speaking, not the same as number 1<br />

**c)** `x == 'x'`<br />
> **false** - the only way to make this true would be to declare a variable x with a value of the string 'x'<br />
> `var x = "x"`<br />

**d)** `x == (x+'')`<br />
> **true** - since adding nothing (empty string `''`) to the variable x won't change its value<br />

**e)** `'' == ' '`<br />
> **false** - because an empty string is not the same as a string consisting of a space character<br />

**f)** `x = true`<br />
> **true** - since we just set the value of x equal to true, it is indeed true<br />

**g)** `var x; x == 'undefined'`
> **false** - while it was not assigned a value, the variable x has been defined, same as assigning value `''`<br />

**h)** `'9'<'10'`<br />
> **false** - because they are both a `"string"`, strings are ordered alphabetically (1 before 9) and therefore, 10 comes before 9<br />

**i)** `typeof x + 1 === "number"`<br />
> **false** - ```typeof x + 1``` returns "number1", adding 1 to the result of typeof x<br />

**j)** `typeof x % 2 === "number"`<br />
> **false** - ```typeof x % 2``` returns NaN because it is the same as ```"number" % 2```<br />

**k)** `typeof (x % 2) === "number"` <br />
> **true** - makes sense when x is already a number
>
> ```javascript
> var x = 4;
> typeof (x % 2); // returns "number"
> ```
> However, I am not clear why this `typeof` returns `"number"`
>```javascript
> var x = "text";
> (x % 2); // returns NaN, but...
> typeof (x % 2); // returns "number"
>```

**l)** `x++ == ++x`
> **false** - value of x is returned and then incremented and incremented again before being compared to the new value of x
>
> ```javascript
> var x = 1;
> var y = x++; // y = 1, x = 2
> var z = ++x; // z = 3, x = 3
> y == z; // is false
> ```

**m)** `++x == x++`
> **true** - value of x is incremented and returned, new value of x is compared to x (true), then incremented.
>
> ```javascript
> var x = 1;
> var y = ++x; // y = 2, x = 2;
> var z = x++; // z = 2, x = 3;
> y == z; // is true
> ```

**n)** `"1"+x == 1+x`
> **false** - treats addition of strings different from addition of integers
>
> ```javascript
> var x = 4;
> "1" + x; // returns "14"
>
> var x = 4;
> 1 + x; // returns 5
>
> "14" == 5; // returns false
> ```

**o)** `"0"+1 == 1`
> **true** - will convert strings to numbers for comparison with non-strict (==) equality
> ```javascript
> "0" + 1; // returns "01"
>
> "01" == 1; // returns true
> ```

**p)** `(typeof (x+1))===(typeof x)`
> **true** - comparing `"numbers"`
> ```javascript
> var x = 4;
> (typeof (x + 1)); // is same as (5) and returns "number"
> (typeof x); // is same as 4 and also returns "number"
> ```

**q)** `(x*1 == x) || ((typeof x) != "number")`
> **true** - since `(x*1 == x)` evaluates to true, second statement is optional (or `||`), it returns true without needing to evaluate the second statement

**r)** `(x=(typeof (x+(typeof x))))==x`
> **true** - the statement on the left with always result in `"string"` first and then compare it to itself

---

All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes.

 **2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.<br />
> ```javascript
> var avg = (x+y+z)/3;
> ```

**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward their mean.
That is, reset the value of each variable to something based on its previous value.

> ```javascript
> var avg = (x+y+z)/3;
> var x += (avg-x)/2;
> var y += (avg-y)/2;
> var z += (avg-z)/2;
> ```

---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.

> ```javascript
> var w = (r - l),
>     h = (t - b),
>     a = w * h;
> ```

**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.

> ```javascript
> var w = (r - l),
>     h = (t - b);
>
> if ( h > w );
> ```

**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)

> ```javascript
> var w = (r - l),
>     h = (t - b);
>
> if ( h > w ) {
>     r = (w / 2);
> }
> else {
>     r = (h / 2);
> };
>
> C = (2 * Math.PI * r);
> ```

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

> ```javascript
> var w = (r - l),
>     h = (t - b);
>
> r = Math.sqrt( Math.pow((w / 2), 2) + Math.pow((h / 2), 2) );
>
> C = (2 * Math.PI * r);
> ```

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)

> ```javascript
> // PENDING - just a placeholder
> var w = ((r - l) / 3),
>     h = ((t - b) / 3);
>
> ~~r = Math.sqrt( Math.pow((w / 2), 2) + Math.pow((h / 2), 2) );~~
>
> ~~C = (2 * Math.PI * r);~~
> ```

---

**4)** (_Difficulty: easyish_)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

* Each square has integer coordinates _(R,C)_ describing its row and column.  Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

* Each square has a unique integer number N from 0 to 63.  These numbers run sequentially left-to-right one row at a time, top to bottom.  Therefore the upper-left square has N==0 and the bottom-right has N==63.

**a)**  Given a particular R and C, find the corresponding N.  That is, write an expression for variable N containing variables R and C.

> ```javascript
> var r,
>     c;
>
> var n = r + (c * 8);
>```

**b)**  Given N, find R.  Write an expression for R which contains N.

>```javascript
> var n;
> var r = n % 8;
>```

**c)**  Given N, find C.  Write an expression for C which contains N.

>```javascript
> var n;
> var c = (n - (n % 8)) / 8;
>```

**d)**  Assume the squares are colored black and white, with the upper-left square black.
Write an expression to set a variable _color_ to either 'black' or 'white', describing the square identified by variables R,C, and N.
(_Hint: If you prefer, you may use a pair of conditional statements instead of a single expression._)

>```javascript
> // PENDING - just a placeholder
> var n;
> var r = n % 8;
>```


---

**5)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  For example, when _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.
(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)

> ```javascript
> var n,
>     d;
>
> var i = (Math.floor(n/d)).toString(),
>     n = (n % d).toString(),
>     d = d.toString(),
>     pf = i + " " + n "/" + d;
> ```