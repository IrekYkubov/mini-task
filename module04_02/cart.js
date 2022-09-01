const Cart = function() {
  return {
    goods:[],
    totalPrice:0,
    count:0,
  }
};

Cart.prototype.addGoods = function(name, price, countProd = 1) {
  this.goods.push({name,price,countProd,});
  this.increaseCount(countProd);
};
Cart.prototype.increaseCount = function(param) {
  this.count += param;
};

Cart.prototype.calculateGoodsPrice = function() {
  const goodsPrice = [];
  for(let i = 0; i < this.goods.length; i++) {
      goodsPrice.push(this.goods[i].price * this.goods[i].countProd);
  }
  const sumPrice = this.summArrayElements(goodsPrice);
  this.totalPrice = sumPrice;
};

Cart.prototype.summArrayElements = function (arr) {
  let x = 0;
  return arr.map(i=>x+=i, x).reverse()[0]
};

Cart.prototype.getTotalPrice = function() {
  return this.totalPrice;
};

Cart.prototype.clear = function() {
  delete(this.goods);
  this.goods = [];
  this.totalPrice = 0;
  this.count = 0;
};
Cart.prototype.print = function() {
  const cartStr = JSON.stringify(Cart);
  console.log(cartStr);
  console.log(this.getTotalPrice());
};

goodsCart = new Cart();
console.log(goodsCart);
goodsCart.addGoods('хлеб', 20, 3);
goodsCart.addGoods('сахар', 25, 3);
goodsCart.addGoods('лимонад', 27, 3);
goodsCart.addGoods('сок', 28, 5);
goodsCart.addGoods('банан', 30, 4);
goodsCart.calculateGoodsPrice();
goodsCart.print();