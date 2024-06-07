const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, street, city, state, country, zip } =
      req.body;

    if (
      !name ||
      !email ||
      !password ||
      !street ||
      !city ||
      !state ||
      !country ||
      !zip
    )
      throw "Please provide all the information to be registered!";

    const roleFound =
      (role && (await prisma.role.findUnique({ where: { name: role } }))) ||
      (await prisma.role.findUnique({ where: { name: "customer" } }));

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        roleId: roleFound.id,
        address: { street, city, state, country, zip },
      },
    });

    const userFound = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        name: true,
        email: true,
        address: true,
      },
    });

    res.status(201).json({
      message: "User successfully registered!",
      createdUser: { ...userFound, role: roleFound.name },
    });
  } catch (error) {
    console.log(`Error while registering user: ${error}`);
    res.status(400).json({ error });
  }
};

const loginUser = async (req, res) => {};

const getUserProfile = async (req, res) => {};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
