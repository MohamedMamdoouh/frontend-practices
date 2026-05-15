import { openDB } from "idb";

const db = await openDB("MyDB", 1, {
  upgrade(db) {
    db.createObjectStore("users", { keyPath: "id" });
  },
});

await db.put("users", { id: 1, name: "Ahmed" });
const user = await db.get("users", 1);

////////////////////////////////////////////

const db2 = new Dexie("MyDB");

db2.version(1).stores({
  users: "id, name",
});

await db2.users.add({ id: 1, name: "Ahmed" });
const users = await db2.users.where("name").equals("Ahmed").toArray();
