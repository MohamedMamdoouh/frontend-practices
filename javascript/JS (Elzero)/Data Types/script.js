// let data = [1, 2, 1, 1, 1, 5, "B"];
// let uniqueData = new Set(data);
// let uniqueData2 = new Set().add(1).add(1).add(3);
// let uniqueData3 = new Set([2, 2, 2, 2, 4, 6, 7]);

// console.log(
//   `Is uniqueData has letter B? => ${uniqueData.has("b".toUpperCase())}`
// );
// console.log(data);
// console.log(uniqueData);
// console.log(uniqueData2);
// console.log(uniqueData3);
// console.log(uniqueData.size);

// console.log(data[0]);
// console.log(uniqueData[0]);

// console.log(uniqueData.delete(5));
// console.log(uniqueData);

// uniqueData.clear();
// console.log(uniqueData);

/////////////////////////////////////////

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
// let iterator = mySet.keys();

// console.log(iterator.next());
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// for (const e of mySet) {
//   console.log(e);
// }

// console.log("#".repeat(20));

// let myWeakSet = new WeakSet([{ A: 1, B: 2 }]);
// console.log(myWeakSet);

/////////////////////////////////////////

// let myNewObject = {
//   10: "Number",
//   10: "String",
// };

// console.log(myNewObject[10]);

// let newMap = new Map();
// newMap.set(10, "number");
// newMap.set("10", "string");
// newMap.set(true, "Boolean");
// newMap.set({ a: 5, b: 7 }, "Object");
// newMap.set(function test() {}, "Function");

// console.log(newMap.get(10));
// console.log(newMap.get("10"));

// console.log("####");

// console.log(newMap);

/////////////////////////////////////////

// let map = new Map([
//   [10, "number"],
//   ["name", "string"],
//   [false, "boolean"],
// ]);
// map.set(20, "number");

// console.log(map);

// console.log(map.get(10));
// console.log(map.get("name"));
// console.log(map.get(false));

// console.log("####");

// console.log(map.has("name"));

// console.log("####");

// console.log(map.size);

// console.log(map.delete("name"));

// console.log(map.size);

// map.clear();

// console.log(map.size);

/////////////////////////////////////////

// console.log(Array.from("Ahmed"));

// console.log(
//   Array.from("123456", (x) => Number.parseInt(x) + Number.parseInt(x))
// );

// let myArray = [1, 1, 1, 2, 3, 4];
// let mySet = new Set(myArray);
// console.log(Array.from(mySet));

// function af() {
//   return Array.from(arguments);
// }

// console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));

/////////////////////////////////////////

// let myArray = [10, 20, 30, 40, 50, "A", "B"];

// myArray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myArray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myArray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

// myArray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

// console.log(myArray);

/////////////////////////////////////////

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let myNumber = 10;
// console.log(nums.some((x) => x === myNumber));

// function checkValues(arr, val) {
//   return arr.some((x) => x === val);
// }

// console.log(checkValues(nums, 20));
// console.log(checkValues(nums, 5));

// let range = {
//   min: 10,
//   max: 20,
// };

// let check = nums.some((x) => x >= this.min && x <= this.max, range);

// console.log(checkNumberInRange);

/////////////////////////////////////////

// const locations = {
//   20: "Place 1",
//   5: "Place 2",
//   50: "Place 3",
//   40: "Place 4",
// };

// let mainLocation = 15;

// let locationsArray = Object.keys(locations);

// let result = locationsArray.map((x) => +x).every((x) => x > mainLocation);

// console.log(result);

/////////////////////////////////////////

// console.log("Ahmed");
// console.log(..."Ahmed");
// console.log(...["Ahmed"]);

// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];
// let allArrays = [...myArray1, ...myArray2];
// console.log(allArrays);

// let copiedArray = [...myArray1];
// console.log(copiedArray);

// let allFriends = ["Osama", "Ahmed", "Sayed"];
// let thisYearFriends = ["Sameh", "Mahmoud"];
// allFriends.push(...thisYearFriends);
// console.log(allFriends);

// let myNums = [10, 20, -100, 100, 1000, 500];
// let maxNum = Math.max(...myNums);

// let objOne = {
//   a: 1,
//   b: 2,
// };
// let objTwo = {
//   c: 3,
//   d: 4,
// };

// let allObjects = { ...objOne, ...objTwo, e: 8 };

/////////////////////////////////////////
