const { Router } = require("express");
const router = Router();

const userController = require("../controller/userController");

//User login routes
router.get("/login", userController.login);
router.post("/login", userController.processLogin);

//User sign in routes
router.get("/signin", userController.signin);
router.post("/signin", userController.processSignin);

module.exports = router;