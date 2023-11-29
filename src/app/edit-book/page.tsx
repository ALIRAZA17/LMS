'use client'
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";


export default function EditBook(params: {
    searchParams: any; params: any; id: string
}) {

    const id = params.searchParams.id;

    const router = useRouter();

    const [book, setBook] = useState({
        bookName: '',
        authorName: '',
    });

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const response = await fetch(`/api/book/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch book data");
                }
                const bookFetched = await response.json();
                setBook(
                    {
                        bookName: bookFetched.name,
                        authorName: bookFetched.author
                    }
                );

            } catch (error) {
                console.error('Error fetching book data:', error);
            }
        };

        if (id) {
            fetchBookData();
        }
    }, [id]);

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            await fetch(`/api/edit-book/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({book})
            })

            router.push('/');
            router.refresh();
        } catch (error) {
            console.error(error)
        }

        setBook({
            bookName: "",
            authorName: "",
        });
    };

    return (
        <div className="container my-4">
            <div className="text-center">
                <h1>Edit Book</h1>
                <h4 className="text-sm">Edit the below form to update a book</h4>
            </div>
            <form className="my-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Book Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={book.bookName}
                        onChange={(e) => setBook({ ...book, bookName: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Author Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={book.authorName}
                        onChange={(e) => setBook({ ...book, authorName: e.target.value })}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Edit
                </button>
            </form>
        </div>
    );
}
