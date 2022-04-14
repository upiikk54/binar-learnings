const express = require("express");
const app = express();
const PORT = 8087;

app.use(express.json());

// Import Controllers
const instagramController = require("./controllers/instagramController");

// Define Routes
app.get("/books", instagramController.register);



app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});