



module.exports.calculateSavings = (array) => {

  let total = 0;

  for(let i = 0; i < array.length; i++) {
    total += array[i].kwh_usage;
  }

  let savings = total * .30;
  return savings;
}

