'use client'

import Link from 'next/link';
import { SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddBook() {

    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const router = useRouter()

    const handleBookNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBookName(event.target.value);
      };
      

      const handleAuthorNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuthorName(event.target.value);
      };
      

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        try {
            await fetch('/api/add-book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ bookName, authorName })
            })

            router.refresh()
        } catch (error) {
            console.error(error)
        }

        setBookName('');
        setAuthorName('');
    };



    return (
        <div className="container my-4">
            <div className="text-center">
                <h1>
                    Add Book
                </h1>

                <h4 className="text-sm">
                    Fill the below form to add a book
                </h4>
            </div>
            <form className="my-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Book Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleBookNameChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Author Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={handleAuthorNameChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Book Year</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}