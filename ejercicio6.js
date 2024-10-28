//6.1

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const sum = exams.reduce((acc, exam) => acc + exam.score, 0);

console.log(sum);

//6.2

const sumAprobados = exams.reduce((acc, exam, indice) => {
  if (exam.score >= 5) {
    acc += exam.score;
  }
  return acc;
}, 0);

console.log(sumAprobados);

//6.3

const sumaExamenes = exams.reduce((acc, exam, indice) => {
  const notaExamen = exam.score;
  return acc + notaExamen;
}, 0);

const promedioExamenes = sumaExamenes / exams.length;

console.log(`La media es: ${promedioExamenes}`);
