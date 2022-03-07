let userInput: unknown; //Nearby same as any
let userName: string;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}
//userName = userInput; //Differnt Types. But same things works with any type

function generateError(message: string, code: number): never {
  //Return type never
  //Neaby void with clear types and error solver
  throw { message: message, errorCode: code }; //
}
const result = generateError("An error occured!", 500); //Error handler
console.log(result);
