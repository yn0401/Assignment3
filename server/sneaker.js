let express = require("express");
let bodyParser = require("body-parser");
const app = express();
let cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

const { db } = require("./config/admin");
const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Project running at...${PORT}`);
});

//get all sneakers
app.get("/sneakers", async (req, res) => {
  const ref = db.collection("sneakers");
  try {
    ref.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      res.status(201).json(data);
    });
  } catch (error) {
    res.status(500).json({ general: "Something went wrong, please try again" });
  }
});

//get by id
app.get("/sneakers/:id", async (req, res) => {
  const ref = db.collection("sneakers");
  const id = req.params.id;
  console.log(id);
  try {
    ref.doc(id).get().then((snapshot) => {
      const data = snapshot.data();
      console.log(data);
      res.status(201).json(data);
    });
  } catch (error) {
    res.status(500).json({ general: "Something went wrong, please try again" });
  }
});

//add new sneaker
app.post("/sneakers/add", async (req, res) => {
  const ref = db.collection("sneakers");
  const data = req.body;
  try {
    ref.add(data);
    res.status(201).json({ message: "Sneaker added successfully" });
  } catch (error) {
    res.status(500).json({ general: "Something went wrong, please try again" });
  }
});

//delete sneaker
app.delete("/sneakers/delete/:id", async (req, res) => {
  const ref = db.collection("sneakers");
  const id = req.params.id;
  try {
    ref.doc(id).delete();
    res.status(201).json({ message: "Sneaker deleted successfully" });
  } catch (error) {
    res.status(500).json({ general: "Something went wrong, please try again" });
  }
});

//update sneaker
app.put("/sneakers/update/:id", async (req, res) => {
  const ref = db.collection("sneakers");
  const id = req.params.id;
  console.log(id);
  const data = req.body;
  try {
    ref.doc(id).update(data);
    res.status(201).json({ message: "Sneaker updated successfully" });
  } catch (error) {
    res.status(500).json({ general: "Something went wrong, please try again" });
  }
});

//search sneaker
app.get("/sneakers/search/:name", async (req, res) => {
  const ref = db.collection("sneakers");
  const name = req.params.name;
  console.log(name);
  try {
    ref.where("name", "==", name).get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      res.status(201).json(data);
    });
  } catch (error) {
    res.status(500).json({ general: "Something went wrong, please try again" });
  }
});