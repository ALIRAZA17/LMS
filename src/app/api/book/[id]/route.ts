import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function GET(request: NextRequest, params: { params: any ; id: string }): Promise<NextResponse> {
  const id = params.params.id;
  const book = await prisma.book.findFirst({
    where: {
      id: id,
    },
  });

  return NextResponse.json(book);
}
