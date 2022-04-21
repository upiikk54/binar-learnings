const {
    cars
} = require("../models")

class carsRepository {
    static async getCars() {
        const getCars = cars.findAll();

        return getCars;
    }

    static async createCars({
        name,
        price,
        size,
        photo
    }) {
        const createCars = cars.create({
            name,
            price,
            size,
            photo
        })
        return createCars;
    }

    static async updateCarsById({
        id,
        name,
        price,
        size,
        photo
    }) {
        const getById = {
            where: {
                id
            }
        }

        let updatedCars = {};
        const updateCarsById = cars.update({
            name,
            price,
            size,
            photo
        }, getById)

        updatedCars = updateCarsById;
        return updatedCars;
    }

}

module.exports = carsRepository;