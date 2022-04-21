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


// endpoint crud
app.post("/cars", carsController.createCars);
app.put("/cars/:id", carsController.updateCarsById);


// define endpoint ejs
app.get("/", async (req, res) =>{
    const getCars = await carsController.getCars();
    res.render('index', {
        cars: getCars,
    })
})


app.get("/cars", (req, res) =>{
    res.render('addNewCar')
})

app.get("/update", (req, res) =>{
    res.render('updateCars')
})


app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});