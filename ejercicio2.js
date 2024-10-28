//2.1

const pointsList = [32, 54, 21, 64, 75, 43];

const copiedPointsList = [...pointsList];

console.log(copiedPointsList);

//2.2

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const copiedToy = { ...toy };

console.log(copiedToy);

//2.3

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const combinedList = [...pointsList1, ...pointsList2];

console.log(combinedList);

//2.4

const originalToy = {
  name: "Bus laiyiar",
  date: "20-30-1995",
  color: "multicolor",
};
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const combinedToy = { ...originalToy, ...toyUpdate };

console.log(combinedToy);

//2.5

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const copiedColors = [...colors];
copiedColors.splice(2, 1);

//const copiedColors = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(copiedColors);
