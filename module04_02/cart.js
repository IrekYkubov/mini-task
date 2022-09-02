const Cart = function(arr = []) {
  // return {
  //   goods:[],
  //   totalPrice:0,
  //   count:0,
  // }
  this.arr = {
    goods:[],
    totalPrice:0,
    count:0,
  }
};

Cart.prototype.addGoods = function(name, price, countProd = 1) {
  this.arr.goods.push({name,price,countProd,});
  this.increaseCount(countProd);
};
Cart.prototype.increaseCount = function(param) {
  this.arr.count += param;
};

Cart.prototype.calculateGoodsPrice = function() {
  const goodsPrice = [];
  for(let i = 0; i < this.arr.goods.length; i++) {
      goodsPrice.push(this.arr.goods[i].price * this.arr.goods[i].countProd);
  }
  const sumPrice = this.summArrayElements(goodsPrice);
  this.arr.totalPrice = sumPrice;
};

Cart.prototype.summArrayElements = function (arr) {
  let x = 0;
  return arr.map(i=>x+=i, x).reverse()[0]
};

Cart.prototype.getTotalPrice = function() {
  return this.arr.totalPrice;
};

Cart.prototype.clear = function() {
  delete(this.arr.goods);
  this.arr.goods = [];
  this.arr.totalPrice = 0;
  this.arr.count = 0;
};
Cart.prototype.print = function() {
  const cartStr = JSON.stringify(this.arr.goods);
  console.log(cartStr);
  console.log(this.getTotalPrice());
};

goodsCart = new Cart([]);
console.log(goodsCart.__proto__);
goodsCart.addGoods('хлеб', 20, 3);
goodsCart.addGoods('сахар', 25, 3);
goodsCart.addGoods('лимонад', 27, 3);
goodsCart.addGoods('сок', 28, 5);
goodsCart.addGoods('банан', 31, 4);
goodsCart.calculateGoodsPrice();
goodsCart.print();


const Goods = function(price, name, discont) {
  this.price = price;
  this.name = name;
  this.discont = discont;
};

const FoodGoods = function(price, name, discont, calori) {
  Goods.call(this, price, name, discont);
  this.calori = calori;
};

const СlothingGoods = function(price, name, discont, mater) {
  Goods.call(this, price, name, discont);
  this.mater = mater;
};

const TechnicsGoods = function(price, name, discont, typeTech) {
  Goods.call(this, price, name, discont);
  this.typeTech = typeTech;
};
const iphone = new Goods(100, 'iphone 5s', 10);
const apple = new FoodGoods(20, 'apple', 10, 34);
const tShirt = new СlothingGoods(50, 'T-Shirt', 5, 'Хлопок');
const lgCinema = new TechnicsGoods(300, 'Lg Cinema 3D', 8, 'TV');
console.log(iphone);
console.log(apple);
console.log(tShirt);
console.log(lgCinema);