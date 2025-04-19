import allProductsService from "../../services/products/allProductsService.js";

async function allProductsController(_, res) {
  try {
    const allProducts = await allProductsService()
    return res.status(200).json(allProducts)
  } catch (error) {
    return res.json({ Mensagem: `Erro interno: ${error.message}` });
  }
}

export default allProductsController;
