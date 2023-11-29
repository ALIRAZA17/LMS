import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function DELETE(request: NextRequest, params: {
  params: any; id: string
}): Promise<NextResponse> {
  const id = params.params.id;
  const book = await prisma.student.delete({
    where: { id }
  })
  return NextResponse.json(book);
}
