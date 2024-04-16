import authors from '../jsons/authors.json' assert { type: 'json' };
import { writeJSON } from 'fs-extra/esm';
import { faker } from '@faker-js/faker';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.resolve(__dirname, '../', 'jsons');

function generateBooks({ outputPath, amount, minPrice, maxPrice, authorsArr }) {
  // Array to hold the books data
  let books = [];

  // Iterate over the amount to generate each book
  for (let i = 0; i < amount; i++) {
    // Randomly select an author from authorsArr using math random
    const author = authorsArr[Math.floor(Math.random() * authorsArr.length)];
    // Generate a random price within the given range
    const price = faker.commerce.price({ min: minPrice, max: maxPrice });
    // Generate a book title
    const title = faker.lorem.lines({ min: 2, max: 2 });
    // Generate a book description
    const description = faker.lorem.lines({ min: 10, max: 30 });

    // Push the book data to the array
    books.push({
      id: faker.string.uuid(),
      authorId: author.id.$oid,
      price: parseInt(price),
      title: title,
      description,
    });
  }

  // Write the JSON data to the specified path
  writeJSON(path.resolve(jsonPath, outputPath), books)
    .then((data) => {
      console.log('Books data generated successfully!');
      console.log(data);
    })
    .catch((err) => {
      console.error('Error generating books data:', err);
    });
}

// Example usage:
generateBooks({
  outputPath: 'books.json',
  amount: 100,
  minPrice: 15.5,
  maxPrice: 39.99,
  authorsArr: authors,
});
