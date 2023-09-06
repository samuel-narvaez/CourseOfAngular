const num: number = 0; // number
const username: string | number = 'sam'; //doble tipado
const lastname: string = 'narvaez' // string

const sum = (a: number, b: number) => {
  return a + b;
}


class Person {
  constructor(public age: number, public lastname: string) { }
}


const sam = new Person(15, 'samuel');
