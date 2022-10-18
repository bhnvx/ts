type Player = {
  name: string;
  age?: number;
};

const playerMaker = (name: string): Player => ({ name });
const ky = playerMaker("ky");

console.log(ky);

ky.age = 12;

console.log(ky);
