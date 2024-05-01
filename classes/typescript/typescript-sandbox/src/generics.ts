type User<T> = {
  id: T;
  name: string;
};

type User1<T extends string | number> = {
  id: T;
  name: string;
};

type User2 = {
  id: string | number;
  name: string;
};

enum ABC {
  A = 'A',
  B = 'B',
  C = 'C',
}

const user: User<number> = {
  id: 1,
  name: 'John Doe',
};

const user2: User<boolean> = {
  id: true,
  name: 'John Doe',
};

const user3: User<ABC> = {
  id: ABC.A,
  name: 'John Doe',
};

function foo<T>(arg: T): T {
  return arg;
}

const result = foo<number>(1);
const result2 = foo<boolean>(true);

function foo2<T, K, P>(n1: T, n2: K, n3: P): { a: T; b: K; c: P } {
  return {
    a: n1,
    b: n2,
    c: n3,
  };
}

const result3 = foo2<number, string, boolean>(1, '', true);

async function bar(): Promise<string> {
  return 'something as promise';
}

function bar2(): Promise<string> {
  return Promise.resolve('Hello');
}

function main() {
  bar().then((result) => {
    console.log(result);
  });
}

const obj = { 1: 'a', 2: 'b', 3: 'c' };

const nn = bar();

type ObjTypeP = typeof nn;

//ts type with key in example
type ObjType = typeof obj;
type Key = keyof ObjType;

type ABCType = 'A' | 'B' | 'C';
type Blah = keyof ABCType;

enum ABC2 {FOO,BAR,BAZ}
type Blat = keyof typeof ABC2;
