const { registerUser } = require("../services/auth.services");

exports.register = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const user = await registerUser({ email, password, username });

    res.status(201).json({ message: "User registered successfully!", user });
  } catch (error) {
    console.error(`Error while registering user: ${error}`);
    res.status(400).json({ error });
  }
};
