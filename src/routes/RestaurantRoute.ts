import express from "express";
import RestaurantController from "../controllers/RestaurantController";
import { param } from "express-validator";

const router = express.Router();

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City paramenter must be a valid string"),
  RestaurantController.searchRestaurant
);

export default router;
