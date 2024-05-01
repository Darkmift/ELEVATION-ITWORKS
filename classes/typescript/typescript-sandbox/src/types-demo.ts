type AllowedModels = 'BMW' | 'Toyota' | 'Ford';

type CarDetails = {
  make: string;
  model: AllowedModels;
};

interface ICarDetails {
  make: string;
  // model: string;
  model: AllowedModels; // string
}

interface IFoo {
  bar: string;
}

class Car implements ICarDetails, IFoo {
  make = 'BMW';
  model: AllowedModels = 'BMW';
  aaa = true;
  bar = 'bar';
}

class Honda extends Car {
  foo = 5;
}

const honda = new Honda();

interface ITruckDetails extends ICarDetails {
  towingCapacity: number;
}

function carFactory(foo: CarDetails) {
  return {
    make: foo.make,
    model: foo.model,
  };
}

const carDetails: CarDetails = {
  make: 'Toyota',
  model: 'Ford',
};

console.log(carFactory(carDetails));
