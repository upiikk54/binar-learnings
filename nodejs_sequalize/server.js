const express = require("express");
const app = express();
const PORT = 8087;

app.use(express.json());

// Import Controllers
const usersController = require("./controllers/usersController");
const postsController = require("./controllers/postController");

// users
app.get("/users", usersController.getAll);
app.post("/users", usersController.create);
app.get("/users/:id", usersController.getUsersById);
app.put("/users/:id", usersController.updateUsersById);
app.delete("/users/:id", usersController.deleteUserById);

// posts
app.get("/posts", postsController.getPosts);
app.post("/posts", postsController.createPosts);
app.put("/posts/:id", postsController.updatePostsById);
app.delete("/posts/:id", postsController.deletePostsById);
app.get("/users/:id/posts", usersController.getUsersById);

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});