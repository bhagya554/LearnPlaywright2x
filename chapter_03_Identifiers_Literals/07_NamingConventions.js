// ========== NAMING CONVENTIONS IN JAVASCRIPT ==========

// 1. camelCase (standard for variables & functions)
var firstName = "John";
var lastName = "Doe";
var totalAmount = 1000;
function getUserName() { return firstName + " " + lastName; }

// 2. PascalCase (standard for classes & constructors)
class PersonDetails {
    constructor(personName) { this.personName = personName; }
}
function EmployeeRecord(name) { this.name = name; }
var emp = new EmployeeRecord("John");

// 3. snake_case (rare in JS; sometimes used in databases or config)
var first_name = "John";
var total_amount = 1000;
var user_role = "admin";

// 4. UPPER_CASE / SCREAMING_SNAKE_CASE (hard-coded constants)
var MAX_RETRY_COUNT = 3;
var API_BASE_URL = "https://api.example.com";
var PI_VALUE = 3.14159;

// 5. kebab-case (NOT valid in JS identifiers; used for file/folder names)
// Example: my-variable.js (file name only, not a JS identifier)

// 6. Hungarian notation (prefix with type - dated, avoid in modern JS)
var strFirstName = "John";       // str = string
var numAge = 25;                 // num = number
var arrItems = [1, 2, 3];        // arr = array
var objUser = { name: "John" }; // obj = object

// ========== JS NAMING CONVENTIONS (Best Practices) ==========

// Variables & Functions -> camelCase
var userName = "John";
function fetchData() { }

// Classes & Constructors -> PascalCase
class UserAccount { }
function ProductCatalog(name) { this.name = name; }

// Constants -> UPPER_CASE (if hard-coded) or camelCase (if const reference)
var MAX_SIZE = 100;
var config = { theme: "dark" }; // const reference, camelCase is fine

// Private members -> _prefix (convention, not enforced)
var _privateVar = "hidden";
function _internalHelper() { }

// Booleans -> is/has/should/can prefix
var isActive = true;
var hasPermission = false;
var shouldUpdate = true;
var canDelete = false;

// Event handlers -> on/handle prefix
function onSubmit() { }
function handleClick() { }

// jQuery objects -> $prefix
var $button = document.getElementById("btn");
var $input = $("#email"); // common in jQuery

// ========== DO'S AND DON'TS ==========

// DO: use descriptive, meaningful names
var userAge = 25;      // good
var a = 25;            // bad - too vague

// DO: use pronounceable names
var userBirthDate = new Date(); // good
var uBd = new Date();           // bad

// DON'T: start with numbers
// var 1stPlace = "gold"; // SyntaxError

// DON'T: use reserved keywords
// var var = 10;   // SyntaxError
// var class = 20; // SyntaxError

// DON'T: use special characters (except $ and _)
// var user-name = "John"; // SyntaxError
