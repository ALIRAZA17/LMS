import Link from "next/link";

interface EditBookButtonProps {
  bookId: string;
}

export default function EditBookButton({ bookId }: EditBookButtonProps) {

  return <Link href={`/edit-book?id=${bookId}`}><button className="btn btn-sm btn-warning">Edit</button></Link>;
}
