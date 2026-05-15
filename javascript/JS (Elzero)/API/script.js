// const data = {
//   widget: {
//     debug: "on",
//     window: {
//       title: "Sample Widget",
//       name: "main_window",
//       width: 500,
//       height: 500,
//     },
//     image: {
//       src: "Images/Sun.png",
//       name: "sun1",
//       hOffset: 250,
//       vOffset: 250,
//       alignment: "center",
//     },
//     text: {
//       data: "Click Here",
//       size: 36,
//       style: "bold",
//       name: "text1",
//       hOffset: 250,
//       vOffset: 100,
//       alignment: "center",
//       onMouseUp: "sun1.opacity = (sun1.opacity / 100) * 90;",
//     },
//   },
// };

// const data2 = (
//   <widget>
//     <debug>on</debug>
//     <window title="Sample Widget">
//       <name>main_window</name>
//       <width>500</width>
//       <height>500</height>
//     </window>
//     <image src="Images/Sun.png" name="sun1">
//       <hOffset>250</hOffset>
//       <vOffset>250</vOffset>
//       <alignment>center</alignment>
//     </image>
//     <text data="Click Here" size="36" style="bold">
//       <name>text1</name>
//       <hOffset>250</hOffset>
//       <vOffset>100</vOffset>
//       <alignment>center</alignment>
//       <onMouseUp>sun1.opacity = (sun1.opacity / 100) * 90;</onMouseUp>
//     </text>
//   </widget>
// );

// const data3 = {
//   string: "Elzero",
//   number: 100,
//   object: { EG: "Giza", KSA: "Riyadh" },
//   array: ["HTML", "CSS", "JS"],
//   boolean: true,
//   null: null,
// };

//////////////////////////////////////////

// // Get From Server
// const jsonFromServer = `{"username": "Ahmed", "age": 25}`;
// console.log(typeof jsonFromServer);
// console.log(jsonFromServer);

// // Convert To JS Object
// const jsObject = JSON.parse(jsonFromServer);
// console.log(typeof jsObject);
// console.log(jsObject);

// // Update Data
// jsObject["username"] = "Ali";
// jsObject["age"] = 27;
// console.log(jsObject);

// // Send To Server
// const jsonObjectToServer = JSON.stringify(jsObject);
// console.log(typeof jsonObjectToServer);
// console.log(jsonObjectToServer);

/////////////////////////////////////////

// console.log("One");
// setTimeout(() => {
//   console.log("Three");
// }, 0);
// setTimeout(() => {
//   console.log("Four");
// }, 0);
// console.log("Two");

// setTimeout(() => {
//   console.log(myVar);
// }, 0);

// let myVar = 100;
// myVar += 100;

// sync => stack
// async => queue
// first, stack is consumed, then web api consumes queue

/////////////////////////////////////////

// let req = new XMLHttpRequest();
// req.open("get", "https://api.github.com/users/MohamedMamdoouh/repos");
// req.send();
// console.log(req);

// req.onreadystatechange = function () {
//   console.log(req.readyState);
//   console.log(req.status);

//   if (req.readyState === 4 && req.status == 200) {
//     console.log(req.responseText);
//   }
// };

/////////////////////////////////////////

// let req = new XMLHttpRequest();
// req.open("get", "https://api.github.com/users/MohamedMamdoouh/repos");
// req.send();

// req.onreadystatechange = function () {
//   if (req.readyState === 4 && req.status == 200) {
//     let jsData = JSON.parse(this.responseText);
//     for (const element of jsData) {
//       let div = document.createElement("div");
//       let repoName = document.createTextNode(element.full_name);
//       div.appendChild(repoName);
//       document.body.appendChild(div);
//     }
//   }
// };

/////////////////////////////////////////

// function makeItRed(e) {
//   e.target.style.color = "red";
// }

// let p = document.querySelector(".test");
// p.addEventListener("click", makeItRed);

// function iamACallback() {
//   console.log("Iam A Callback Function");
// }

// setTimeout(iamACallback, 2000);

// setTimeout(() => {
//   console.log("Download Photo From URL");
//   setTimeout(() => {
//     console.log("Resize Photo");
//     setTimeout(() => {
//       console.log("Add Logo To The Photo");
//       setTimeout(() => {
//         console.log("Show The Photo In Website");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

