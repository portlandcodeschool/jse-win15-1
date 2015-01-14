//ecxercise #1

//a)
"1" == 1 /*Output: Always True The operand "==" represents Equal To. Because, javascript will try to help and convert the string "1" to 1 the output will be true.*/

//b)
"1" === 1 /*Output: Always False The operand "===" represents Equal Value and Equal Type. Unlike, "1"==1, where there is a type conversion, this operand is checking for equality. This operand is more precise than the equal to operand and therefor the better choice when checking for a more precise equality.*/

//c) --- Incorrect 
x == 'x' /*Output:true when x equals a number or a string Javascript will convert 'x' to a number; however, if x equals an object or undefined then the output is false*/

//correct answer - false UNLESS x is literally string 'x'

//d)
x == (x+'')

number == (number + '') /*Output:True  When x equals a number the first x converts to a string. */

null == (null+'') /*Output:False Null is an object and javascript does not know how to add an object to a string. */

undefined == (undefined + '') /*Output:false Undefined is "Undefined" and javascript does not know hot interpret undefined + string.*/

"string" == ("string" + '') /*Output:true a string is equal to a string*/


//e) 
'' == ' ' /*Output:false because the two strings differ in space. */

//f)
x = true /*Output: true because x is being declared as true.*/

//g) 
var x; x == 'undefined' /*Output: false because the variable x is declared, and although a value has not been assigned x is like ''. Therefore x does not equal 'undefined'*/

//h)
'9'<'10' /*Output:false because javascript is converting the first digits to numbers, therefore 9<1 is false */


//i) 
typeof x + 1 === "number" /*Output: always false because the operand "===" checks for equal value and in this operation "number" which is a string can not be of equal value to x + 1*/

//j) 

typeof x % 2 === "number" /*Output: always false because the operand "===" checks for equal value and in this operation "number" which is a string can not be of equal value to x mod 2 in any givin situation*/

//k) 

typeof (x % 2) === "number" /*Output: always true because the order of operations is to first calculate the mod in parenthesis and then check for equality. Therefore, if x is equal to 1 (1%2) === "number", 1 === "number":true*/

//l) 

x++ == ++x /*Output: always false because x++ returns x, then increments it and ++x increments x, and then returns it. Therefor, if x equals on 1++ == ++1 would evaluate to 1++ == 3 which is false. */ 
var x =1;
++x == x++
1 == 3
false
//m) 

++x == x++ /*Output: always true because ++x increments x, and then returns it. x++ returns x, then increments it. Therefore: */
var x = 1;
++x == x++
2==2
true

//n) ---- incorrect 
"1"+x == 1+x /*Output: false because if x=1, "1"+x will evaluate to 11 and 1 + 1 will evaluate to 2. Therefore, x=1; "1"+1 == 1+x; 11 == 2; false*/

/*correct answer - true when x is any string:
 '1'+x == 1+x
    '1'+'****' == 1+x
    '1****' == 1+x
    '1****' == '1****' */

//o) 
"0"+1 == 1 /*Output: true because "0"+1 will evaluate to 1, and 1 == 1 is true*/

//p) 
(typeof (x+1))===(typeof x) /*Output: true with the exception of when x is equal to null, undefined, or boolean */

//q) 
(x*1 == x) || ((typeof x) != "number") /*Output: true because when x equals 1 this evaluates to (1*1 == 1) true || ((typeof 1) != "number") false. The|| denotes logical or. It produces true if either of the values given to it is true.*/ 

/* side note true unless x is Nan*/

//r) ------------- not correct! 
(x=(typeof (x+(typeof x))))==x /*Output: Always true*/
x=1;
(1=(typeof (1+(typeof 1))))==1
(1=(typeof (1+("number"))))==1
(1=("number"))==1

/* Correct answer 
 true.  For any x, this becomes:
    (x=(typeof (x+'*****')))==x
    (x=(typeof 'x*****'))==x
    (x='string') == x
    'string' == 'string' */

