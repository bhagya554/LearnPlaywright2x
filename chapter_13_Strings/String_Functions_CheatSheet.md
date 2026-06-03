# JavaScript String Functions — Cheat Sheet

## Creating Strings

| Method | Example |
|--------|---------|
| Single quotes | `let a = 'hello'` |
| Double quotes | `let b = "world"` |
| Template literal | `` let c = `Hello ${name}!` `` |
| Multiline | `` let s = `line1\nline2` `` |
| String() | `String(200) // "200"` |

---

## Properties

| Method | Example | Output |
|--------|---------|--------|
| `length` | `"Hello".length` | `5` |

---

## Accessing Characters

| Method | Example | Output |
|--------|---------|--------|
| Bracket `[]` | `"Hello"[0]` | `"H"` |
| `at()` | `"Hello".at(-1)` | `"o"` |
| `charAt()` | `"Hello".charAt(1)` | `"e"` |
| `charCodeAt()` | `"Hello".charCodeAt(0)` | `72` |

---

## Searching & Checking

| Method | Example | Output |
|--------|---------|--------|
| `includes()` | `"hello".includes("ell")` | `true` |
| `startsWith()` | `"hello".startsWith("he")` | `true` |
| `endsWith()` | `"hello".endsWith("lo")` | `true` |
| `indexOf()` | `"hello".indexOf("l")` | `2` |
| `lastIndexOf()` | `"hello".lastIndexOf("l")` | `3` |
| `search()` | `"hello".search(/l/)` | `2` |
| `match()` ⭐ | `"a1b2".match(/\d+/)` | `["1"]` |
| `matchAll()` ⭐ | `"a1b2".matchAll(/\d/g)` | Iterator of matches |

---

## Extracting Substrings

| Method | Example | Output |
|--------|---------|--------|
| `slice(start, end)` | `"Login_Test".slice(0,5)` | `"Login"` |
| `slice(start)` | `"Login_Test".slice(6)` | `"Test"` |
| `slice(-n)` | `"Login_Test".slice(-4)` | `"Test"` |
| `substring(start, end)` | `"Login_Test".substring(6,10)` | `"Test"` |
| `substr(start, len)` ⭐ | `"Login_Test".substr(6,4)` | `"Test"` |

---

## Transforming

