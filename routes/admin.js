var express = require("express");
var router = express.Router();
const adminController = require("../controller/adminController");

router.get("/dashboard", adminController.viewDasboard);

// router.get("/dashboard", (res, req) => {
//   res.render("/admin/dashboard/view_dashboard");
// });

module.exports = router;
