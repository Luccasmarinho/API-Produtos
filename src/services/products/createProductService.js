import prisma from "../../prisma/client.js";

async function createProductService(req) {
  const { category, title, description, image, price, rating_rate } = req.body;
  const createProduct = await prisma.product.create({
    data: {
        category,
        title,
        description,
        image,
        price,
        rating_rate
    }
  });

  return createProduct;
}

export default createProductService;
