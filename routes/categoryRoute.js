import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  createCategoryController,
  upadteCategoryController,
  categoryController,
  singleCategoryController,
  deleteCategoryController
} from "../controllers/CategoryController.js";

//router object
const router = express.Router();

//routes
//create Category || POST
router.post("/create-category", requireSignIn, createCategoryController);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  upadteCategoryController
);

//getAll category
router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);

//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryController
  );



  
export default router;
