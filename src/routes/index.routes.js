const { Router } = require("express");
const router = Router();

const indexController = require("../controller/indexController");

//Home view
router.get("/", indexController.home);
router.post("/code", indexController.checkCode);

module.exports = router;