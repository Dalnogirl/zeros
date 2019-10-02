module.exports = function zeros(expression) {
  let array = expression.match(/(\d+|\!+)/gm), k = 0, k2 = 0, a = 0, b = 0, startNum, imp;

  for (let i = 0; i < array.length - 1; i += 2) {
      a += zer(array[i], array[i + 1])[0]
      b += zer(array[i], array[i + 1])[1]

  }

  function zer(n, danger) {
      n = +n;
      k = 0;
      k2 = 0;
      if (danger.length === 2) {
          startNum = (n % 2 === 0) ? 2 : 1;
          imp = 2;
      } else {
          startNum = 1;
          imp = 1;
      }

      for (let i = startNum; i <= n; i += imp) {

          if (i % 5 === 0) {
              k++
              if (i % 25 === 0) {
                  k ++;
              }
          }
          if (i % 2 === 0) {
              k2++;
          }
      }
      return [k, k2];
  }
  return Math.min(a, b);
}