const express = require("express");
const app = express();
const path = require("path");
const PORT = 8087;
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set View Engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))

// import controller
const carsController = require("./controllers/carsController");
const carsService = require("./services/carsService");


// endpoint crud
app.post("/cars", carsController.createCars);
// app.get("/updateById", carsController.getById);
app.post("/cars/:id", carsController.updateCarsById);
app.post("/deleteCars/:id", carsController.deleteCarsById);


// define endpoint ejs
app.get("/", carsController.getCarsAll)


app.get("/cars", (req, res) =>{
    res.render('addNewCar')
})


app.get("/update/:id", carsController.renderCarById);


app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});