import prisma from "@/app/libs/db";
import { NextResponse } from "next/server";

export const POST = async (req, { params }) => {
  try {
    const { categoryId } = params;
    console.log(categoryId);
    const body = await req.json();
    console.log(body);
    const { name, countValue } = body;

    // Find the category by ID
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!category) {
      return NextResponse.json(
        { message: "Category not found" },
        { status: 404 }
      );
    }

    // Create a new counter and associate it with the category
    const newCounter = await prisma.counter.create({
      data: {
        name,
        countValue,
        category: {
          connect: { id: category.id }, // Connect the counter to the category
        },
      },
    });

    return NextResponse.json(newCounter);
  } catch (error) {
    return NextResponse.json(
      { message: "POST Error", error },
      { status: 500 }
    );
  }
};

export const GET = async (req, { params }) => {
  try {
    console.log('GET From Category')
    const { categoryId } = params;
    console.log(categoryId)
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });
    console.log(category)
    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json({ message: "GET Error" }, { status: 500 });
  }
};
