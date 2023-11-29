'use client'
import { useRouter } from "next/navigation";

interface RemoveBookButtonProps {
  bookId: string;
}

export default function RemoveBookButton({ bookId }: RemoveBookButtonProps) {
  const router = useRouter();
  const handleClick = async () => {
    try {
      await fetch(`/api/delete-student-book/${bookId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  };


  return <button className="btn btn-sm btn-danger ml-2"
    onClick={handleClick}
  >Remove</button>;




}
