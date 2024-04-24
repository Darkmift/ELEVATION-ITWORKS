// an add fn
export function add(n1, n2) {
  return n1 + n2;
}

// a subtract fn
export function subtract(n1, n2) {
  return n1 - n2;
}

// a multiply fn
export function multiply(n1, n2) {
  return n1 * n2;
}

// a divide fn
export function divide(n1, n2) {
  return n1 / n2;
}

export function calc(n1, n2, operation) {
  if (operation === 'sum') {
    return add(n1, n2);
  }
  if (operation === 'sub') {
    return subtract(n1, n2);
  }
  if (operation === 'mult') {
    return multiply(n1, n2);
  }
  if (operation === 'div') {
    return divide(n1, n2);
  }
  throw new Error('Invalid operation');
}

// test that when given 2 nums and 'sum' as operation, it returns the sum
// unit calc(1,1,'sum') => the sum fn was called with 1,1
// int calc(1,1,'sum') => the sum fn was called with 1,1 and returned 2
// E2E calc(1,1,'sum') => the calc fn was called with 1,1,'sum' and returned 2

// test that when given 2 nums and 'sub' as operation, it returns the difference
// test that when given 2 nums and 'mult' as operation, it returns the product
// test that when given 2 nums and 'div' as operation, it returns the quotient
// test that when given 2 nums and an invalid operation, it throws an error
