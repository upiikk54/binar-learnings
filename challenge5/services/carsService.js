const carsRepository = require("../repositories/carsRepository");

class carsService {
    static async getCars() {
        const getCars = await carsRepository.getCars();

        return getCars;
    }

    static async createCars({
        name,
        price,
        size,
        photo
    }) {
        const createCars = await carsRepository.createCars({
            name,
            price,
            size,
            photo
        });

        return createCars;
    }

    static async updateCarsById({
        id,
        name,
        price,
        size,
        photo
    }) {
        // Manggil repo get by id cars
        const updateCarsById = await carsRepository.updateCarsById({
            id,
            name,
            price,
            size,
            photo
        });

        return updateCarsById;
    }
}

module.exports = carsService;