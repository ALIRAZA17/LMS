import DeletePostButton from "./deleteBookButton";
import EditBookButton from "./editBookButton";

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
        <EditBookButton key={id} bookId={id}/>
        <DeletePostButton key={id} bookId={id}/>
      </td>
    </>
  );
}
