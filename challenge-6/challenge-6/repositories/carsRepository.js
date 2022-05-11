const {
    cars
} = require("../models");

class carsRepository {
    static async create({
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        type,
        year,
        options,
        specs,
        availableAt,
        isWithDriver
    }) {
        const created_Cars = await cars.create({
            plate,
            manufacture,
            model,
            image,
            rentPerDay,
            capacity,
            description,
            transmission,
            type,
            year,
            options,
            specs,
            availableAt,
            isWithDriver
        })

        return created_Cars;
    }

    static async getCars() {
        const getCars = await cars.findAll();

        return getCars;
    }

    static async update({
        id,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        type,
        year,
        options,
        specs,
        availableAt,
        isWithDriver
    }) {
        const updated_cars = await cars.update({
            plate,
            manufacture,
            model,
            image,
            rentPerDay,
            capacity,
            description,
            transmission,
            type,
            year,
            options,
            specs,
            availableAt,
            isWithDriver
        }, {
            where: {
                id
            }
        });

        return updated_cars;
    }
}

module.exports = carsRepository;