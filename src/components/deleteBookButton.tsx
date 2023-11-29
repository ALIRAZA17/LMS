'use client'
import { useRouter } from "next/navigation";

interface DeleteBookButtonProps {
  bookId: string;
}

export default function DeleteBookButton({ bookId }: DeleteBookButtonProps) {
  const router = useRouter();
  const handleClick = async () => {
    try {
      await fetch(`/api/delete-book/${bookId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  };


  return <button className="btn btn-sm btn-danger ml-2"
    onClick={handleClick}
  >Delete</button>;
}
