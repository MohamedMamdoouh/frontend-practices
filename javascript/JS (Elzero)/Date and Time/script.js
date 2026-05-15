// let dateNow = new Date();
// console.log(dateNow);

// console.log(Date.now());

///////////////////////////////////////

// let dateNow = new Date();
// let birthdate = new Date("Feb 15, 2001");
// let dateDiff = dateNow - birthdate;

// console.log(dateNow);
// console.log(birthdate);
// console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

// console.log(dateNow);
// console.log(dateNow.getTime());
// console.log(dateNow.getDate());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());

///////////////////////////////////////

// let dateNow = new Date();
// console.log(dateNow);

// console.log("#".repeat(20));

// dateNow.setTime(0);
// console.log(dateNow);

// dateNow.setTime(10000);
// console.log(dateNow);

// console.log("#".repeat(20));

// dateNow.setDate(5);
// console.log(dateNow);

// dateNow.setDate(35);
// console.log(dateNow);

// dateNow.setDate(-5);
// console.log(dateNow);

// dateNow.setFullYear(2020);
// console.log(dateNow);

// dateNow.setFullYear(2020, 5);
// console.log(dateNow);

// dateNow.setMonth(4);
// console.log(dateNow);

///////////////////////////////////////

// console.log(Date.parse("Feb 25, 2001"));

// console.log(new Date(0));

// console.log(new Date(983052000000));

// console.log(new Date("2-15-2001"));

// console.log(new Date("2001-2-15"));

// console.log(new Date("2001-2")); // Feb 01

// console.log(new Date("2001")); // Jan 01

// console.log(new Date(2001, 2, 15)); // Zero indexed month, Jan = 0
// console.log(new Date(2001, 2, 15, 2, 20, 0));

// console.log(new Date("2001-02-15T10:10:00Z"));
// console.log(new Date("2001-02-15T10:10:00"));

///////////////////////////////////////

// // Start Time
// let start = new Date();

// // Operation
// for (let i = 0; i < 100000; i++) {
//   document.writeln(`<div>${i}</div>`);
// }

// // Time End
// let end = new Date();

// // Operation Duration
// let duration = end - start;

// console.log(duration);

///////////////////////////////////////

// function* generateNumbers() {
//   yield 1;
//   console.log("Hello After Yield 1");
//   yield 2;
//   yield 3;
//   yield 4;
// }

// let generator = generateNumbers(); // function doesn't run here, it creates a state machine

// console.log(typeof generator);
// console.log(generator);

// console.log(generator.next()); // function starts to execute
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// for (const item in generator) {
//   console.log(item);
// }

// for (let value of generateNumbers()) {
//   console.log(value);
// }

///////////////////////////////////////

// function* generateNums() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
// }

// function* generateLetters() {
//   yield "A";
//   yield "B";
//   yield "C";
// }

// function* generateAll() {
//   yield* generateNums();
//   yield* generateLetters();
//   yield* [4, 5, 6];
// }

// let generator = generateAll();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("done here"));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

///////////////////////////////////////

// function* generateNumbers() {
//   let index = 0;
//   if (index === 10000) return;

//   while (true) {
//     yield index++;
//   }
// }

// let generator = generateNumbers();

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

///////////////////////////////////////
