'use client'
import { useRouter } from "next/navigation";

interface BorrowBookButtonProps {
    id: string;
}

export default function BorrowBookButton({ id }: BorrowBookButtonProps) {
    const router = useRouter();
    const handleClick = async () => {
        try {
            const response = await fetch(`/api/book/${id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch book data");
            }
            const bookFetched = await response.json();
            const data = {
                bookName: bookFetched.name,
                authorName: bookFetched.author,
            }            

            await fetch('/api/borrow-book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data })
            })
            router.refresh();

        } catch (error) {
            console.error('Error fetching book data:', error);
        }
    };
    return <button className="btn btn-sm btn-warning ml-2"
        onClick={handleClick}
    >Borrow</button>;
}
