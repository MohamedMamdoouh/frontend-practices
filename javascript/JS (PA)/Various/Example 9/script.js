// ========== LocalStorage ==========

// Set LocalStorage
document.getElementById("btn-set-local").addEventListener("click", () => {
  const userData = {
    userId: 12345,
    username: "john_doe",
    email: "john@example.com",
    lastLogin: new Date().toISOString(),
    preferences: {
      theme: "dark",
      notifications: true,
      language: "en",
    },
    address: {
      street: "123 Main St",
      city: "Cairo",
      zip: "12345",
      country: "Egypt",
    },
  };

  localStorage.setItem("userProfile", JSON.stringify(userData));
  localStorage.setItem(
    "appSettings",
    JSON.stringify({ fontSize: 14, autoSave: true }),
  );
  localStorage.setItem("savedData", JSON.stringify([1, 2, 3, 4, 5]));
  localStorage.setItem("lastVisit", new Date().toLocaleString());

  document.getElementById("local-output").innerHTML =
    `<strong class="success">✓ LocalStorage Set Successfully</strong><br>
    <p>Items stored:</p>
    <ul>
      <li>userProfile (User data)</li>
      <li>appSettings (App configuration)</li>
      <li>savedData (Array data)</li>
      <li>lastVisit (Timestamp)</li>
    </ul>
    <p>📌 Check DevTools > Application > LocalStorage</p>`;
});

// Get LocalStorage
document.getElementById("btn-get-local").addEventListener("click", () => {
  const userProfile = localStorage.getItem("userProfile");
  const appSettings = localStorage.getItem("appSettings");
  const savedData = localStorage.getItem("savedData");
  const lastVisit = localStorage.getItem("lastVisit");

  const output = {
    userProfile: userProfile ? JSON.parse(userProfile) : null,
    appSettings: appSettings ? JSON.parse(appSettings) : null,
    savedData: savedData ? JSON.parse(savedData) : null,
    lastVisit: lastVisit,
  };

  document.getElementById("local-output").innerHTML =
    `<strong>LocalStorage Contents:</strong><br><pre>${JSON.stringify(output, null, 2)}</pre>`;
});

// Clear LocalStorage
document.getElementById("btn-clear-local").addEventListener("click", () => {
  localStorage.clear();
  document.getElementById("local-output").innerHTML =
    `<strong class="success">✓ LocalStorage Cleared</strong><br>
    <p>All data has been removed from browser storage.</p>`;
});

// ========== SessionStorage ==========

// Set SessionStorage
document.getElementById("btn-set-session").addEventListener("click", () => {
  const sessionData = {
    sessionId: "sess_" + Math.random().toString(36).slice(2, 11),
    startTime: new Date().toISOString(),
    pageViews: 5,
    isLoggedIn: true,
    tempData: "This data only persists while tab is open",
  };

  sessionStorage.setItem("sessionInfo", JSON.stringify(sessionData));
  sessionStorage.setItem("tempCache", JSON.stringify([10, 20, 30, 40, 50]));
  sessionStorage.setItem(
    "userActivity",
    JSON.stringify({ clicks: 42, formSubmissions: 3 }),
  );

  document.getElementById("session-output").innerHTML =
    `<strong class="success">✓ SessionStorage Set Successfully</strong><br>
    <p>Items stored:</p>
    <ul>
      <li>sessionInfo (Session data)</li>
      <li>tempCache (Temporary array)</li>
      <li>userActivity (User interactions)</li>
    </ul>
    <p>📌 Check DevTools > Application > Session Storage</p>`;
});

// Get SessionStorage
document.getElementById("btn-get-session").addEventListener("click", () => {
  const sessionInfo = sessionStorage.getItem("sessionInfo");
  const tempCache = sessionStorage.getItem("tempCache");
  const userActivity = sessionStorage.getItem("userActivity");

  const output = {
    sessionInfo: sessionInfo ? JSON.parse(sessionInfo) : null,
    tempCache: tempCache ? JSON.parse(tempCache) : null,
    userActivity: userActivity ? JSON.parse(userActivity) : null,
  };

  document.getElementById("session-output").innerHTML =
    `<strong>SessionStorage Contents:</strong><br><pre>${JSON.stringify(output, null, 2)}</pre>`;
});

// Clear SessionStorage
document.getElementById("btn-clear-session").addEventListener("click", () => {
  sessionStorage.clear();
  document.getElementById("session-output").innerHTML =
    `<strong class="success">✓ SessionStorage Cleared</strong><br>
    <p>All session data has been removed.</p>`;
});

