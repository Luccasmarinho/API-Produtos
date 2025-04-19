import prisma from "../../prisma/client.js";

async function allProductsService() {
  const allProducts = await prisma.product.findMany();
  return allProducts;
}

export default allProductsService;
