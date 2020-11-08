var express = require("express");
var router = express.Router();
const adminController = require("../controller/adminController");
const { uploadSingle } = require("../middlewares/multer");

router.get("/dashboard", adminController.viewDasboard);

// Endpoint Category
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

// Endpoint Bank
router.get("/bank", adminController.viewBank);
router.post("/bank", uploadSingle, adminController.addBank);
router.delete("/bank/:id", adminController.deleteBank);
router.put("/bank", uploadSingle, adminController.editBank);

// Endpoint
router.get("/item", adminController.viewItem);

// Endpoint
router.get("/booking", adminController.viewBooking);
module.exports = router;
