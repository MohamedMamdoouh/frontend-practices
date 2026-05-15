// Setup indexedDB
const dbName = "UsersDatabase2";
const dbVersion = 1;
const storeName = "users";
let db;

const logArea = document.getElementById("log-area");
const nameInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const clearButton = document.getElementById("clear-btn");
const allUsersTable = document.getElementById("all-users-table");
const filteredUsersTable = document.getElementById("filtered-users-table");
const applyFiltersButton = document.getElementById("apply-filters-btn");
const resetFiltersButton = document.getElementById("reset-filters-btn");
const ageFilter = document.getElementById("age-filter");
const idMinFilter = document.getElementById("id-min-filter");
const idMaxFilter = document.getElementById("id-max-filter");

function openDB() {
  const request = indexedDB.open(dbName, dbVersion);
  request.onupgradeneeded = function (event) {
    db = event.target.result;
    const objectStore = db.createObjectStore(storeName, {
      keyPath: "id",
      autoIncrement: true,
    });
    objectStore.createIndex("nameIndex", "name", { unique: false });
    objectStore.createIndex("ageIndex", "age", { unique: false });

    // Populate with some data
    objectStore.transaction.oncomplete = function () {
      const userObjectStore = db
        .transaction(storeName, "readwrite")
        .objectStore(storeName);

      const initialUsers = [
        { name: "Ahmed".toLowerCase(), age: 25 },
        { name: "Sara".toLowerCase(), age: 22 },
        { name: "Omar".toLowerCase(), age: 30 },
        { name: "Lina".toLowerCase(), age: 27 },
        { name: "Ahmed".toLowerCase(), age: 28 },
        { name: "Hana".toLowerCase(), age: 24 },
        { name: "Khaled".toLowerCase(), age: 32 },
        { name: "Noor".toLowerCase(), age: 21 },
        { name: "Yousef".toLowerCase(), age: 29 },
        { name: "Ali".toLowerCase(), age: 26 },
        { name: "Ali".toLowerCase(), age: 23 },
        { name: "Mona".toLowerCase(), age: 31 },
        { name: "Ahmed".toLowerCase(), age: 35 },
        { name: "Salma".toLowerCase(), age: 20 },
        { name: "Mohamed".toLowerCase(), age: 27 },
        { name: "Mohamed".toLowerCase(), age: 24 },
        { name: "Omar".toLowerCase(), age: 33 },
        { name: "Anwar".toLowerCase(), age: 29 },
        { name: "Anwar".toLowerCase(), age: 22 },
        { name: "Ahmed".toLowerCase(), age: 40 },
      ];
      initialUsers.forEach(function (user) {
        userObjectStore.add(user);
      });
    };
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    displayAllUsers();
  };

  request.onerror = function (event) {
    console.error("Error opening database: ", event.target.errorCode);
    logArea.textContent = "Error opening database: " + event.target.errorCode;
  };
}

function displayFilteredUsersWithoutCursor(filterName = "") {
  logArea.textContent = "";
  const transaction = db.transaction([storeName], "readonly");
  const objectStore = transaction.objectStore(storeName);
  const index = objectStore.index("nameIndex");
  const request = index.getAll(filterName.toLocaleLowerCase());

  request.onsuccess = function (event) {
    const users = event.target.result;

    if (users.length === 0) {
      logArea.textContent = "No users found with this name.";
      clearFilteredUsersTable();
      addNoFoundRow();
      return;
    }

    users.forEach(function (user) {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = user.id;

      const nameCell = document.createElement("td");
      nameCell.textContent = user.name;

      const ageCell = document.createElement("td");
      ageCell.textContent = user.age;

      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      filteredUsersTable.appendChild(row);
    });
  };
}

function displayAllUsers() {
  logArea.textContent = "";
  const transaction = db.transaction([storeName], "readonly");
  const objectStore = transaction.objectStore(storeName);
  const index = objectStore.index("nameIndex");
  const request = index.getAll();

  request.onsuccess = function (event) {
    const users = event.target.result;
    users.forEach(function (user) {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = user.id;

      const nameCell = document.createElement("td");
      nameCell.textContent = user.name;

      const ageCell = document.createElement("td");
      ageCell.textContent = user.age;

      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      allUsersTable.appendChild(row);
    });
  };
}

