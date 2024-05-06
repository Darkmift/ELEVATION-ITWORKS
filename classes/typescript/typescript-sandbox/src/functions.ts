type MyFunc = (a: number) => number;

const add: MyFunc = (obj: number) => obj;

interface IMyFunc {
  (a: number): number;
}

const subtract: IMyFunc = (a: number) => a;

type AB = 'a' | 'b' | IMyFunc;

// interface IFoo {
//   bar: AB;
// }




