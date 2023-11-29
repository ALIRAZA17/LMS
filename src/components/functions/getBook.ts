import prisma from "../../../lib/prisma";

export async function getBook(id : string) {
  const book = await prisma.book.findFirst({
    where: {
      id: id
    }
  });
  return book;
}