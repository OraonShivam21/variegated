const jwt = require("jsonwebtoken");

exports.authenticate = (req, res, next) => {
  if (
    req.headers.authorization?.split(" ")[0] === "Bearer" &&
    req.headers.authorization?.split(" ")[1]
  ) {
    const token = req.headers.authorization?.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      if (!decoded) throw new Error("Unauthorized: You're not authorized!");

      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ error });
    }
  } else {
    res
      .status(401)
      .json({ error: "Invalid bearer token or Access Token missing!" });
  }
};
