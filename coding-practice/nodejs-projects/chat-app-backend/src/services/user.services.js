const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.userProfile = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: { email: true, username: true, online: true },
  });

  if (!user) return new Error("User profile not found!");

  return user;
};
