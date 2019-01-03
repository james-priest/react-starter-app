// Code fix and formating can be tested on this file
//  by opening command palette and choosing:
//  "ESLint: Fix all auto-fixable Problems"
// Alternatively, "fix on save" can be set with
//  { "eslint.autoFixOnSave": true }
//  in VSCode Settings
var collection = {
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette",
      "Purple Rain",
      "Let's Go Crazy",
      "The Beautiful Ones",
      "Darling Nikki",
      "Diamonds & Pearls"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  },
};

// Alter values below to test your code
console.log();

function test(a, b, c) {
  var d = a ? b : c;
  return a + b + c + d
}
test()

var str5 = '5';
var key = '';

// ESLint: eslint --fix (Shift + Alt + T)
function test1() {
  // eslint --fix: no-implicit-coercion
  var int5 = +str5;
  // eslint --fix: no-regex-spaces default
  var re = /foo     bar/
  // eslint --fix: no-unsafe-negation default
  if (!key in collection) str5 = 5;
  return int5 + re;
}
test1()

// Prettier: prettier --write (Shift + Alt + F)
function test2() {
  // Prettier: no-floating-decimal
  var b = .7;
  // Prettier: single quotes
  var abc = "abc"
  // Prettier: semi
  abc = "123"
  // Prettier: wrap-iife
  var x = function () { return true; }()
  // prettier: line length
  var obj = {
    item1: [
      "line 1",
      "line 2",
      "line 3"
    ]
  }
  return {b, abc, obj, x}
}
test2()