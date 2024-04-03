const num = ['a', 'a', 'a', 'a', 'b', 'b', 'l'];

num.reduce((acc, char) => {
  if (!acc[char]) {
    acc[char] = 0;
  }

  acc[char]++;

  return acc;
}, {});

// a function that takes in array page and limit
function paginate(arr, page, limit) {
  // return the item
  return arr.slice((page - 1) * limit, page * limit);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.slice(0,1)
// [1]

// GET /api/v1/transactions?page=1&limit=10