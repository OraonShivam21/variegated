const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

exports.registerUser = async ({ email, password, username }) => {
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) throw new Error("Email already in use! Please try to login.");

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      username,
    },
  });

  return { id: user.id, email: user.email, username: user.username };
};

exports.loginUser = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error("Invalid email or password");

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error("Invalid email or password");

  const token = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.TOKEN_SECRET,
    { expiresIn: "1d" }
  );

  return token;
};
