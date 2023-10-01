import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from 'next-auth/next'
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  const session = await getServerSession(authOptions)

  const res = await request.json();
  const { title, content } = res;
  console.log({ res });

  try {
    // Check if the user already exists based on a unique identifier (e.g., email)
    const existingUser = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    let user;

    // If the user doesn't exist, create the user
    if (!existingUser) {
      user = await prisma.user.create({
        data: {
          name: session?.user?.name,
          email: session?.user?.email,
        },
      });
    } else {
      user = existingUser;
    }

    // Create the post and associate it with the author
    const result = await prisma.post.create({
      data: {
        title,
        content,
        published: true,
        author: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "An error occurred." }, { status: 500 });
  }
}
