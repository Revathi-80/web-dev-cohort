import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const registerUser = async (req, res) => {
  console.log("User registered");
  await prisma.User.findUnique({
    where: {
      email: req.body.email,
    },
  });
};
