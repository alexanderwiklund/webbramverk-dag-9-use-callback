import React, { useState, useEffect } from "react";

export const Bookcase = ({ getBooks }) => {
  console.log("Render Bookcase");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const list = getBooks(5);
    setBooks(list);
  }, [getBooks]);

  return (
    <div>
      <h1>Bookcase</h1>
      {books.map((book) => {
        return <p>{book.name}</p>;
      })}
    </div>
  );
};
