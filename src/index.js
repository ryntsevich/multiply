module.exports = function multiply(first, second) {
  let product = BigInt(first) * BigInt(second);
  product = product.toString();
  return product;
};