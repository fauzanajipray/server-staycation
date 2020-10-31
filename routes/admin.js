var express = require("express");
var router = express.Router();
const adminController = require("../controller/adminController");

router.get("/dashboard", adminController.viewDasboard);
router.get("/category", adminController.viewCategory);
router.get("/bank", adminController.viewBank);
router.get("/item", adminController.viewItem);
router.get("/booking", adminController.viewBooking);
module.exports = router;
