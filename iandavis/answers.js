/* SECTION 1*/


//a
"1" == 1;
//true converts string "1" to number 1;

//b 
"1" === 1;
//false no conversion, no equality

//c
x == 'x'
// only true if x is a number unless Infinity, -Infinity, or NaN; false if boolean

//d 
x == (x + '')
//true unless x = NaN, undefined, Boolean

//e
'' == ' '
//true

//f
x = true;
//assignment of x to true

//g
var x; x == undefined
//true, a variable without a defined value given the value undefined

//h
'9'<'10'
//intuitively true, actually false because JS goes by the first character of the string.  So, '090000000000'<'1000' is true, but '9'<'10'

//i
typeof x + 1 === "number"
//Always false because "typeof x" has precedence.  typeof x evaluates to a string which is then concatenated with 1 resulting in "string1", "number1", "undefined1", or "boolean1"

//j
typeof x % 2 === "number"
//Always false for basically the same reason as above (i), except the result is always NaN because % is operating of the string that results from "typeof x"

//k
typeof (x % 2) ==== "number"
// always true because any x value % 2 will result in a "number" type

//l
x++ == ++x
//true if x is Infinity or -Infinity because any operation on Infinity results in Infinity again. false if x is a string (always results in NaN). false for any number because the postfix increment operator increments after returning a value, while the prefix does so before returning a value.  Used in this way the prefix and postfix operators increment _away_ from each other, causing the value to never equal itself in this instance.

//m
++x == x++
//true if x equals any number, including Infinity, though not NaN, because x is incremented left of the equality operator, then remains the same right of the equality operator. Also true for strings that are quoted numbers, which are converted to numbers. Also true if x is a boolean value.

//n
"1" + x == 1 + x
// only true if x is a string.  if x is anything else it is converted to a string right of equality and the left of equality never evaluates to a string


//o
"0" + 1 == 1
//true because the string "01" is converted to 1 by the equality operator.


//p
(typeof (x + 1)) === (typeof x)
//true is x is any string or number, including NaN and Infinity. For a string x it is concatenated with 1, both side of the strict equality being strings. False if x is boolean because booleans are reduced to a number when added to a number. undefined is false because undefined + 1 is NaN, a number, while typeof undefined is "undefined".


//q
(x * 1 == x) || ((typeof x) != "number")
//true except when x is NaN because does not equal itself (left of ||) and is a number.
//left of || is true in all but two other cases. when x is a string that isn't a quoted number (with that it is converted to a number with the * operator) it evaluates to NaN which is not equal to itself. In this case, right of ||, and evaluates to true. The other case is when x is undefined. left of || evaluates to NaN, right of || evaluates to true, typeof undefined being the string "undefined".

//r
(x = (typeof (x + (typeof x)))) == x
// always true, including if x is NaN, because typeof always outputs a string


var testCases = ["string", "1", true, false, Infinity, 20, undefined, NaN];

for (var x = 0, length = testCases.length; x < length; x++) {
	var result = (testCases[x] = (typeof (testCases[x] + (typeof testCases[x])))) == testCases[x];
	console.log(testCases[x] + " is " + result)
};