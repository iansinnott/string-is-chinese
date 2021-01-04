# Is Chinese?

A simple helper to check if a string of characters matches the known Unicode range for Chinese.

## Usage

```js
const { isChinese, RE } = require("@ian_sinn/string-is-chinese");

// Test if a string "is chinese"
isChinese("你好嗎？還有誰要來？  我放幾個空格看看。"); // => true
isChinese("Just an english sentence"); // => false

// You can also use `hasChinese` if you just want to see if _any_ characters match.
isChinese("Just an english sentence... 不是！"); // => false
hasChinese("Just an english sentence... 不是！"); // => true

// You can configure the percentage of a string that must be Chinese in order
// to pass the test.
isChinese("Just an english sentence... 不是！", { threshold: 0.05 }); // => true
```

### Copy Paste

This library is basically a wrapper around a regex. Feel free to copy and paste directly if it makes things easier:

```js
const RE = /[\u4E00-\u9FA5\uF900-\uFA2D]/;

RE.test("加油!");
```
