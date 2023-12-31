import Link from "next/link";
import { getAllBooks } from "@/components/functions/getAllBooks"; 


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
                    <td>{book.name}</td>
                    <td>{book.author}</td>
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