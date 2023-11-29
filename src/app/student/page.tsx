import { getAllBooks } from "@/components/functions/getAllBooks";
import BorrowBookButton from "@/components/borrowBookButton";
import { getStudentBooks } from "@/components/functions/getStudentBooks";
import RemoveBookButton from "@/components/removeBookButton";

export default async function StudentPage() {
  const books = await getAllBooks();
  const StudentBooks = await getStudentBooks();

    return (
      <>
        <h1 className="text-center my-4">All Books Data</h1>
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
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>
                      <BorrowBookButton id={book.id} key={book.id}/>
                    </td>
                  </tr>
                );
              })
            }
              
            </tbody>
          </table>
  
        </div>
        <h1 className="text-center my-5">Your Books</h1>
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
                StudentBooks.map((book, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{book.name}</td>
                      <td>{book.author}</td>
                      <td>
                        <RemoveBookButton bookId={book.id} key={book.id}/>
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