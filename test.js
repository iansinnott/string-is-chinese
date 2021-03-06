const { isChinese, hasChinese } = require("./index.js");

it("Should work on a full chinese sentence", () => {
  expect(isChinese("你好嗎？還有誰要來？  我放幾個空格看看。")).toBe(true); // 繁體
  expect(isChinese("你好吗？还有谁要来？  我放几个空格看看。")).toBe(true); // 檢體
});

it("Should work on a full chinese sentence", () => {
  expect(isChinese("sup this is just an english sentence")).toBe(false);
});

it("Should take a threshold value", () => {
  expect(
    isChinese("Just an english sentence... 不是！", { threshold: 0.05 })
  ).toBe(true);
});
