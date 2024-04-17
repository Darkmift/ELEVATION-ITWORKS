class Book {
  template = {
    name: 'Untitled',
    title: 'Untitled',
    authorId: null,
    price: 0,
  };

  #data;

  constructor(bookInput) {
    this.#data = structuredClone(this.template);
    this.bookFactory(bookInput);
  }

  rejectInvalidKeys(bookInput) {
    for (const key in bookInput) {
      if (!this.template.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  hasAllRequiredKeys(bookInput) {
    for (const key in this.template) {
      if (bookInput[key] === undefined) {
        // Check for undefined to allow zero values
        return false;
      }
    }
    return true;
  }

  #makeId() {
    // generate a random UUID for the book
    this.#data.id = '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
      (+c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))).toString(16)
    );
  }

  bookFactory(bookInput) {
    if (this.rejectInvalidKeys(bookInput) && this.hasAllRequiredKeys(bookInput)) {
      for (const key in bookInput) {
        this.#data[key] = bookInput[key];
      }
      this.#makeId(); // Generate an ID for the book
    } else {
      this.#data = null; // Set data to null if input is invalid
    }
  }

  recreate() {
    this.bookFactory(this.#data);
    return this.#data;
  }

  get data() {
    return this.#data;
  }
}

const bookInstance = new Book({ name: 'Book1', title: 'Book1', authorId: 1, price: 100 });
console.log(bookInstance.data); // Should now correctly log the book's data with an ID

// Create a bad book instance with an invalid key
const badBookInstance = new Book({ name: 'Book1', title: 'Book1', authorId: 1, price: 100, foo: 'bar' });
console.log(badBookInstance.data); // Should now log null because the input was invalid
