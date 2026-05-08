// ========== JAVASCRIPT IDENTIFIER RULES ==========

// Identifiers are names given to variables, functions, classes, labels, etc.

// RULE 1: Can contain letters (a-z, A-Z), digits (0-9), $, and _
var userName = "John";
var user123 = "John";
var $ = "dollar";
var _ = "underscore";
var user_name = "John";
var my$variable = 100;

// RULE 2: Cannot start with a digit
// var 123abc = 10;               // SyntaxError
// var 1stPlace = "gold";         // SyntaxError
var abc123 = 10;                  // OK - digits allowed after first character

// RULE 3: Cannot contain spaces
// var my name = "John";          // SyntaxError
var myName = "John";              // OK

// RULE 4: Cannot contain special characters (except $ and _)
// var user@name = "John";        // SyntaxError
// var user#name = "John";        // SyntaxError
// var user-name = "John";        // SyntaxError (reserved as subtraction)
// var user.name = "John";        // SyntaxError (dot is property accessor)
// var first%name = "John";       // SyntaxError

// RULE 5: Cannot use reserved keywords
// var var = 10;                  // SyntaxError
// var let = 20;                  // SyntaxError
// var const = 30;                // SyntaxError
// var class = 40;                // SyntaxError
// var function = 50;             // SyntaxError
// var return = 60;               // SyntaxError
// var if = 70;                   // SyntaxError
// var else = 80;                 // SyntaxError
// var for = 90;                  // SyntaxError
// var while = 100;               // SyntaxError
// var do = 110;                  // SyntaxError
// var switch = 120;              // SyntaxError
// var case = 130;                // SyntaxError
// var break = 140;               // SyntaxError
// var continue = 150;            // SyntaxError
// var try = 160;                 // SyntaxError
// var catch = 170;               // SyntaxError
// var finally = 180;             // SyntaxError
// var throw = 190;               // SyntaxError
// var new = 200;                 // SyntaxError
// var this = 210;                // SyntaxError
// var typeof = 220;              // SyntaxError
// var instanceof = 230;          // SyntaxError
// var delete = 240;              // SyntaxError
// var void = 250;                // SyntaxError
// var in = 260;                  // SyntaxError
// var of = 270;                  // SyntaxError
// var debugger = 280;            // SyntaxError
// var import = 290;              // SyntaxError
// var export = 300;              // SyntaxError
// var default = 310;             // SyntaxError
// var extends = 320;             // SyntaxError
// var super = 330;               // SyntaxError
// var yield = 340;               // SyntaxError
// var await = 350;               // SyntaxError
// var async = 360;               // SyntaxError

// RULE 6: Future reserved keywords also not allowed in strict mode
// var implements = 10;           // SyntaxError in strict mode
// var interface = 20;            // SyntaxError in strict mode
// var package = 30;              // SyntaxError in strict mode
// var private = 40;              // SyntaxError in strict mode
// var protected = 50;            // SyntaxError in strict mode
// var public = 60;               // SyntaxError in strict mode
// var static = 70;               // SyntaxError in strict mode

// RULE 7: Case-sensitive (myVar, MyVar, myvar are all different)
var myVar = "lowercase v";
var MyVar = "uppercase V";
var myvar = "all lowercase";
// myVar, MyVar, and myvar are three separate variables

// RULE 8: Can use Unicode characters (including emoji in ES6+)
var ñoño = "cute";                // Spanish n-tilde
var строка = "string";            // Cyrillic
var 变量 = "variable";            // Chinese
var π = 3.14159;                  // Greek pi
// var 😀 = "emoji";              // technically allowed but strongly discouraged

// RULE 9: Cannot be a null/boolean literal
// var null = 10;                 // SyntaxError
// var true = 20;                 // SyntaxError
// var false = 30;                // SyntaxError
// var undefined = 40;            // SyntaxError (NaN, Infinity are allowed but discouraged)

// RULE 10: Length - no defined limit, but keep them reasonable
var a = 1;                                                    // too short - not descriptive
var thisIsAnExtremelyLongVariableNameThatShouldBeAvoided = 1; // too long
var userCount = 100;                                          // just right

// ========== SUMMARY TABLE ==========
// Allowed:       a-z, A-Z, 0-9, $, _, Unicode chars
// Not allowed:   spaces, special chars (#, @, -, %, etc.)
// Can't start:   digit
// Can't use:     reserved keywords, null/boolean literals
// Case:          sensitive (Name != name)
