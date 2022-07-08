const { Router } = require("express");
const router = Router();

const codeController = require("../controller/codeController");

//Code routes
router.get("/code", codeController.begin);
router.post("/code", codeController.checkCode);

module.exports = router;