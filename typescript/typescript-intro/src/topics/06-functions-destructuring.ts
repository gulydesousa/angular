export interface Product {
  id: number;
  name: string;
  price: number;
}

interface TaxCalculator {
  shoppingCart: Product[];
  tax: number;
}

interface TaxResult {
  total: number;
  taxAmount: number;
}

export function taxCalculator(options: TaxCalculator): number[] {
  let total = 0;

  options.shoppingCart.forEach((product) => {
    total += product.price;
  });
  return [total, total * options.tax];
}

/*
const phone: Product = { id: 1, name: "Samsung Galaxy S10", price: 1000 };
const tablet: Product = { id: 2, name: "iPad Pro", price: 1500 };

const shoppingCart = [phone, tablet];
const tax = 0.16;


const result = taxCalculator({ shoppingCart, tax });



console.log("Total", result[0]);
console.log("Tax", result[1]);
*/

function taxCalculator_(options: TaxCalculator): [number, number] {
  let total = 0;
  const { shoppingCart, tax } = options;

  shoppingCart.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
}

/*
const [total, taxAmount] = taxCalculator({ shoppingCart, tax });
console.log({ total, taxAmount });
*/
