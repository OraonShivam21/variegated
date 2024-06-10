const express = require("epxress");
const { register } = require("../controllers/auth.controllers");

const router = express.Router();

router.route("/register").post(register);

module.exports = router;
