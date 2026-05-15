// IndexedDB setup
let db;
let isDBReady = false;
const dbName = "UserDatabase";
const dbVersion = 1;
const storeName = "users";

// Initialize IndexedDB
function initDB() {
  const request = indexedDB.open(dbName, dbVersion);

  request.onerror = function (event) {
    console.log("Database error: " + event.target.errorCode);
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error");
      errorMsg.textContent = `Database error: ${event.target.errorCode}`;
      debugOutput.appendChild(errorMsg);
    }
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    isDBReady = true;
    console.log("Database opened successfully");
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const successMsg = document.createElement("div");
      successMsg.classList.add("success");
      successMsg.textContent = "Database opened successfully";
      debugOutput.appendChild(successMsg);
    }
  };

  request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objectStore = db.createObjectStore(storeName, {
      keyPath: "id",
      autoIncrement: true,
    });
    objectStore.createIndex("username", "username", { unique: true });
    console.log("Database created successfully");
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const successMsg = document.createElement("div");
      successMsg.classList.add("success");
      successMsg.textContent = "Database created successfully";
      debugOutput.appendChild(successMsg);
    }
  };
}

// Add a new user
function addUser(username, age) {
  if (!username || !age) {
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error");
      errorMsg.textContent = "Error: Username and age are required";
      debugOutput.appendChild(errorMsg);
    }
    return;
  }

  // Check if DB is ready
  if (!isDBReady) {
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error");
      errorMsg.textContent = "Error: Database not ready yet";
      debugOutput.appendChild(errorMsg);
    }
    return;
  }

  const user = { username: username, age: Number.parseInt(age) };
  const transaction = db.transaction([storeName], "readwrite");

  // Add transaction error handling
  transaction.onerror = function (event) {
    console.error("Transaction error:", event.target.error);
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error");
      errorMsg.textContent = `Transaction error: ${event.target.error}`;
      debugOutput.appendChild(errorMsg);
    }

    return;
  };

  const objectStore = transaction.objectStore(storeName);
  const request = objectStore.add(user);

  request.onsuccess = function (event) {
    console.log("User added successfully");
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const successMsg = document.createElement("div");
      successMsg.classList.add("success");
      successMsg.textContent = `Added User - ID: ${event.target.result}, Username: ${username}, Age: ${age}`;
      debugOutput.appendChild(successMsg);
    }
  };

  request.onerror = function (event) {
    console.log("Error adding user: " + event.target.errorCode);
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error");
      errorMsg.textContent = `Error adding user: ${event.target.errorCode}`;
      debugOutput.appendChild(errorMsg);
    }
  };
}

// Read a specific user
function readUser(id) {
  if (!id || Number.isNaN(id)) {
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      debugOutput.textContent += "Error: Valid user ID is required";
    }
    return;
  }

  // Check if DB is ready
  if (!isDBReady) {
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error");
      errorMsg.textContent = "Error: Database not ready yet";
      debugOutput.appendChild(errorMsg);
    }
    return;
  }

  const transaction = db.transaction([storeName], "readonly");

  transaction.onerror = function (event) {
    console.error("Transaction error:", event.target.error);
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error");
      errorMsg.textContent = `Transaction error: ${event.target.error}`;
      debugOutput.appendChild(errorMsg);
    }
  };

  const objectStore = transaction.objectStore(storeName);
  const request = objectStore.get(Number.parseInt(id));

  request.onsuccess = function (event) {
    const user = event.target.result;
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      if (user) {
        console.log("User found:", user);
        const infoMsg = document.createElement("div");
        infoMsg.classList.add("info");
        infoMsg.textContent = `User Found - ID: ${user.id}, Username: ${user.username}, Age: ${user.age}`;
        debugOutput.appendChild(infoMsg);
      } else {
        console.log("User not found");
        const errorMsg = document.createElement("div");
        errorMsg.classList.add("error");
        errorMsg.textContent = `User with ID ${id} not found`;
        debugOutput.appendChild(errorMsg);
      }
    }
  };
}

// Update a user
function updateUser(id, newUsername, newAge) {
  if (!id || Number.isNaN(id) || !newUsername || !newAge) {
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      debugOutput.textContent +=
        "Error: Valid user ID, new username and new age are required";
    }
    return;
  }

  // Check if DB is ready
  if (!isDBReady) {
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error");
      errorMsg.textContent = "Error: Database not ready yet";
      debugOutput.appendChild(errorMsg);
    }
    return;
  }

  const transaction = db.transaction([storeName], "readwrite");

  // Add transaction error handling
  transaction.onerror = function (event) {
    console.error("Transaction error:", event.target.error);
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error");
      errorMsg.textContent = `Transaction error: ${event.target.error}`;
      debugOutput.appendChild(errorMsg);
    }
  };

  const objectStore = transaction.objectStore(storeName);
  const request = objectStore.get(Number.parseInt(id));

  request.onsuccess = function (event) {
    const user = event.target.result;
    const debugOutput = document.getElementById("debug-output");
    if (user) {
      user.username = newUsername;
      user.age = Number.parseInt(newAge, 10);
      const updateRequest = objectStore.put(user);

      updateRequest.onsuccess = function (event) {
        console.log("User updated successfully");
        if (debugOutput) {
          const successMsg = document.createElement("div");
          successMsg.classList.add("success");
          successMsg.textContent = `User Updated - ID: ${id}, New Username: ${newUsername}, New Age: ${newAge}`;
          debugOutput.appendChild(successMsg);
        }
      };

      updateRequest.onerror = function (event) {
        console.log("Error updating user: " + event.target.errorCode);
        if (debugOutput) {
          const errorMsg = document.createElement("div");
          errorMsg.classList.add("error");
          errorMsg.textContent = `Error updating user: ${event.target.errorCode}`;
          debugOutput.appendChild(errorMsg);
        }
      };
    } else {
      console.log("User not found");
      if (debugOutput) {
        const errorMsg = document.createElement("div");
        errorMsg.classList.add("error");
        errorMsg.textContent = `User with ID ${id} not found`;
        debugOutput.appendChild(errorMsg);
      }
    }
  };
}

