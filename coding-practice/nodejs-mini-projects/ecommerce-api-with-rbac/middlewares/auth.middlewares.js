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
  return async (req, res, next) => {
    try {
      if (!req.user || !req.user.role) throw "Access Denied!";

      const userPermissions = (
        await prisma.role.findUnique({
          where: {
            name: req.user.role,
          },
          select: {
            permissions: true,
          },
        })
      ).permissions;

      const hasPermissions = permissions.every((permission) =>
        userPermissions.includes(permission)
      );

      if (!hasPermissions) throw "Access Denied!";

      next();
    } catch (error) {
      console.error(`Error while checking permission: ${error}`);
      res.status(403).json({ error });
    }
  };
};

module.exports = { verifyToken, checkPermissions };
