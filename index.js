//More exercises with Strings

//1. Write a JavaScript program to convert a string in abbreviated form.

let firstString = "This Is A New String For Natalia";

let abbrEv = firstString.replace(/[^A-Z]/g, "");
console.log(abbrEv);
//2. Write a Javascript program to hide email addresses to protect from unauthorized user.
//givenEmail = kitzinghoecker@gmail.com
//output = kit...er@gmail.com
let avg, splitted, part1, part2, useremail;
useremail = "kitzinghoecker@gmail.com";
splitted = useremail.split("@");
part1 = splitted[0];
avg = part1.length / 2;
part1 =
  part1.substring(0, part1.length - avg - avg / 2) +
  "..." +
  part1.charAt(part1.length - 2) +
  part1.charAt(part1.length - 1) +
  "@";
part2 = splitted[1];

console.log(part1 + part2);
//3. Write a Javscript program to convert the string as mentioned below.
//givenString = "PB language Strings";
//output = "PB-language-Strings";

let givenString = "PB language Strings";
console.log(givenString.split(" ").join("-"));

//4. Write a Javascript program to revert a snake_case string.
//givenValue = 'first_name'
//output = 'firstname'

let givenValue = "first_name";
let splitVal = givenValue.split("_");
partOne = splitVal[0];
partTwo = splitVal[1];
console.log(partOne + partTwo);
