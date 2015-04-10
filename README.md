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
<pre>
True. ==  tries to match types 
</pre>

**b)** `"1" === 1` 
<pre> 
False, not an exact match.
</pre>

**c)** `x == 'x'`
<pre> 
True, types converted. 
</pre>

**d)** `x == (x+'')`
<pre> 
True, for numbers, I feel like it should be true in general, buts its not! 
</pre>

**e)** `'' == ' '`
<pre> 
False, that is an empty string and not equal to anything. 
</pre>

**f)** `x = true`

<pre> 
that is an assignment operator, so x is equal to true now. 
</pre>
**g)** `var x; x == 'undefined'`

<pre> 
with no definition, x is technically undefined, the number, not the string. 
</pre>
**h)** `'9'<'10'`

<pre> 
True
</pre>
**i)** `typeof x + 1 === "number"`

<pre>
this will always includde a string value, so it is false. 
</pre>
**j)** `typeof x % 2 === "number"`

<pre> 
false in all cases, since a % operator is invalid on a non-number, and will throw a NaN. 
</pre>
**k)** `typeof (x % 2) === "number"`
<pre> 
True, if x is a number. False otherwise.
</pre>

**l)** `x++ == ++x`
<pre> 
Always false, since the increment comes after the variable. 
</pre>

**m)** `++x == x++`
<pre> 
True for numbers. 
</pre>


**n)** `"1"+x == 1+x`
<pre> 
true id x is a string. 1James == 1James
</pre>

**o)** `"0"+1 == 1`
<pre> 
true. == will try and makes this work. 
</pre>

**p)** `(typeof (x+1))===(typeof x)`	
<pre> 
true if X is a number, or a string. Nothing else. 
</pre>

**q)** `(x*1 == x) || ((typeof x) != "number")`
<pre> 
</pre>

**r)** `(x=(typeof (x+(typeof x))))==x`
<pre> 
We are assigning a value to X, so it is always true. 
</pre>

---

All of the following can be solved with ordinary expressions and global variables with primitive values.  You don't need functions, loops, or other topics beyond our first two classes.

 **2)** (_Difficulty: easy_)

Assume variables x, y, and z are numbers.

**a)**
Write an expression for the mean (i.e. average) of x, y, and z.

<pre>
I did both below. 
</pre>
**b)**
Write a series of expressions to adjust each of x, y, and z halfway toward their mean.
That is, reset the value of each variable to something based on its previous value.

<pre> 
function problem2b() {

    var x = 3;
    var y = 4;
    var z = 5;

    var m = (x+y+z) / 3;

    x += (m-x)/2;
    y += (m-y)/2;
    z += (m-z)/2;

};
</pre>
---

**3)** (_Difficulty: easyish_)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

- _l_ : horizontal position of left edge;
- _r_ : horizontal position of right edge;
- _t_ : vertical position of top edge;
- _b_ : vertical position of bottom edge.

**a)**
Write an expression for the rectangle's area.


**b)**
Write an expression which is true if the rectangle is taller than it is wide, and false otherwise.


**c)**
Write an expression for the circumference of the biggest circle which can fit inside the rectangle.  (Hint: you'll need logic similar to that in **b**.)

**d)**
Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

**e)**
Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position.
Define four new variables describing the centermost small rectangle.
(_Hint: one of the many solutions is very similar to the solution of **2b** above._)
<pre> 
function problem3() {
    //3a
    var width = r - l;
    var height = b - t;
    var area = width * height;    



    //3b
    var isTallerThanWide = height > width;

    //3c
   

   //3d
    var smallestRadius = Math.min(width,height) / 2;
    var smallestCircleArea = ((smallestRadius*MathPI)*(smallestRadius*MathPI))
 
   //3e)
    var widthUnit = width / 3;
    var heightUnit = height / 3;

    var cl = l + widthUnit;
    var cr = r - widthUnit;
    var ct = t + heightUnit;
    var cb = b - heightUnit;
};

</pre>

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

<pre>
    var width = 8;     //width (and height) of checkerboard
    var r = 2;      //arbitrary row
    var c = 3;      //arbitrary column

    //3a
    var n = (r * width) + c;

    //3b
    var findR = Math.floor(n/width);
    //3c
    var findC = n % width;

    //3d
    var isBlack = (n % 2) == (r % 2); //if the number and row are BOTH odd or BOTH even, the square is black.
    var isWhite = (n % 2) !== (r % 2); //number and row are opposite parity

    var isWhite2 = (n % 2) !== (Math.floor(n/width) % 2 );
    var isBlack2 = (n % 2) == (Math.floor(n/width) % 2 );
}

</pre>

**5)** (_Difficulty: moderate_)

Suppose you represent a fraction (_n/d_) with 2 integer variables: _n_ for the numerator and _d_ for the denominator.
If _n_ is greater than _d_, the fraction is "improper", but it can be rewritten as a proper fraction.  For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction _n/d_.  For example, when _n==7_ and _d==4_, your resulting string should be "1 3/4".  You may assume both _n_ and _d_ are positive integers and _n_ > _d_, but otherwise you should be able to handle any values of _n_ and _d_.
(_Hint: you'll need the modulo operator _%_, and you'll probably want to create a couple of extra variables._)

<pre> 
    var n = 7;
    var d = 4;

    var output = "";

    var w = Math.floor(n/d);

    if( w > 0) {
        output += w + " ";
    }

    var nn = n % d;

    if(nn > 0) {
        output += nn + "/" + d;
    }

    console.log(output);
}
</pre>

