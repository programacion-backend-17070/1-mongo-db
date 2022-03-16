(async () => {
  console.log("IIFE")
  // escribir codigo CRUD con firebase
  const admin = require("firebase-admin") //importa admin para inicializar la conexion
  const { getFirestore } = require("firebase-admin/firestore") // importa funcion para conectarnos a nuestra DB

  const serviceAccount = require("./sdk.json")

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://coderhouse-17070.firebaseio.com"
  })

  const db = getFirestore()

  console.log("CONECTADO")

  const query = db.collection("movies")
  const data = await query.get()
  let docs = data.docs

  let id = 0
  for (let d of docs) {
    console.log(d.data(), d.id)
    id = d.id // ultimo id
  }

  // id++
  // console.log(id)

  const doc = query.doc("1") // si existe lo trae, sino, lo crea
  // await doc.create({ release: 1999, name: "Matrix" }) // create

  // await doc.update({ release: 1998 }) // update

  await doc.delete() // delete


  console.log("TERMINADO")

})()