| Method | Example | Output |
|--------|---------|--------|
| `toUpperCase()` | `"hello".toUpperCase()` | `"HELLO"` |
| `toLowerCase()` | `"HELLO".toLowerCase()` | `"hello"` |
| `trim()` | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` | `"  hi  ".trimStart()` | `"hi  "` |
| `trimEnd()` | `"  hi  ".trimEnd()` | `"  hi"` |
| `repeat()` ⭐ | `"hi".repeat(3)` | `"hihihi"` |
| `padStart()` ⭐ | `"5".padStart(3,"0")` | `"005"` |
| `padEnd()` ⭐ | `"5".padEnd(3,".")` | `"5.."` |

---

## Replacing

| Method | Example | Output |
|--------|---------|--------|
| `replace(search, val)` | `"FAIL".replace("FAIL","PASS")` | `"PASS"` |
| `replaceAll(search, val)` | `"f,f".replaceAll("f","p")` | `"p,p"` |
| `replace(/rgx/g, val)` | `"f,f".replace(/f/g,"p")` | `"p,p"` |

---

## Concatenation

| Method | Example | Output |
|--------|---------|--------|
| `+` operator | `"Hello" + " " + "World"` | `"Hello World"` |
| `concat()` | `"Hello".concat(" ","World")` | `"Hello World"` |
| Template literal | `` `${"Hello"} ${"World"}` `` | `"Hello World"` |

---

## Splitting & Joining

| Method | Example | Output |
|--------|---------|--------|
| `split(sep)` | `"a,b,c".split(",")` | `["a","b","c"]` |
| `split("")` | `"abc".split("")` | `["a","b","c"]` |
| `join(sep)` | `["a","b"].join("-")` | `"a-b"` |

---

## Conversion

| Method | Example | Output |
|--------|---------|--------|
| `toString()` | `(200).toString()` | `"200"` |
| `Number()` | `Number("500")` | `500` |
| `parseInt()` | `parseInt("600px")` | `600` |
| `parseFloat()` | `parseFloat("3.14rem")` | `3.14` |
| `String.fromCharCode()` ⭐ | `String.fromCharCode(72)` | `"H"` |
| `String.fromCodePoint()` ⭐ | `String.fromCodePoint(128169)` | `"💩"` |

---

## Comparison

| Method | Example | Output |
|--------|---------|--------|
| `===` / `!==` | `"a" === "a"` | `true` |
| `<` / `>` | `"a" < "b"` | `true` |
| `localeCompare()` ⭐ | `"b".localeCompare("a")` | `1` |

---

## Miscellaneous

| Method | Example | Output |
|--------|---------|--------|
| `valueOf()` ⭐ | `new String("hi").valueOf()` | `"hi"` |
| `normalize()` ⭐ | `"\u00e9".normalize()` | `"é"` |

---

⭐ = **Not covered in chapter, added as bonus**

---

## Explanations of ⭐ Functions

### `match(regex)`
Returns the first match as an array (or `null` if no match), with captured groups.
```js
"a1b2c3".match(/\d+/) // ["1"]
"a1b2c3".match(/\d/g) // ["1","2","3"] — with 'g' flag returns all
```

### `matchAll(regex)`
Returns an **iterator** of all matches (requires `g` flag). Each item is an array with groups.
```js
[... "a1b2".matchAll(/\d/g)] // [["1"],["2"]]
```

### `substr(start, length)` ⚠️ Deprecated
Extracts a substring starting at `start` with given `length`. Negative `start` wraps from end.
```js
"Hello World".substr(6, 3) // "Wor"
"Hello World".substr(-5)   // "World"
```

### `repeat(count)`
Returns a new string with the original repeated `count` times.
```js
"*".repeat(5)   // "*****"
"abc".repeat(2) // "abcabc"
```

### `padStart(targetLength, padString)`
Pads the current string from the start until it reaches `targetLength`.
```js
"7".padStart(3, "0")    // "007"
"hi".padStart(6, "12")  // "1212hi"
```

### `padEnd(targetLength, padString)`
Pads the current string from the end until it reaches `targetLength`.
```js
"7".padEnd(3, "0")      // "700"
"hi".padEnd(6, "12")    // "hi1212"
```

### `String.fromCharCode(codes)`
Returns a string from a sequence of UTF-16 code units.
```js
String.fromCharCode(72, 73) // "HI"
String.fromCharCode(65, 66, 67) // "ABC"
```

### `String.fromCodePoint(codes)`
Returns a string from a sequence of **full** Unicode code points (supports emoji, astral symbols).
```js
String.fromCodePoint(128640) // "🚀"
String.fromCodePoint(72, 128640) // "H🚀"
```

### `localeCompare(compareString)`
Compares two strings according to locale — returns `-1` (before), `0` (equal), or `1` (after). Useful for sorting.
```js
"a".localeCompare("b") // -1
"b".localeCompare("a") // 1
"a".localeCompare("a") // 0
["banana", "apple", "cherry"].sort((a,b) => a.localeCompare(b))
// ["apple", "banana", "cherry"]
```

### `valueOf()`
Returns the **primitive value** of a String object (rarely used explicitly).
```js
let s = new String("hello")
typeof s         // "object"
s.valueOf()      // "hello"
typeof s.valueOf() // "string"
```

### `normalize(form)`
Returns the Unicode normalization form of the string. Used when two visually identical characters have different Unicode representations.
```js
"é".normalize()           // "é"
"\u0065\u0301".normalize() // "é" — same as "é" after normalization
"é".length                // 1
"\u0065\u0301".length     // 2
"\u0065\u0301".normalize().length // 1
```
