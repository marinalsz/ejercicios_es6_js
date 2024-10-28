//3.1

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const usersNames = users.map((user) => user.name);

console.log(usersNames);

//3.2

const nombres = users.map((user) => {
  if (user.name.startsWith("A")) {
    return "Anacleto";
  } else {
    return user.name;
  }
});

console.log(nombres);

//3.3

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const ciudadesVisitadas = cities.map((city) => {
  if (city.isVisited) {
    city.name = `${city.name} (Visitado)`;
    return city.name;
  } else {
    return city.name;
  }
});

console.log(ciudadesVisitadas);
