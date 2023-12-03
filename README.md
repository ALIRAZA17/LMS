# Library Management System
A web-based Library Management System with functionalities for adding, deleting, updating, and fetching books. Students can also borrow or return borrowed books.

## Tech Stack

1. **NextJs:**
    - Primary Framework for building the user interface.

2. **Prisma:**
    - Controller for handling data access and management.

3. **Postgres:**
    - Database for storing and managing book, student, and borrowing information.

## Features

- **Add Books:** Add new books to the library inventory.
- **Delete Books:** Remove books from the library inventory.
- **Update Books:** Modify information about existing books.
- **Fetch Books:** Retrieve information about available books.
- **Borrow Books:** Allow students to borrow books from the library.
- **Return Books:** Enable students to return borrowed books.

## Getting Started

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/library-management-system.git
    ```

2. **Install Dependencies:**
    ```bash
    cd library-management-system
    npm install
    ```

3. **Set Up Database:**
    - Configure your Postgres database connection in the Prisma configuration file.
    - Run Prisma migrations to set up the database schema.

4. **Run the Application:**
    ```bash
    npm run dev
    ```

5. **Open in Browser:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.
