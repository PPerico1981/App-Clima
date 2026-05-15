const cities = [
    {
        id: 1,
        name: "Arica",
        temp: 26,
        state: "Soleado",
        humidity: 40,
        wind: 10,
    },
    {
        id: 2,
        name: "Iquique",
        temp: 20,
        state: "Nublado",
        humidity: 60,
        wind: 15,
    },
    {
        id: 3,
        name: "Antofagasta",
        temp: 18,
        state: "Lluvioso",
        humidity: 70,
        wind: 12,
    },
    {
        id: 4,
        name: "La Serena",
        temp: 24,
        state: "Soleado",
        humidity: 35,
        wind: 8,
    },
    {
        id: 5,
        name: "Santiago",
        temp: 22,
        state: "Despejado",
        humidity: 30,
        wind: 9,
    },
    {
        id: 6,
        name: "Talca",
        temp: 16,
        state: "Lluvioso",
        humidity: 75,
        wind: 11,
    },
    {
        id: 7,
        name: "Concepción",
        temp: 25,
        state: "Soleado",
        humidity: 50,
        wind: 14,
    },
    {
        id: 8,
        name: "Temuco",
        temp: 14,
        state: "Nublado",
        humidity: 80,
        wind: 13,
    },
    {
        id: 9,
        name: "Osorno",
        temp: 27,
        state: "Soleado",
        humidity: 45,
        wind: 10,
    },
    {
        id: 10,
        name: "Puerto Montt",
        temp: 10,
        state: "Viento",
        humidity: 65,
        wind: 25,
    },
];

if (document.getElementById("cities")) {
    const container = document.getElementById("cities");
    cities.forEach((city) => {
        container.innerHTML += `
      <article class="col-12 col-md-6 col-lg-4">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${city.name}</h5>
            <p class="card-text">${city.state} | ${city.temp}°C</p>
            <button class="btn btn-primary" onclick="location.href='detalle.html?id=${city.id}'">Ver detalle</button>
          </div>
        </div>
      </article>`;
    });
}

if (location.search.includes("id=")) {
    const id = new URLSearchParams(location.search).get("id");
    const city = cities.find((c) => c.id == id);

    document.getElementById("cityName").textContent = city.name;

    document.getElementById("details").innerHTML = `
    <li class="list-group-item">Temperatura: ${city.temp}°C</li>
    <li class="list-group-item">Humedad: ${city.humidity}%</li>
    <li class="list-group-item">Viento: ${city.wind} km/h</li>`;

    const forecast = document.getElementById("forecast");
    [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
    ].forEach((day) => {
        forecast.innerHTML += `
      <div class="col-6 col-md-3">
        <div class="card text-center">
          <div class="card-body">
            <strong>${day}</strong>
            <p>${city.state}</p>
          </div>
        </div>
      </div>`;
    });
}
