

export const getProductData = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    console.log(typeof products);

    return products;
}