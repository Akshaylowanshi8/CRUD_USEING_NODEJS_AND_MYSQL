const express = require('express');
const router = express.Router();
const AdminController = require("../Controllers/AdminController")


router.post("/LoginAdminUser", AdminController.LoginAdminUser)
router.post("/CreatAdminUser",AdminController.CreateAdminUser)


module.exports = router;
