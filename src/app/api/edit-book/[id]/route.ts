import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function PUT(request: NextRequest, params: {
    params: any; id: string
}): Promise<NextResponse> {
    const id = params.params.id;
    const body = await request.json();
    const { bookName, authorName } = body.book;
    console.log(body);
    const updatedBook = await prisma.book.update({
        where: { id },
        data: {
            name: bookName,
            author: authorName,
        },
    });
    return NextResponse.json(updatedBook);
}
