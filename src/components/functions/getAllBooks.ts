import prisma from "../../../lib/prisma";

export async function getAllBooks() {
  const books = await prisma.book.findMany({
    where: {
      name: {
        not: ""
      }
    }
  });
  return books;
}