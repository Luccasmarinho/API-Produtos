import Express from "express";
const router = Express.Router();

import createProductController from "../controllers/products/createProductController.js";
import allProductsController from "../controllers/products/allProductsController.js";
// import createFavoriteController from "../controllers/favorites/createFavoriteController.js";

router.get("/products", allProductsController);
router.post("/products", createProductController);

// router.post("/products/favorites", createFavoriteController)
// router.post("/products/favorites", login)
// router.delete("/products/favorites/:id", login)

export default router;