// ========== Cookies ==========

// Set Cookies
document.getElementById("btn-set-cookie").addEventListener("click", () => {
  const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const expires = "expires=" + expirationDate.toUTCString();

  // Set cookies with different properties
  document.cookie =
    "userToken=abc123xyz789; " + expires + "; path=/; SameSite=Strict";
  document.cookie = "userPreference=darkMode; " + expires + "; path=/";
  document.cookie =
    "sessionId=session_" + Math.random().toString(36).slice(2, 9) + "; path=/";
  document.cookie =
    "trackingId=track_" + Date.now() + "; " + expires + "; path=/";

  document.getElementById("cookie-output").innerHTML =
    `<strong class="success">✓ Cookies Set Successfully</strong><br>
    <p>Cookies created:</p>
    <ul>
      <li>userToken (7 days expiration)</li>
      <li>userPreference (7 days expiration)</li>
      <li>sessionId (Session cookie)</li>
      <li>trackingId (7 days expiration)</li>
    </ul>
    <p>📌 Check DevTools > Application > Cookies</p>`;
});

// View Cookies
document.getElementById("btn-view-cookie").addEventListener("click", () => {
  const cookies = document.cookie;
  const cookieArray = cookies.split("; ").map((c) => {
    const [name, value] = c.split("=");
    return { name, value };
  });

  if (
    cookieArray.length === 0 ||
    (cookieArray.length === 1 && !cookieArray[0].name)
  ) {
    document.getElementById("cookie-output").innerHTML =
      `<strong>Cookies:</strong><br><p class="error">No cookies found</p>`;
  } else {
    document.getElementById("cookie-output").innerHTML =
      `<strong>Current Cookies:</strong><br><pre>${JSON.stringify(cookieArray, null, 2)}</pre>`;
  }
});

// Clear Cookies
document.getElementById("btn-clear-cookie").addEventListener("click", () => {
  const cookies = document.cookie.split("; ");
  cookies.forEach((cookie) => {
    const name = cookie.split("=")[0];
    document.cookie =
      name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  });

  document.getElementById("cookie-output").innerHTML =
    `<strong class="success">✓ All Cookies Cleared</strong><br>
    <p>All cookies have been removed from the browser.</p>`;
});

// ========== IndexedDB ==========

const dbName = "ApplicationDB";
const storeName = "users";

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        const store = db.createObjectStore(storeName, { keyPath: "id" });
        store.createIndex("idx_email", "email", { unique: true });
        store.createIndex("idx_username", "username", { unique: true });
      }
    };
  });
}

// Add Records to IndexedDB
document
  .getElementById("btn-add-indexed")
  .addEventListener("click", async () => {
    try {
      const db = await openDatabase();
      const transaction = db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);

      const records = [
        {
          id: 1,
          username: "alice",
          email: "alice@example.com",
          age: 28,
          joinDate: new Date().toISOString(),
        },
        {
          id: 2,
          username: "bob",
          email: "bob@example.com",
          age: 35,
          joinDate: new Date().toISOString(),
        },
        {
          id: 3,
          username: "charlie",
          email: "charlie@example.com",
          age: 42,
          joinDate: new Date().toISOString(),
        },
        {
          id: 4,
          username: "charlie",
          email: "david@example.com",
          age: 29,
          joinDate: new Date().toISOString(),
        },
      ];

      records.forEach((record) => store.add(record));

      transaction.oncomplete = () => {
        document.getElementById("indexed-output").innerHTML =
          `<strong class="success">✓ Records Added to IndexedDB</strong><br>
        <p>Added ${records.length} records to the database:</p>
        <ul>
          <li>ID 1: alice@example.com</li>
          <li>ID 2: bob@example.com</li>
          <li>ID 3: charlie@example.com</li>
        </ul>
        <p>📌 Check DevTools > Application > IndexedDB > ApplicationDB</p>`;
      };

      transaction.onerror = () => {
        document.getElementById("indexed-output").innerHTML =
          `<strong class="error">Error:</strong> ${transaction.error}`;
      };
    } catch (error) {
      document.getElementById("indexed-output").innerHTML =
        `<strong class="error">Error:</strong> ${error.message}`;
    }
  });

