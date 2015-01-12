1) (Difficulty: mixed) Predict the output of each of the following expressions, and explain the rules which determine it. If the output depends on the value of x, identify the conditions when the expression will output true. Assume the cases are independent, and x is reset to an unknown value before each.

Some of these are tricky! Don't trust your first instinct.

a) "1" == 1 - True because this does not check for the var types.

b) "1" === 1 - Flase, the === checks that both type (string, NUmber) and value are identical.

c) x == 'x' - If X is a number this will be true.

d) x == (x+'') - True, Adding an empty string to a variable will convert it to a string which is true.

e) '' == ' ' -  True, a string with one space is equal to a string with one space

f) x = true - True, x is assigned true, so x is true.

g) var x; x == 'undefined' - False, undefined and 'undefined' are not the same thing.

h) '9'<'10' - False, Javascript reads the first number for comparison so 9 is not smaller than 1.

i) typeof x + 1 === "number" - True if x is a number false if x is a string.

j) typeof x % 2 === "number" - True is x is a number that results in a number, otherwise false.

k) typeof (x % 2) === "number" - True, you either get a number, or NaN which returns typeof "Number".

l) x++ == ++x - False because by the time you get to ++x the original x is one number larger.

m) ++x == x++ - True, because x was increased and then compared to an increase in x.

n) "1"+x == 1+x - When there is a plus things are converted to string, if the second x is number this would be false, if it's a string this will be true.

o) "0"+1 == 1 - True, 01 and 1 are the same.

p) (typeof (x+1))===(typeof x) - True because if x is a number it will be a number type on both sides, if it;s a string it will be a string type both places.

q) (x*1 == x) || ((typeof x) != "number") - If x is a number you will get true you will get true otherwise this is false.

r) (x=(typeof (x+(typeof x))))==x - True after you are doing the typeof calculation you are assigning it to x so yes x will equal x.

All of the following can be solved with ordinary expressions and global variables with primitive values. You don't need functions, loops, or other topics beyond our first two classes.

2) (Difficulty: easy)

Assume variables x, y, and z are numbers.

a) Write an expression for the mean (i.e. average) of x, y, and z. -  var mean = (x + y + z) / 3

b) Write a series of expressions to adjust each of x, y, and z halfway toward their mean. That is, reset the value of each variable to something based on its previous value. 

Use the mean variable from part a, 
x = x + mean / 2; 
y =y + mean / 2;
z = z + mean / 2;
	

3) (Difficulty: easyish)

Suppose you're encoding geometric shapes in a Cartesian (2D) coordinate system, and you represent a rectangle with four numeric variables:

    l : horizontal position of left edge;
    r : horizontal position of right edge;
    t : vertical position of top edge;
    b : vertical position of bottom edge.

a) Write an expression for the rectangle's area. - a = (r - l) * (t - b)

b) Write an expression which is true if the rectangle is taller than it is wide, and false otherwise. - (t - b) > (r - l)

c) Write an expression for the circumference of the biggest circle which can fit inside the rectangle. (Hint: you'll need logic similar to that in b.) - 

var width = (r - l);
var height = (t - b);
var diameter;
 
if (width > height) 
	diameter = Math.PI height;
		else
  	diameter = Math.PI width;


d) Write an expression for the area of the smallest circle which completely encloses (i.e. circumscribes) the rectangle.

r2 = width/2 + height/2

e) Imagine subdividing your rectangle into 3 equal rows and 3 equal columns, which would create 9 smaller rectangles, identical in shape but varying by position. Define four new variables describing the centermost small rectangle. (Hint: one of the many solutions is very similar to the solution of 2b above.)

4) (Difficulty: easyish)

Imagine that the squares of an ordinary checkerboard are numbered in two different ways:

    Each square has integer coordinates (R,C) describing its row and column. Both values should be in the range 0..7, so that the upper-left square is at (0,0) and the bottom-right is at (7,7).

    Each square has a unique integer number N from 0 to 63. These numbers run sequentially left-to-right one row at a time, top to bottom. Therefore the upper-left square has N==0 and the bottom-right has N==63.

a) Given a particular R and C, find the corresponding N. That is, write an expression for variable N containing variables R and C.
	N = R * 8 + C

b) Given N, find R. Write an expression for R which contains N.
	R = Math.floor(N / 8);

c) Given N, find C. Write an expression for C which contains N.
	C = N % 8. Since there are 8 columns mod by 8 will tell you which column you're on.

d) Assume the squares are colored black and white, with the upper-left square black. Write an expression to set a variable color to either 'black' or 'white', describing the square identified by variables R,C, and N. (Hint: If you prefer, you may use a pair of conditional statements instead of a single expression.) -  I have no idea.


5) (Difficulty: moderate)

Suppose you represent a fraction (n/d) with 2 integer variables: n for the numerator and d for the denominator. If n is greater than d, the fraction is "improper", but it can be rewritten as a proper fraction. For example, "7/4" is improper, but it can be rewritten as "1 3/4", which is proper.

Write an expression for a string expressing the proper form of an improper fraction n/d. For example, when n==7 and d==4, your resulting string should be "1 3/4". You may assume both n and d are positive integers and n > d, but otherwise you should be able to handle any values of n and d. (Hint: you'll need the modulo operator _%, and you'll probably want to create a couple of extra variables._)

n = 7;
d =4;
x = n % d;
_ + "" + x + "/" d

