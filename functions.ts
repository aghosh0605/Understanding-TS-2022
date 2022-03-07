function add(n1: number, n2: number): number {
  //return type at last
  return n1 + n2;
}

//Undefined Type is used if there is return statement but we didn't pass an value through return
function printResult(num: number): void {
  //Void is used if there is no return statement
  console.log("Result: " + num); //Returns 17
  //return; //For Type undefined
}

// console.log(printResult(add(5, 12))); //Outputs Undefined

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  //Callback Types and Functions
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

let combineValues: (a: number, b: number) => number;
combineValues = add;
//combineValues = printResult; //Error as it accepts two argument
//combineValues = 5; //Error because it is a function not number type
console.log(combineValues(8, 8));
