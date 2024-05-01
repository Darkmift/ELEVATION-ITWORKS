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

// Assuming the function signature is changed for testing
export function calc(n1, n2, operator, actions = { add, subtract, multiply, divide }) {
  if (operator === 'sum') {
    return actions.add(n1, n2);
  }
  if (operator === 'sub') {
    return actions.subtract(n1, n2);
  }
  if (operator === 'mult') {
    return actions.multiply(n1, n2);
  }
  if (operator === 'div') {
    return actions.divide(n1, n2);
  }
  throw new Error('Invalid operation');
}

// calc(1, 1, 'sum', { add });