window.onload = function () {
  openDB();

  searchButton.onclick = function () {
    clearFilteredUsersTable();
    const name = nameInput.value.trim();
    displayFilteredUsersWithoutCursor(name);
  };

  clearButton.onclick = function () {
    clearFilteredUsersTable();
    addNoFoundRow();
    logArea.textContent = "";
    nameInput.value = "";
  };

  nameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchButton.click();
    }
  });

  applyFiltersButton.onclick = function () {
    clearFilteredUsersTable();

    const age = ageFilter.value.trim();
    const idMin = idMinFilter.value.trim();
    const idMax = idMaxFilter.value.trim();

    if (idMin && idMax && Number.parseInt(idMin) > Number.parseInt(idMax)) {
      logArea.textContent =
        "Error: Minimum ID cannot be greater than Maximum ID.";
      addNoFoundRow();
      return;
    }

    let filterMessage = "Applied filters: ";
    let hasFilters = false;

    if (age && idMin && idMax) {
      filterMessage += `Age: ${age}, ID Range: ${idMin}-${idMax}`;
      hasFilters = true;
      displayFilteredUsersWithMultipleFilters(
        Number.parseInt(age),
        Number.parseInt(idMin),
        Number.parseInt(idMax)
      );
    } else if (age) {
      filterMessage += `Age: ${age}`;
      hasFilters = true;
      displayFilteredUsersUsingCursorByAge(Number.parseInt(age));
    } else if (idMin && idMax) {
      filterMessage += `ID Range: ${idMin}-${idMax}`;
      hasFilters = true;
      displayFilteredUsersByIDRange(
        Number.parseInt(idMin),
        Number.parseInt(idMax)
      );
    } else {
      logArea.textContent = "Please provide at least one filter.";
      addNoFoundRow();
      return;
    }

    if (hasFilters) {
      logArea.textContent = filterMessage;
    }
  };

  resetFiltersButton.onclick = function () {
    clearFilteredUsersTable();
    addNoFoundRow();
    logArea.textContent = "";
    ageFilter.value = "";
    idMinFilter.value = "";
    idMaxFilter.value = "";
  };

  [ageFilter, idMinFilter, idMaxFilter].forEach((input) => {
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        applyFiltersButton.click();
      }
    });
  });
};

function clearFilteredUsersTable() {
  while (filteredUsersTable.rows.length > 1) {
    filteredUsersTable.deleteRow(1);
  }
}

function addNoFoundRow() {
  if (filteredUsersTable.rows.length === 1) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 3;
    cell.textContent = "No results found.";
    row.appendChild(cell);
    filteredUsersTable.appendChild(row);
  }
}

function displayFilteredUsersUsingCursorByAge(age) {
  const transaction = db.transaction([storeName], "readonly");
  const objectStore = transaction.objectStore(storeName);
  const index = objectStore.index("ageIndex");
  const cursor = index.openCursor(IDBKeyRange.only(age));

  cursor.onsuccess = function (event) {
    const cursor = event.target.result;

    if (cursor) {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = cursor.value.id;

      const nameCell = document.createElement("td");
      nameCell.textContent = cursor.value.name;

      const ageCell = document.createElement("td");
      ageCell.textContent = cursor.value.age;

      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      filteredUsersTable.appendChild(row);

      cursor.continue();
    } else if (filteredUsersTable.rows.length === 1) {
      addNoFoundRow();
    }
  };

  cursor.onerror = function (event) {
    logArea.textContent = "Error filtering by age: " + event.target.error;
  };
}

function displayFilteredUsersByIDRange(idMin, idMax) {
  const transaction = db.transaction([storeName], "readonly");
  const objectStore = transaction.objectStore(storeName);
  const cursor = objectStore.openCursor(IDBKeyRange.bound(idMin, idMax));

  cursor.onsuccess = function (event) {
    const cursor = event.target.result;

    if (cursor) {
      const row = document.createElement("tr");

      const idCell = document.createElement("td");
      idCell.textContent = cursor.value.id;

      const nameCell = document.createElement("td");
      nameCell.textContent = cursor.value.name;

      const ageCell = document.createElement("td");
      ageCell.textContent = cursor.value.age;

      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      filteredUsersTable.appendChild(row);

      cursor.continue();
    } else if (filteredUsersTable.rows.length === 1) {
      addNoFoundRow();
    }
  };

  cursor.onerror = function (event) {
    logArea.textContent = "Error filtering by ID range: " + event.target.error;
  };
}

function displayFilteredUsersWithMultipleFilters(age, idMin, idMax) {
  const transaction = db.transaction([storeName], "readonly");
  const objectStore = transaction.objectStore(storeName);
  const cursor = objectStore.openCursor(IDBKeyRange.bound(idMin, idMax));

  cursor.onsuccess = function (event) {
    const cursor = event.target.result;

    if (cursor) {
      if (cursor.value.age === age) {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = cursor.value.id;

        const nameCell = document.createElement("td");
        nameCell.textContent = cursor.value.name;

        const ageCell = document.createElement("td");
        ageCell.textContent = cursor.value.age;

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(ageCell);
        filteredUsersTable.appendChild(row);
      }
      cursor.continue();
    } else if (filteredUsersTable.rows.length === 1) {
      addNoFoundRow();
    }
  };

  cursor.onerror = function (event) {
    logArea.textContent =
      "Error applying multiple filters: " + event.target.error;
  };
}
