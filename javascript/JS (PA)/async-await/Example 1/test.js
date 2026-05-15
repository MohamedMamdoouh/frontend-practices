async function run() {
  try {
    const data = await fetchData();
    const result = await processData(data);
    await saveResult(result);
  } catch (error) {
    handleError(error);
  }
}

// async functions always return a Promise
// Even if you return a normal value

// async function getNumber() {
//   return 5;
// }

// 👉 This actually returns:

// Promise.resolve(5);

// 👉 async / await does NOT replace Promises.
// 👉 It is syntax sugar on top of Promises.

// getScore().then((value) => console.log(value));
// // or
// const value = await getScore();

// async function loadData() {
//   const userPromise = fetchUser();
//   const postsPromise = fetchPosts();

//   const user = await userPromise;
//   const posts = await postsPromise;
// }

// 📌 Behavior:

// Both requests start immediately
// Total time = longest task only

// Even Clearer Pattern (with Promise.all)
// async function loadData() {
//   const [user, posts] = await Promise.all([
//     fetchUser(),
//     fetchPosts()
//   ]);
// }

// ✔ Use parallel awaits only when tasks are independent.

async function loadUsers(ids) {
  for (const id of ids) {
    const user = await fetchUser(id);
    console.log(user);
  }
}

const promises = ids.map((id) => fetchData(id));
const results = await Promise.all(promises);

console.log(results);