// Delete a user
function deleteUser(id) {
  if (!id || Number.isNaN(id)) {
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      debugOutput.textContent += "Error: Valid user ID is required";
    }
    return;
  }

  // Check if DB is ready
  if (!isDBReady) {
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error");
      errorMsg.textContent = "Error: Database not ready yet";
      debugOutput.appendChild(errorMsg);
    }
    return;
  }

  const transaction = db.transaction([storeName], "readwrite");

  // Add transaction error handling
  transaction.onerror = function (event) {
    console.error("Transaction error:", event.target.error);
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error");
      errorMsg.textContent = `Transaction error: ${event.target.error}`;
      debugOutput.appendChild(errorMsg);
    }
  };

  const objectStore = transaction.objectStore(storeName);
  const request = objectStore.delete(parseInt(id, 10));

  request.onsuccess = function (event) {
    console.log("User deleted successfully");
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const successMsg = document.createElement("div");
      successMsg.classList.add("success");
      successMsg.textContent = `User Deleted - ID: ${id}`;
      debugOutput.appendChild(successMsg);
    }
  };

  request.onerror = function (event) {
    console.log("Error deleting user: " + event.target.errorCode);
    const debugOutput = document.getElementById("debug-output");
    if (debugOutput) {
      const errorMsg = document.createElement("div");
      errorMsg.classList.add("error");
      errorMsg.textContent = `Error deleting user: ${event.target.errorCode}`;
      debugOutput.appendChild(errorMsg);
    }
  };
}

// Clear form
function clearForm() {
  const usernameField = document.getElementById("username");
  const ageField = document.getElementById("age");
  const debugField = document.getElementById("debug-output");

  if (usernameField) usernameField.value = "";
  if (ageField) ageField.value = "";
  if (debugField) debugField.innerHTML = "";
}

// Initialize the database when the window loads
window.onload = function () {
  initDB();
  setupEventListeners();
};

// Setup event listeners after DOM is loaded
function setupEventListeners() {
  const executeBtn = document.getElementById("execute-btn");
  const clearBtn = document.getElementById("clear-btn");
  const operationRadios = document.querySelectorAll('input[name="operation"]');

  // Add event listeners to operation radio buttons
  operationRadios.forEach((radio) => {
    radio.addEventListener("change", function () {
      updateFormFields(this.value);
    });
  });

  // Initialize form fields for default operation (add)
  updateFormFields("add");

  if (executeBtn) {
    executeBtn.addEventListener("click", function () {
      executeOperation();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      clearForm();
    });
  }
}

// Update form fields based on selected operation
function updateFormFields(operation) {
  const idGroup = document.getElementById("id-group");
  const usernameGroup = document.getElementById("username-group");
  const ageGroup = document.getElementById("age-group");

  // Hide all fields initially
  idGroup.style.display = "none";
  usernameGroup.style.display = "none";
  ageGroup.style.display = "none";

  // Show fields based on operation
  switch (operation) {
    case "add":
      usernameGroup.style.display = "block";
      ageGroup.style.display = "block";
      break;
    case "read":
      idGroup.style.display = "block";
      break;
    case "update":
      idGroup.style.display = "block";
      usernameGroup.style.display = "block";
      ageGroup.style.display = "block";
      break;
    case "delete":
      idGroup.style.display = "block";
      break;

    default:
      idGroup.style.display = "block";
      break;
  }
}

// Execute the selected operation
function executeOperation() {
  const selectedOperation = document.querySelector(
    'input[name="operation"]:checked'
  ).value;

  switch (selectedOperation) {
    case "add":
      const username = document.getElementById("username").value;
      const age = document.getElementById("age").value;
      addUser(username, age);
      break;
    case "read":
      const id = Number.parseInt(document.getElementById("id").value);
      readUser(id);
      break;
    case "update":
      const updateId = Number.parseInt(document.getElementById("id").value);
      const newUsername = document.getElementById("username").value;
      const newAge = document.getElementById("age").value;
      updateUser(updateId, newUsername, newAge);
      break;
    case "delete":
      const deleteId = Number.parseInt(document.getElementById("id").value);
      deleteUser(deleteId);
      break;
  }
}
