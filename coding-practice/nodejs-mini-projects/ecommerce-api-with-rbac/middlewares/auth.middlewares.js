const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const verifyToken = async (req, res, next) => {
  try {
    if (!req.cookies.accessToken) throw "Access Denied!";

    const accessToken = req.cookies.accessToken;
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    if (!decoded) throw "Invalid Token!";

    req.user = {
      id: decoded.id,
      role: (
        await prisma.role.findUnique({
          where: { id: decoded.role },
          select: { name: true },
        })
      ).name,
    };

    next();
  } catch (error) {
    console.error(`Error while verifying token: ${error}`);
    res.status(403).json({ error });
  }
};

const checkPermissions = (permissions) => {
  return async (req, res, next) => {};
};

module.exports = { verifyToken, checkPermissions };
