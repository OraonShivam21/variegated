const express = require("express");
const {
  registerUser,
  loginUser,
  getOwnProfile,
  updateOwnProfile,
  getAllUserProfiles,
} = require("../controllers/user.controllers");
const {
  verifyToken,
  checkPermissions,
} = require("../middlewares/auth.middlewares");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router
  .route("/profile")
  .get(verifyToken, checkPermissions(["readProfile"]), getOwnProfile)
  .patch(verifyToken, checkPermissions(["updateProfile"]), updateOwnProfile);

router
  .route("/profiles/all")
  .get(verifyToken, checkPermissions(["readUser"]), getAllUserProfiles);

module.exports = router;
