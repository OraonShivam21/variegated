const { registerUser, loginUser } = require("../services/auth.services");

exports.register = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username)
      throw new Error("Please provide valid information for registration!");

    const user = await registerUser({ email, password, username });

    res.status(201).json({ message: "User registered successfully!", user });
  } catch (error) {
    console.error(`Error while registering user: ${error}`);
    res.status(400).json({ error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      throw new Error("Please provide all information for logging in!");

    const user = await loginUser({ email, password });

    res.status(200).json({ message: "Login Successful!", user });
  } catch (error) {
    console.error(`Error while logging user in: ${error}`);
    res.status(400).json({ error });
  }
};
