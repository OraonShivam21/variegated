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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      throw "Please provide the relevant information for authentication!";

    const userFound = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!userFound || !(await bcrypt.compare(password, userFound.password)))
      throw "Invalid Credentials!";

    const accessToken = jwt.sign(
      {
        id: userFound.id,
        role: userFound.roleId,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("accessToken", accessToken);

    res.status(200).json({ message: "Successfully logged in!" });
  } catch (error) {
    console.error(`Error while logging in user: ${error}`);
    res.status(400).json({ error });
  }
};

const getOwnProfile = async (req, res) => {
  try {
    const id = req.user.id;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        name: true,
        email: true,
        address: true,
        createdAt: true,
      },
    });

    res.status(200).json({ user });
  } catch (error) {
    console.error(`Error while getting own profile: ${error}`);
    res.status(400).json({ error });
  }
};

const updateOwnProfile = async (req, res) => {
  res.send("Update own profile");
};

const getAllUserProfiles = async (req, res) => {
  try {
    const usersFound = await prisma.user.findMany({
      select: {
        name: true,
        email: true,
        address: true,
        role: true,
        createdAt: true,
      },
    });

    const users = usersFound.map((user) => ({
      name: user.name,
      email: user.email,
      address: user.address,
      role: user.role.name,
      createdAt: user.createdAt,
    }));

    res.status(200).json({ users });
  } catch (error) {
    console.error(`Error while fetching user profiles: ${error}`);
    res.status(400).json({ error });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getOwnProfile,
  updateOwnProfile,
  getAllUserProfiles,
};
