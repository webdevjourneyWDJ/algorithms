function maxStockProfit(pricesArr) {
  var maxProfit = -1, buyPrice =0, sellPrice =0, changeBuyPrice = true;

  for (var i = 0; i < pricesArr.length; i++) {
    if(changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i+1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      var tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }

  console.log(maxProfit);
}

maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]);
