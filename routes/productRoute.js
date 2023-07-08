import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createProductController,
  getProductController,
  singleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFilterController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
//create product 
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

//update product 
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/single-product/:slug", singleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//filter Product
router.post('/product-filters', productFilterController);

//product Count
router.get('/product-count', productCountController);

//product per page
router.get('./product-list/:page', productListController);

//search Product 
router.get("/search/:keyword", searchProductController);

//similar Product
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get('/product-category/:slug', productCategoryController)


export default router;
