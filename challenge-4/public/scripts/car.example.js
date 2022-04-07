class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card " style ="margin-top: 2rem" >
    <img src="${this.image}" class="card-img-top" alt="" style="height: 250px">
    <div class="card-body">
      <p>${this.model} / ${this.manufacture}</p>
      <h5 class="card-title bold">Rp ${this.rentPerDay} / hari</h5>
      <p class="card-text">${this.description}</p>
        <div class="">
          <img src="images-landingpage/fi_users.png" alt="" class="me-2 ">${this.capacity} Orang
        </div>
        <div class="pt-2">
          <img src="images-landingpage/fi_settings.png" alt="" class="me-2 ">${this.transmission}
        </div>
        <div class="pt-2">
          <img src="images-landingpage/fi_calendar.png" alt="" class="me-2 ">Tahun ${this.year}
        </div>
        <button class="btn bg-btn bold mt-3 w-100">Pilih Mobil</button>
    </div>
  </div>
    `;
  }
}