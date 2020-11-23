const RE = /[\u4E00-\u9FA5\uF900-\uFA2D]/;

const hasChinese = (str) => {
  return RE.test(str);
};

const isChinese = (str, { threshold = 0.6 } = {}) => {
  const xs = str.replace(/\s/g, "").split("");
  const pct =
    xs.map((x) => (RE.test(x) ? 1 : 0)).reduce((a, b) => a + b, 0) / xs.length;
  return pct >= threshold;
};

module.exports = { isChinese, hasChinese, RE };
