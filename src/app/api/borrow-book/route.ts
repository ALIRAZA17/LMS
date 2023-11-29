import prisma from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const res = await request.json();
  const { bookName, authorName } = res.data;
  const result = await prisma.student.create({
    data: {
        name: bookName,
        author: authorName,
    },
  });

  return NextResponse.json({result});
}
