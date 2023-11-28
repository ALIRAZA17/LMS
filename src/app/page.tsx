import Link from "next/link";
import prisma from "../../lib/prisma";
import Book from "@/components/Book";


async function getAllBooks() {
  const books = await prisma.book.findMany({
    where: {
      name: {
        not: ""
      }
    }
  });
  return books;
}
export default async function Home() {
  const books = await getAllBooks();
  return (
    <>
      <div className="d-flex justify-content-center align-items-center my-4">
        <Link href={'/admin'}>
          <button className="btn btn-primary">
            Use as Admin
          </button>
        </Link>
        <br />
        <Link href={'/student'}>
          <button className="btn btn-primary ml-2">
            Use as Student
          </button>
        </Link>
      </div>

      <h1 className="text-center my-1">All Books Data</h1>

      <div className="mt-4 container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Name</th>
              <th scope="col">Author</th>
            </tr>
          </thead>
          <tbody>
            {
              books.map((book, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <Book id={book.id} key={book.id} authorName={book.author} bookName={book.name} />
                  </tr>
                );
              })
            }

          </tbody>
        </table>

      </div>

    </>
  );
}