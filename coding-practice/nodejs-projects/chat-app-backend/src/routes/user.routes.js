const express = require("express");
const { authenticate } = require("../middlewares/auth.middlewares");
const { profile } = require("../controllers/user.controllers");

const router = express.Router();

router.route("/profile").get(authenticate, profile);

module.exports = router;
