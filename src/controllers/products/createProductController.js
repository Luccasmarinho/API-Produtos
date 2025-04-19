import createProductService from "../../services/products/createProductService.js";

async function createProductController(req, res) {
  try {
    const createProduct = await createProductService(req, res);
    return res.status(200).json(createProduct);
  } catch (error) {
    return res.json({ Mensagem: `Erro interno: ${error.message}` });
  }
}

export default createProductController;
