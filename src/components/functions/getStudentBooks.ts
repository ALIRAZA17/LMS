import prisma from "../../../lib/prisma";

export async function getStudentBooks() {
  const books = await prisma.student.findMany({
    where: {
      name: {
        not: ""
      }
    }
  });
  return books;
}