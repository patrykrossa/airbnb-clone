import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextApiResponse } from "next";
import { User } from "@prisma/client";

export async function POST(request: Request, res: NextApiResponse<User>) {
  const body = request.body;
  const { email, name, password } = body as any;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword
    }
  });

  res.status(200).json(user);
}

export default POST;
