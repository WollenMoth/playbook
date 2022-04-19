const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

console.log("Nombre de cada explorer:");
explorers.forEach((explorer) => console.log(explorer.name));

console.log("\nStack de cada explorer:");
explorers.forEach((explorer) => console.log(explorer.stack));

console.log("\nLista de los stacks de cada explorer:");
const stacks = explorers.map((explorer) => explorer.stack);
console.log(stacks);

console.log("\nExplorers que tienen js en su stack:");
const explorersJs = explorers.filter((explorer) =>
  explorer.stack.includes("js")
);
console.log(explorersJs);

console.log("\nPrimer explorer de la CDMX:");
const CDMXExplorer = explorers.find((explorer) => explorer.city === "CDMX");
console.log(CDMXExplorer);

const exercises_completed = explorers.reduce(
  (acc, explorer) => acc + explorer.exercises_completed,
  0
);
console.log("\nSuma de todos los ejercicios completados:", exercises_completed);

areSomeExercisesFinished = explorers.some(
  (explorer) => explorer.missions.frontend.exercisesFinished
);
console.log(
  "\nAl menos uno de los explorers completó los ejercicios de Frontend:",
  areSomeExercisesFinished
);

areAllExplorersFinished = explorers.every(
  (explorer) => explorer.missions.onboarding.isFinished
);
console.log(
  "\nTodos los explorers completaron el OnBoarding:",
  areAllExplorersFinished
);
