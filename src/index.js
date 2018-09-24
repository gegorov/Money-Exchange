// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  // Your code goes here!
  // Return an object containing the minimum number of coins needed to make change
  let myMoney = currency;
  if (currency <= 0) {
    return {};
  }
  if (myMoney > 10000) {
    return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' };
  }

  const result = {};
  const half = {
    value: 50,
    sign: 'H',
  };
  const quarter = {
    value: 25,
    sign: 'Q',
  };
  const dime = {
    value: 10,
    sign: 'D',
  };
  const nickel = {
    value: 5,
    sign: 'N',
  };
  const pennie = {
    value: 1,
    sign: 'P',
  };


  if (myMoney >= half.value) {
    result[half.sign] = Math.floor(myMoney / half.value);
    myMoney %= half.value;
  }

  if (myMoney >= quarter.value) {
    result[quarter.sign] = Math.floor(myMoney / quarter.value);
    myMoney %= quarter.value;
  }
  if (myMoney >= dime.value) {
    result[dime.sign] = Math.floor(myMoney / dime.value);
    myMoney %= dime.value;
  }

  if (myMoney >= nickel.value) {
    result[nickel.sign] = Math.floor(myMoney / nickel.value);
    myMoney %= nickel.value;
  }
  if (myMoney > 0) {
    result[pennie.sign] = myMoney;
  }
  return result;
};
