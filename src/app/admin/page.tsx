import Link from "next/link";
import prisma from "../../../lib/prisma";
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
export default async function AdminPage() {
  const books = await getAllBooks();
  return (
    <>
      <h1 className="text-center my-4">All Books Data</h1>

      <div className="d-flex justify-content-center align-items-center my-4">

        <Link href={'/add-book'}>
          <button className="btn btn-md btn-primary">
            Add Book
          </button>

        </Link>
      </div>
      <div className="mt-4 container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Book Name</th>
              <th scope="col">Author</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              books.map((book, index) => {
                return (
                  <tr key={book.id}>
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