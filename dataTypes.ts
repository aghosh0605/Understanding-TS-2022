//Global Constants
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
enum Role { //enum data type
  ADMIN = 1,
  READ_ONLY = "Read-Only",
  AUTHOR = 1000,
} //Alterative of Global variable
//If no values assigned it starts with 0 then 1 then 2
//If first value is assigned as n then it continues n+1 , n+2

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; //array
//   role: [number, string]; //tuple data type
// } = {
const person = {
  name: "Aniruddha",
  age: 20,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  role_enum: Role.AUTHOR,
};
person.role.push("admin");
//console.log(person.role);
//person.role = [0, "admin", "user"];
//person.role[1] = 10;
// let favouriteActivities: any[];
// favouriteActivities = ["Sports", 1];
// console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map());
}
if (person.role_enum === Role.AUTHOR) {
  console.log(Role.AUTHOR);
}
