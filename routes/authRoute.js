import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPassword,
  updateProfileController,
  getOrdersController
} from "../controllers/userController.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

//router object
const router = express.Router();

//routing
/**
 * Type : REGISTER
 * Method :POST
 */
router.post("/register", registerController);


 //Type : LOGIN || POST
router.post("/login", loginController);

//Type : forgot password ||POST
router.post("/forgot-password", forgotPassword);

//test route || GET
router.get("/test",requireSignIn, isAdmin, testController);

//protected Route || PRIVATE ||GET
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});


//Admin Route ||PRIVATE ||GET
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update user Profile
router.put('/profile', requireSignIn, updateProfileController)

//oredr
router.get('/orders', requireSignIn, getOrdersController)

export default router;
