(async () => {
  var admin = require("firebase-admin");
  const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


  var serviceAccount = require("./key.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://mtechtest-f9ea5.firebaseio.com"
  });

  const db = getFirestore();

  const query = db.collection('movies')

  let id = 1
  const doc = query.doc(id.toString())
  // await doc.create({ name: 'Shrek', release: 2004})

  const snapshot = await query.get()
  let docs = snapshot.docs

  console.log(JSON.stringify(docs.map((d) => ({
    id: d.id,
    name: d.data().name,
    release: d.data().release
  })), null, 2))

  let changed = await doc.update({ name: "Shook"})

  console.log("Se ha cambiado a ", JSON.stringify(changed, null, 2))


  let deleted = await doc.delete()

  console.log("Se ha borrado ", JSON.stringify(deleted, null, 2))
})()
