const calcAge = (birthYear, currentYear) => currentYear - birthYear;
console.log(calcAge(1991, 2021));

//Exercise
//Convert to ES6 Syntax
const yearUntilRetirement = (year = 2020, firstName = "Glain") => {
  let age = 28;
  let retirement = 65 - age;
  if(retirement > 0){
      console.log(`${firstName} retired in ${retirement} years.`);
  } else {
      console.log(`${firstName} is already retired.`);
  }
}
yearUntilRetirement();