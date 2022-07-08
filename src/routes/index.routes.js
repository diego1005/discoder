const { Router } = require("express");
const router = Router();

const indexController = require("../controller/indexController");

//Home routes
router.get("/", indexController.home);

module.exports = router;