let stonks = [45, 24, 35, 31, 40, 38, 11];

maxProfit = (stonks) => {
  let maxYield = 0;
  let timeToBuy = stonks[0];
  let timeToSell = stonks[1];
  for (let buy = 0; buy < stonks.length; buy++) {
    let low = stonks[buy];
    //console.log([buy]);
    for (let sell = [buy]; sell < stonks.length; sell++) {
      //console.log(stonks[sell]);
      let high = stonks[sell];
      if ((high - low) > maxYield) {
        maxYield = (high - low);
        timeToBuy = low;
        timeToSell = high;
      }
    }
  }
  return `Buy: $${timeToBuy} Sell: $${timeToSell} Profit: $${maxYield}`;
};
console.log(maxProfit(stonks));