//Excercise #2

//a)
var y = 2,x = 4,z = 6,total = 3;
var calc = ((y+x+z)/total);
console.log(calc);

//b)  not correct 
var y = (calc/2), x = (calc/2), z = (calc/2), total = total;
var calc = ((y+x+z)/total);
console.log(calc);

/* Correct answer 
var mean  = (x+y+z/3);
x = (x+mean)/2;
y = (y+mean)/2;
z = (z+mean)/2;

or 

x+= (mean-x)/2;
y+= (mean-y)/2;
z+= (mean-z)/2;

*/


//Excercise #3
//a) calculating the area of the rectangle 
var t = 20
var b = 2; 
var l = 2; 
var r = 12;

var h = (t - b); 
var w = (r - l);
console.log(h && w);
var a = (h*w);
console.log("The area of the rectangle is " + a);

//b) checking if the height is greater than the width
if (h>w) {
    console.log("It is true that the height of the rectangle is greater then the width");
} else {
    console.log("false");
};

//c) C=2πr calculating the circumference of the circle --- need to study 
var r = (h/2);
var c = (2 * Math.PI * r);
console.log("The circumference of the biggest circle which can fit inside the rectangle " + c);

/* Correct answer 

var smallerDiam;
var isTall = (t-b)>(r-l);

if (isTall) {
    smallerDiam = r-l;
} else {
    smallerDiam = t-b;
//OR:
var smallerDiam = isTall? (r-l): (t-b);
//OR:
var smallerDiam = (r-l)*isTall + (t-b)*(!isTall);

var circumference = smallerDiam * Math.PI;

*/

//d) --- need to study 
//calculating the diagnol line of the rectangle
var line =Math.sqrt((Math.pow(w,2))+(Math.pow(h,2)));
console.log("The length of the diagnol line of the rectangle is " + line);
//calculating the radious of the circle
var r = line/2;
console.log("The radious of the smallest circle which completely encloses the rectangle is " + r);

var c = (2 * Math.PI * r);
console.log("The area of the smallest circle which completely encloses the rectangle is " + c);

/* 
var w = r-l,
    h = t-b,
    rSquared = h*h + w*w,
    area = Math.PI * rSquared;
*/


//e) ---- need to study
//calculating the center most rectangle 
var t3rd = (20*(1/3));
var b3rd = (2*(2/3)); 
var l3rd = (2*(1/3)); 
var r3rd = (12 * (2/3));

/* Solution using weighted means:

var lc = (2*l + r)/3;
var rc = (2*r + l)/3;
var tc = (2*t + b)/3;
var bc = (2*b + t)/3;
*/

//Excercise #4

//a)
var n = ((r * width) + c); //finds the specific square

//b)
var r = math.floor(n/width); //locates the row

//c)
var c = n % 8; //finds the specific colunm 
var n = ((r * width) + c); //finds the specific square

//d)
//N is the specific square
//C is the column 
//R is the row 

// N = (R x Width) + c
// C = N % total number of colunms 
// R = math.floor
i = (r % 2 == 0 && n % 2 == 0) || (r % 1 != 0 && n % 2 != 0);

// or

i = ((r + n) % 2 == 0) || ((r + n) % 2 != 0);

//or 

i = ((r + n) % 2) == 0;
//equation for rows 

/* Dan's answers 
var r = 16;
var c = 6;
var color = (r%2 == c%2) ? 'black' : 'white';
//OR
var color = ((r+c)%2 == 0) ? 'black' : 'white';
//OR
var color = ((r+c+1)%2) ? 'black' : 'white';
//OR
var color = ((r+n)%2 == 0) ? 'black' : 'white';
//OR many others...

*/

//Excercise #5

(n/d - ((n/d)%1) + x) + " " + ((n%d) + x) + "/" + (d + x);




    
