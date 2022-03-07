type Combinable = number | string; //Aliases to make typecasting easy
type conversionDescriptor = "as-number" | "as-string";
function combine(
  input1: Combinable,
  input2: number | string,
  resultConversion: conversionDescriptor //Literal Types
) {
  //Union Types
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  //   if (resultConversion === "as-number") {
  //     return +result; //Returns a number as + is added. Same as function parseFloat()
  //   } else {
  //     return result.toString();
  //   }
  return result;
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Max", "Anna", "as-string");
console.log(combinedNames);
