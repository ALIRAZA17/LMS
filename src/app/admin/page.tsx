import Link from "next/link";
export default function AdminPage() {
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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <button className="btn btn-sm btn-warning">Edit</button>
                  <button className="btn btn-sm btn-danger ml-1">Delete</button>
                </td>
              </tr>
              
            </tbody>
          </table>
  
        </div>
  
      </>
    );
  }