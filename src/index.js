module.exports =
function zeros(expression) {
  let array = expression.match(/(\d+|\!+)/gm), result = [];
  array
  for (let i = 0; i < array.length; i++) {

    if (array[i].includes('!')) {
      i
      k = array[i].length;
      result.push(factorial(array[i - 1], k))
    }
    array
  }
  result


  function factorial(num, k = 1) {
    num
    if (k !== 1 && +num % 2 === 1) {
      return (num != 1) ? multiply(num, factorial(num - k, k)) : 1;
    } else if (k !== 1 && +num % 2 === 0) {
      return (num != 2) ? multiply(num, factorial(num - k, k)) : 2;
    } else {
      return (num != 1) ? num * factorial(num - k) : 1;
    }

  }

  function multiply(first, second) {
    first
    let arrOne = String(first).length === 1 ? String(first) : String(first).split('').reverse(),
      arrTwo = String(second).length === 1 ? String(second) : String(second).split('').reverse(), result = [];
    for (let i = 0; i < arrOne.length; i++) {
      for (let k = 0; k < arrTwo.length; k++) {
        let product = arrOne[i] * arrTwo[k];

        if (result[i + k]) {
          result[i + k] = result[i + k] + product;
        } else {
          result[i + k] = product;
        }
      }
    }

    for (let i = 0; i < result.length; i++) {
      let lastNum = result[i] % 10;
      let nextNum = Math.floor(result[i] / 10);
      result[i] = lastNum;
      if (result[i + 1]) { // NOT OUT OF RANGE!
        result[i + 1] += nextNum;
      } else if (nextNum != 0) {
        result[i + 1] = nextNum;
      }
    }

    return result.reverse().join('');
  }
  console.log(String(result.reduce((acc, item) => acc *= item)).match(/0+$/ig))
  return String(result.reduce((acc, item) => acc = multiply(acc, item))).match(/0+$/ig) === null ? 0 :
   String(result.reduce((acc, item) => acc = multiply(acc, item))).match(/0+$/ig)[0].length;
}

//console.log(zeros('55!!*77!!*99!!'))
