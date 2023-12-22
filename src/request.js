import mockProducts from "./assets/mock-data/mockProducts.json";

export function fetchProductDetails(productId) {
  return new Promise((resolve, reject) => {
    const product = mockProducts.find((p) => p.id === productId);
    if (product) {
      setTimeout(() => resolve(product), 500);
    } else {
      setTimeout(() => reject(new Error("Product not found")), 500);
    }
  });
}
