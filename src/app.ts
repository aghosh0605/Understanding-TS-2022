// const userName = "Max";
//userName = "Maxi";
// let age = 30;
// age = 29;
//Never use var anymore
//Var only knows func and global only not in if condition
//Let has scope in every block that has curly braces
//Accepting Default in b parameter. Keep default always at last
const add = (a: number, b: number = 1) => a + b; //Returns a+b if only one expression is there
//Above is an arrow function
printOutput(add(2));
//Normal JS Func
function printOutput(output: string | number) {
  console.log(output);
}

//Spread Operator works on arrays objects
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
//activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);

const person = {
  firstName: "Max",
  age: 30,
};
//const copyPerson = person; //Only copies address
const copyPerson = { ...person }; //Gets perfect copy
//Rest Parameters
const addRest = (...numbers: number[]) => {
  //let result =0; To add every element in array with for loop
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addedNumbers = addRest(5, 10, 15, 20.5);
console.log(addedNumbers);

//Array Destruct
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
//1st 2 element will be stored at hobby1 and hobby2 rest will be in
// array remainingHobbies
const { firstName: userName, age } = person;
console.log(userName, age, person);
