const express = require("express");
const app = express();
const PORT = 8087;

app.use(express.json());

// Import Controllers
const instagramController = require("./controllers/instagramController");

// import Middlewares
const { authenticate } = require("./middlewares/authentication");

// Define Routes
app.get("/getAll", instagramController.getAll);
app.post("/register", instagramController.register);
app.get("/login", instagramController.login);
app.post("/Posts", authenticate,  instagramController.postingan);
app.get("/Posts", instagramController.getAllPosts);
app.put("/posts/:id", authenticate, instagramController.updatePostingan);
app.delete("/posts/:id", authenticate, instagramController.deletePostsById);



app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});