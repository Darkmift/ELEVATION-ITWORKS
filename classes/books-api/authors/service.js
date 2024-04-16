import authors from '../jsons/authors.json' assert { type: 'json' };

// export a method that returns all authors
export const getAuthors = () => authors;

// export a method that returns an author by id
export const getAuthorById = (id) => authors.find((author) => author.id.$oid === id);