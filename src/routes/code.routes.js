const { Router } = require("express");
const router = Router();

const codeController = require("../controller/codeController");

//Code routes
router.get("/", codeController.begin);
router.post("/", codeController.checkCode);

module.exports = router;