const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

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
