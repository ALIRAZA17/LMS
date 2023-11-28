import DeletePostButton from "./deleteBookButton";

interface BookProps {
  id: string;
  bookName: string;
  authorName: string;
}

export default function Book(props: BookProps): JSX.Element {
  const { id, bookName, authorName } = props;
  
  return (
    <>
      <td>{bookName}</td>
      <td>{authorName}</td>
      <td>
        <button className="btn btn-sm btn-warning">Edit</button>
        <DeletePostButton key={id} bookId={id}/>
      </td>
    </>
  );
}
