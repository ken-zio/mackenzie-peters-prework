const selfMultiply = function (num1) {
  return num1 * num1;
};

console.log(selfMultiply(3));

const fullName = function (firstname, lastname) {
  const name = `${lastname}, ${firstname}`;
  return name;
};

console.log(fullName("George", "Yoo"));

const numCheck = function (num) {
  return num % 2 === 0;
};

console.log(numCheck(2));
console.log(numCheck(3));
