const { userProfile } = require("../services/user.services");

exports.profile = async (req, res) => {
  try {
    const user = await userProfile(req.user.userId);

    res.status(200).json({ user });
  } catch (error) {
    res.status(400).json({ error });
  }
};
