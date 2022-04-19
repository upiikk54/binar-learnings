const express = require("express");
const app = express();
const PORT = 8087;

app.use(express.json());

// Import Controllers
const usersController = require("./controllers/usersController");

app.get("/users", usersController.getAll);
app.post("/users", usersController.create);

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});