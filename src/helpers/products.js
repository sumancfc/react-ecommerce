// get products
export const getProducts = (products, category, limit, type) => {
  const finalProducts = category
    ? products.filter(
        (product) => product.category.filter((single) => single === category)[0]
      )
    : products;

  //product by arrival
  if (type && type === "new") {
    const newProducts = finalProducts.filter((single) => single.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }

  //product by best sells
  if (type && type === "bestSeller") {
    return finalProducts
      .sort((a, b) => {
        return b.saleCount - a.saleCount;
      })
      .slice(0, limit ? limit : finalProducts.length);
  }

  return finalProducts.slice(0, limit ? limit : finalProducts.length);
};

//product discount
export const getDiscount = (price, discount) => {
  return discount && discount > 0 ? price - price * (discount / 100) : null;
};
