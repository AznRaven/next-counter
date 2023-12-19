import prisma from "@/app/libs/db";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    console.log('POST')
    console.log(req)
    const body = await req.json();
    console.log(body)
    const { name } = body;
    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });
    return NextResponse.json(newCategory);
  } catch (error) {
    return NextResponse.json({ message: "POST Error", error }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json({ message: "GET Error" }, { status: 500 });
  }
};
