import createFavoriteService from "../../services/favorites/createFavoriteService.js";

async function createFavoriteController(req, res) {
  try {
    const createProduct = await createFavoriteService(req)
    return res.json(createProduct)
  } catch (error) {
    return res.json({ Mensagem: `Erro interno: ${error.message}` });
  }
}

export default createFavoriteController;
