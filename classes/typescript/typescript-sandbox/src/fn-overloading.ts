// Function overloads
function getWidget(n: number): string;
function getWidget(s: string): number[];

// Function implementation
function getWidget(input: string | number): string | number[] {
  // if (typeof input === 'number') {
  //   // Return a string if a number is passed
  //   return 'hello';
  // } else {
  //   // Return an array of numbers if a string is passed
  //   return [1, 2, 3];
  // }

  // switch
  switch (typeof input) {
    case 'number':
      return 'hello';
    case 'string':
      return [1, 2, 3];
    default:
      throw new Error('Invalid input');
  }
}

// Usage examples
const widgetFromNumber = getWidget(5); // Should return a string like "Widget number 5"
const widgetFromString = getWidget('hello world'); // Should return an array of numbers: [5, 5]

console.log(widgetFromNumber); // Output: "Widget number 5"
console.log(widgetFromString); // Output: [5, 5]

class A {}
class B {}

const instanceType = new A();

console.log(instanceType); // Output: object
