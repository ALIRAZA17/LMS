import Link from "next/link";
import prisma from "../../lib/prisma";


async function getAllBooks() {
  const books = await prisma.book.findMany({
    where: {
      name: {
        not: null
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
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>

            {
              books.map((book)=>{
                return (
                  <tr>
                  <th scope="row">1</th>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>
                    <button className="btn btn-sm btn-warning">Edit</button>
                    <button className="btn btn-sm btn-danger ml-1">Delete</button>
                  </td>
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