/////////////////////////////////////////

// const promise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("connection established");
//   } else {
//     rejectFunction(new Error("connection failed"));
//   }
// }).then(
//     (resolveValue) => console.log(`Good ${resolveValue}`),
//     (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

// console.log(myPromise);

// let resolver = (resolveValue) => console.log(`Good ${resolveValue}`);
// let rejecter = (rejectValue) => console.log(`Bad ${rejectValue}`);

// myPromise.then(resolver, rejecter);

// myPromise.then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

/////////////////////////////////////////

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let employees = [];
//   if (employees.length === 4) {
//     resolveFunction(employees);
//   } else {
//     rejectFunction(new Error("Number Of Employees Is Not 4"));
//   }
// });

// myPromise
//   .then((resolveValue) => {
//     resolveValue.length = 2;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     resolveValue.length = 1;
//     return resolveValue;
//   })
//   .then((resolveValue) => {
//     console.log(`The Chosen Employee Is ${resolveValue}`);
//   })
//   .catch((err) => console.log(err))
//   .finally(() => console.log("operation done"));

/////////////////////////////////////////

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let req = new XMLHttpRequest();
//     req.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(new Error("no data found"));
//       }
//     };

//     req.open("get", apiLink);
//     req.send();
//   });
// };

// getData("https://api.github.com/users/MohamedMamdoouh/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((err) => console.log(err));

/////////////////////////////////////////

// fetch("https://api.github.com/users/MohamedMamdoouh/repos")
//   .then((result) => {
//     console.log(result);
//     let data = result.json();
//     console.log(data);
//     return data;
//   })
//   .then((fullData) => {
//     fullData.length = 10;
//     return fullData;
//   })
//   .then((tenEmp) => {
//     console.log(tenEmp[0].name);
//   })
//   .catch((err) => console.log(err));

/////////////////////////////////////////

// const firstPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("I'm the first promise");
//   }, 5000);
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("I'm the second promise");
//   }, 3000);
// });

// const thirdPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("I'm the third promise");
//   }, 1000);
// });

// // if all promises resolved => return them all, or any of them rejected => return the rejected promise
// Promise.all([firstPromise, secondPromise, thirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// // return all promises, resolved and rejected ones
// Promise.allSettled([firstPromise, secondPromise, thirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// // who reaches first
// Promise.race([firstPromise, secondPromise, thirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

/////////////////////////////////////////

// function getData() {
//   return new Promise((res, rej) => {
//     let users = ["Ali", "Ahmed"];
//     if (users.length > 0) {
//       res("users found");
//     } else {
//       rej("no users found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log(rejectedValue)
// );

/////////////////////////////////////////

// function getData() {
//   return new Promise(() => {
//     let users = ["Ali", "Ahmed"];
//     if (users.length > 0) {
//       return Promise.resolve("users found");
//     } else {
//       return Promise.reject("no users found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log(rejectedValue)
// );

/////////////////////////////////////////

// async function getData() {
//   let users = [];
//   if (users.length > 0) {
//     return "users found";
//   } else {
//     return new Error("no users found");
//   }
// }

// console.log(getData());

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (err) => console.log(err)
// );

/////////////////////////////////////////

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("good promise");
//   }, 3000);
// });

// // function readData() {
// //   console.log("Before Promise");
// //   console.log(promise.catch((err) => err));
// //   console.log("After Promise");
// // }

// async function readDataAsync() {
//   console.log("Before Promise");
//   console.log(await promise.catch((err) => err));
//   console.log("After Promise");
// }

// readDataAsync();

/////////////////////////////////////////

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     // res("I'm a good promise");
//     rej("I'm a good promise");
//   }, 3000);
// });

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await promise);
//   } catch (error) {
//     console.log(`Reason: ${error}`);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

/////////////////////////////////////////

// async function fetchData() {
//   console.log("Before Fetch");
//   try {
//     let data = await fetch(
//       "https://api.github.com/users/MohamedMamdoouh/repos"
//     );
//     console.log(await data.json());
//   } catch (error) {
//     console.log(`Reason: ${error}`);
//   } finally {
//     console.log("After Fetch");
//   }
// }

// fetchData();

/////////////////////////////////////////
