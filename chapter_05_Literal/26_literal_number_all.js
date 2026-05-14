// Number types in JavaScript

// JavaScript has only one number type: Number (64-bit floating point, IEEE 754)
// But it supports different literal forms:

// ----- Integer -----
let int = 42;
console.log(int); // 42

// ----- Floating point -----
let float = 3.14;
console.log(float); // 3.14

// ----- Scientific notation (exponential) -----
let sci = 5e3;   // 5 * 10^3
console.log(sci); // 5000

let sci2 = 2.5e-3; // 2.5 * 10^-3
console.log(sci2); // 0.0025

// ----- Binary (base 2) -----
let bin = 0b1010; // prefix 0b
console.log(bin); // 10

// ----- Octal (base 8) -----
let oct = 0o12; // prefix 0o
console.log(oct); // 10

// ----- Hexadecimal (base 16) -----
let hex = 0xA; // prefix 0x
console.log(hex); // 10

// ----- Special numeric values -----
console.log(Infinity);          // Infinity
console.log(-Infinity);         // -Infinity
console.log(NaN);               // NaN (Not a Number)

// ----- BigInt (for integers beyond 2^53 - 1) -----
let big = 9007199254740991n; // suffix n
console.log(big);

let big2 = BigInt("9007199254740992");
console.log(big2);

// ----- Numeric separators (ES2021) -----
// Underscores make large numbers more readable
let million = 1_000_000;
console.log(million); // 1000000

let bigNum = 1_000_000_000_000;
console.log(bigNum); // 1000000000000

// Works with decimal, binary, octal, hex too
let sepBin = 0b1010_1011;
console.log(sepBin); // 171

let sepHex = 0xFF_FF;
console.log(sepHex); // 65535

// ----- Number methods -----
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_VALUE);        // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);        // 5e-324
