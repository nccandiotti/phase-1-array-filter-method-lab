// Code your solution here
"strict";

const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];

const findMatching = function (arrayOfDrivers, name) {
  let matching = arrayOfDrivers.filter(
    (driver) =>
      driver === name ||
      driver === name.toUpperCase() ||
      driver === name.toLowerCase()
  );
  if (matching) {
    return matching;
  } else return [];
};
const fuzzyMatch = function (arrayOfDrivers, driver) {
  let firstTwo = arrayOfDrivers.filter(
    (name) => name.substring(0, 2) === driver.substring(0, 2)
  );
  if (firstTwo) return firstTwo;
};
const matchName = function (arrayOfDrivers, string) {
  let match = arrayOfDrivers.filter((name) => name.name === string);
  if (match) return match;
};
