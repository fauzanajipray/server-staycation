var express = require("express");
var router = express.Router();
const adminController = require("../controller/adminController");

router.get("/dashboard", adminController.viewDasboard);

// Endpoint Category
router.get("/category", adminController.viewCategory);
router.post("/category", adminController.addCategory);
router.put("/category", adminController.editCategory);
router.delete("/category/:id", adminController.deleteCategory);

// Endpoint Bank
router.get("/bank", adminController.viewBank);
router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);
module.exports = router;
