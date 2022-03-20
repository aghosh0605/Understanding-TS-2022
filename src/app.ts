// let age: number;
// age = 30;
// const userName = "Maximilian";
// console.log(userName);

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return; //Explicitly return something
}

const button = document.querySelector("button"); //without giving ! everything works fine for if statement
function clickHandler(message: string) {
  console.log("Clicked" + message);
}
if (button) {
  // button.addEventListener("click", () => {
  //   console.log("Clicked");
  button.addEventListener("Click", clickHandler.bind(null, "hey"));
}