// Get All Records
document
  .getElementById("btn-get-indexed")
  .addEventListener("click", async () => {
    try {
      const db = await openDatabase();
      const transaction = db.transaction([storeName], "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onsuccess = () => {
        const records = request.result;
        if (records.length === 0) {
          document.getElementById("indexed-output").innerHTML =
            `<strong>IndexedDB Records:</strong><br><p class="error">No records found. Click "Add Records" first.</p>`;
        } else {
          document.getElementById("indexed-output").innerHTML =
            `<strong>All IndexedDB Records (${records.length} total):</strong><br><pre>${JSON.stringify(records, null, 2)}</pre>`;
        }
      };

      request.onerror = () => {
        document.getElementById("indexed-output").innerHTML =
          `<strong class="error">Error:</strong> ${request.error}`;
      };
    } catch (error) {
      document.getElementById("indexed-output").innerHTML =
        `<strong class="error">Error:</strong> ${error.message}`;
    }
  });

// Query by ID
document
  .getElementById("btn-query-indexed")
  .addEventListener("click", async () => {
    try {
      const db = await openDatabase();
      const transaction = db.transaction([storeName], "readonly");
      const store = transaction.objectStore(storeName);
      const request = store.get(2); // Get user with ID 2

      request.onsuccess = () => {
        const record = request.result;
        if (record) {
          document.getElementById("indexed-output").innerHTML =
            `<strong>Query Result (ID: 2):</strong><br><pre>${JSON.stringify(record, null, 2)}</pre>`;
        } else {
          document.getElementById("indexed-output").innerHTML =
            `<strong>Query Result:</strong><br><p class="error">No record found with ID 2.</p>`;
        }
      };

      request.onerror = () => {
        document.getElementById("indexed-output").innerHTML =
          `<strong class="error">Error:</strong> ${request.error}`;
      };
    } catch (error) {
      document.getElementById("indexed-output").innerHTML =
        `<strong class="error">Error:</strong> ${error.message}`;
    }
  });

// Clear IndexedDB
document
  .getElementById("btn-clear-indexed")
  .addEventListener("click", async () => {
    try {
      const db = await openDatabase();
      const transaction = db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);
      const request = store.clear();

      request.onsuccess = () => {
        document.getElementById("indexed-output").innerHTML =
          `<strong class="success">✓ IndexedDB Cleared</strong><br>
        <p>All records have been removed from the database.</p>`;
      };

      request.onerror = () => {
        document.getElementById("indexed-output").innerHTML =
          `<strong class="error">Error:</strong> ${request.error}`;
      };
    } catch (error) {
      document.getElementById("indexed-output").innerHTML =
        `<strong class="error">Error:</strong> ${error.message}`;
    }
  });

// ========== User Registration with Duplicate Validation ==========

// Check if email already exists
async function checkEmailExists(email) {
  const db = await openDatabase();
  const transaction = db.transaction([storeName], "readonly");
  const store = transaction.objectStore(storeName);
  const index = store.index("idx_email");
  const request = index.get(email);

  return new Promise((resolve) => {
    request.onsuccess = () => {
      resolve(request.result !== undefined);
    };
    request.onerror = () => {
      resolve(false);
    };
  });
}

// Check if username already exists
async function checkUsernameExists(username) {
  const db = await openDatabase();
  const transaction = db.transaction([storeName], "readonly");
  const store = transaction.objectStore(storeName);
  const index = store.index("idx_username");
  const request = index.get(username);

  return new Promise((resolve) => {
    request.onsuccess = () => {
      resolve(request.result !== undefined);
    };
    request.onerror = () => {
      resolve(false);
    };
  });
}

// Real-time validation for username
document.getElementById("username").addEventListener("blur", async () => {
  const username = document.getElementById("username").value.trim();
  const errorSpan = document.getElementById("username-error");

  if (username.length === 0) {
    errorSpan.textContent = "";
    return;
  }

  if (username.length < 3) {
    errorSpan.textContent = "Username must be at least 3 characters";
    return;
  }

  const exists = await checkUsernameExists(username);
  if (exists) {
    errorSpan.textContent = "❌ This username is already taken";
    errorSpan.style.color = "red";
  } else {
    errorSpan.textContent = "✓ Username is available";
    errorSpan.style.color = "green";
  }
});

// Real-time validation for email
document.getElementById("email").addEventListener("blur", async () => {
  const email = document.getElementById("email").value.trim();
  const errorSpan = document.getElementById("email-error");

  if (email.length === 0) {
    errorSpan.textContent = "";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorSpan.textContent = "Invalid email format";
    errorSpan.style.color = "red";
    return;
  }

  const exists = await checkEmailExists(email);
  if (exists) {
    errorSpan.textContent = "❌ This email is already registered";
    errorSpan.style.color = "red";
  } else {
    errorSpan.textContent = "✓ Email is available";
    errorSpan.style.color = "green";
  }
});

