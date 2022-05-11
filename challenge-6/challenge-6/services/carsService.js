const carsRepository = require("../repositories/carsRepository");

class carsService {
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
        try {
            if (!plate) {
                return {
                    status: false,
                    code_status: 400,
                    message: "plate wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!manufacture) {
                return {
                    status: false,
                    code_status: 400,
                    message: "manufacture wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!model) {
                return {
                    status: false,
                    code_status: 400,
                    message: "model wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!image) {
                return {
                    status: false,
                    code_status: 400,
                    message: "image wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!rentPerDay) {
                return {
                    status: false,
                    code_status: 400,
                    message: "rentPerDay wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!capacity) {
                return {
                    status: false,
                    code_status: 400,
                    message: "capacity wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!description) {
                return {
                    status: false,
                    code_status: 400,
                    message: "description wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!transmission) {
                return {
                    status: false,
                    code_status: 400,
                    message: "transmission wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!type) {
                return {
                    status: false,
                    code_status: 400,
                    message: "type wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!year) {
                return {
                    status: false,
                    code_status: 400,
                    message: "year wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!options) {
                return {
                    status: false,
                    code_status: 400,
                    message: "options wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!specs) {
                return {
                    status: false,
                    code_status: 400,
                    message: "specs wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!availableAt) {
                return {
                    status: false,
                    code_status: 400,
                    message: "availableAt wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (isWithDriver === null) {
                return {
                    status: false,
                    code_status: 400,
                    message: "driver wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            const createdCars = await carsRepository.create({
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
            });

            return {
                status: true,
                code_status: 201,
                message: "cars berhasil dibuat",
                data: {
                    createdCars: createdCars,
                },
            };
        } catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    registered_Users: null,
                },
            };
        }
    }

    static async getCars() {
        try {
            const getCars = await carsRepository.getCars();

            return {
                status: true,
                code_status: 201,
                message: "data cars berhasil ditampilkan",
                data: {
                    getCars: getCars,
                },
            };
        }catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    registered_Users: null,
                },
            };
        }
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
        try {
            if (!plate) {
                return {
                    status: false,
                    code_status: 400,
                    message: "plate wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!manufacture) {
                return {
                    status: false,
                    code_status: 400,
                    message: "manufacture wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!model) {
                return {
                    status: false,
                    code_status: 400,
                    message: "model wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!image) {
                return {
                    status: false,
                    code_status: 400,
                    message: "image wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!rentPerDay) {
                return {
                    status: false,
                    code_status: 400,
                    message: "rentPerDay wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!capacity) {
                return {
                    status: false,
                    code_status: 400,
                    message: "capacity wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!description) {
                return {
                    status: false,
                    code_status: 400,
                    message: "description wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!transmission) {
                return {
                    status: false,
                    code_status: 400,
                    message: "transmission wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!type) {
                return {
                    status: false,
                    code_status: 400,
                    message: "type wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!year) {
                return {
                    status: false,
                    code_status: 400,
                    message: "year wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!options) {
                return {
                    status: false,
                    code_status: 400,
                    message: "options wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!specs) {
                return {
                    status: false,
                    code_status: 400,
                    message: "specs wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (!availableAt) {
                return {
                    status: false,
                    code_status: 400,
                    message: "availableAt wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            if (isWithDriver === null) {
                return {
                    status: false,
                    code_status: 400,
                    message: "driver wajib diisi",
                    data: {
                        registered_Users: null,
                    }
                }
            };

            const updatedCars = await carsRepository.update({
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
            });

            return {
                status: true,
                code_status: 201,
                message: "cars berhasil dupdate",
                data: {
                    updatedCars: updatedCars,
                },
            };
        } catch (err) {
            return {
                status: false,
                code_status: 500,
                message: err.message,
                data: {
                    registered_Users: null,
                },
            };
        }
    }
}

module.exports = carsService;