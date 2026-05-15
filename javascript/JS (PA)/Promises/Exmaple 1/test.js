login(user)
  .then(getProfile)
  .then(getPermissions)
  .then(renderUI)
  .catch(handleError);

const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then((value) => {
    return value * 2;
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Finished");
  });

///////////////////////////////

//   Important Rule
// ✔ Any rejection skips all remaining .then() handlers
// ✔ Control jumps directly to the nearest .catch()

// promise
//   .then(step1)
//   .then(step2)
//   .catch(handleError)
//   .then(step3);

// 📌 If an error happens in step1 or step2:

// handleError runs
// step3 still runs (unless re-thrown)

//  try/catch does not catch Promise errors unless you use async / await.
