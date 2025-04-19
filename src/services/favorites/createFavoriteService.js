import prisma from "../../prisma/client.js";

async function createFavoriteService(req) {
  const { productId } = req.body;
  const createFavorite = await prisma.favorite.create({
    data: {
      productId,
    },
  });
  return createFavorite;
}

export default createFavoriteService;