// real time validation for age
document.getElementById("age").addEventListener("blur", () => {
  const age = Number.parseInt(document.getElementById("age").value);
  const errorSpan = document.getElementById("age-error");

  if (Number.isNaN(age)) {
    errorSpan.textContent = "Invalid age";
    errorSpan.style.color = "red";
    return;
  }

  if (age < 18) {
    errorSpan.textContent = "❌ You must be at least 18 years old to register";
    errorSpan.style.color = "red";
  } else {
    errorSpan.textContent = "✓ Age is valid";
    errorSpan.style.color = "green";
  }
});

// Handle registration form submission
document
  .getElementById("registration-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = Number.parseInt(document.getElementById("age").value);
    const outputDiv = document.getElementById("registration-output");

    // check html constraints
    if (!e.target.checkValidity()) {
      outputDiv.innerHTML = `<strong class="error">Error:</strong> Please fill out the form correctly.`;
      return;
    }

    // Validate inputs
    if (!username || !email || !age) {
      outputDiv.innerHTML = `<strong class="error">Error:</strong> All fields are required`;
      return;
    }

    if (username.length < 3) {
      outputDiv.innerHTML = `<strong class="error">Error:</strong> Username must be at least 3 characters`;
      return;
    }

    // validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      outputDiv.innerHTML = `<strong class="error">Error:</strong> Invalid email format`;
      return;
    }

    // validate age
    if (Number.isNaN(age) || age < 18) {
      outputDiv.innerHTML = `<strong class="error">Error:</strong> You must be at least 18 years old to register`;
      return;
    }

    // Check for duplicates
    const usernameExists = await checkUsernameExists(username);
    const emailExists = await checkEmailExists(email);

    if (usernameExists && emailExists) {
      outputDiv.innerHTML = `<strong class="error">❌ Registration Failed</strong><br>
       <p>Both username and email are already taken:</p>
       <ul>
         <li>Username "<strong>${username}</strong>" is already in use</li>
         <li>Email "<strong>${email}</strong>" is already registered</li>
       </ul>`;
      return;
    }

    if (usernameExists) {
      outputDiv.innerHTML = `<strong class="error">❌ Registration Failed</strong><br>
       <p>Username "<strong>${username}</strong>" is already taken. Please choose a different username.</p>`;
      return;
    }

    if (emailExists) {
      outputDiv.innerHTML = `<strong class="error">❌ Registration Failed</strong><br>
       <p>Email "<strong>${email}</strong>" is already registered. Please use a different email or try logging in.</p>`;
      return;
    }

    // Add new user to IndexedDB
    try {
      const db = await openDatabase();
      const transaction = db.transaction([storeName], "readwrite");
      const store = transaction.objectStore(storeName);

      // Get the highest ID and add 1
      const getAllRequest = store.getAll();
      getAllRequest.onsuccess = () => {
        const records = getAllRequest.result;
        const newId =
          records.length > 0 ? Math.max(...records.map((r) => r.id)) + 1 : 1;

        const newUser = {
          id: newId,
          username: username,
          email: email,
          age: age,
          joinDate: new Date().toISOString(),
        };

        const addRequest = store.add(newUser);

        addRequest.onsuccess = () => {
          document.getElementById("registration-form").reset();
          document.getElementById("username-error").textContent = "";
          document.getElementById("email-error").textContent = "";

          outputDiv.innerHTML = `<strong class="success">✓ User Registered Successfully!</strong><br>
           <div class="registration-output-details">
             <p><strong>User Details:</strong></p>
             <ul>
               <li>ID: ${newUser.id}</li>
               <li>Username: ${newUser.username}</li>
               <li>Email: ${newUser.email}</li>
               <li>Age: ${newUser.age}</li>
               <li>Joined: ${new Date(newUser.joinDate).toLocaleString()}</li>
             </ul>
           </div>`;
        };

        addRequest.onerror = () => {
          outputDiv.innerHTML = `<strong class="error">Error:</strong> Failed to register user. ${addRequest.error}`;
        };
      };
    } catch (error) {
      outputDiv.innerHTML = `<strong class="error">Error:</strong> ${error.message}`;
    }
  });
