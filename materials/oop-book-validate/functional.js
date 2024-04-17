function createBook(bookInput) {
  const bookTemplate = {
    name: 'Untitled',
    title: 'Untitled',
    authorId: null,
    price: 0,
  };

  function cloneTemplate() {
    return structuredClone(bookTemplate);
  }

  function rejectInvalidKeys(bookInput) {
    for (const key in bookInput) {
      if (!bookTemplate.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  function hasAllRequiredKeys(bookInput) {
    for (const key in bookTemplate) {
      if (bookInput[key] === undefined) {
        return false;
      }
    }
    return true;
  }

  function generateId() {
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (c) =>
      (+c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))).toString(16)
    );
  }

  if (!rejectInvalidKeys(bookInput) || !hasAllRequiredKeys(bookInput)) {
    return null;
  }
  const newBookData = cloneTemplate();
  Object.assign(newBookData, bookInput);
  newBookData.id = generateId();
  return newBookData;
}

// Example usage:
const bookInstance = createBook({ name: 'Book1', title: 'Book1', authorId: 1, price: 100 });
console.log(bookInstance);

const badBookInstance = createBook({ name: 'Book1', title: 'Book1', authorId: 1, price: 100, foo: 'bar' });
console.log(badBookInstance);
