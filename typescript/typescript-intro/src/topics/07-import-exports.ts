import { Product, taxCalculator } from "./06-functions-destructuring";

const shoppingCart: Product[] = [
  { id: 1, name: "Samsung Galaxy S10", price: 1000 },
  { id: 2, name: "iPad Pro", price: 1500 },
];

const [total_, taxAmount_] = taxCalculator({ shoppingCart, tax: 0.16 });

console.log({ total_, taxAmount_ });
