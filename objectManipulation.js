// [
// {
// "id": "0001",
// "type": "donut",
// "name": "Cake",
// "ppu": 0.55,
// "batters":
// {
// "batter":
// [
// { "id": "1001", "type": "Regular" },
// { "id": "1002", "type": "Chocolate" },
// { "id": "1003", "type": "Blueberry" },
// { "id": "1004", "type": "Devil's Food" }
// ]
// },
// "topping":
// [
// { "id": "5001", "type": "None" },
// { "id": "5002", "type": "Glazed" },
// { "id": "5005", "type": "Sugar" },
// { "id": "5007", "type": "Powdered Sugar" },
// { "id": "5006", "type": "Chocolate with Sprinkles" },
// { "id": "5003", "type": "Chocolate" },
// { "id": "5004", "type": "Maple" }
// ]
// },
// {
// "id": "0002",
// "type": "donut",
// "name": "Raised",
// "ppu": 0.55,
// "batters":
// {
// "batter":
// [
// { "id": "1001", "type": "Regular" }
// ]
// },
// "topping":
// [
// { "id": "5001", "type": "None" },
// { "id": "5002", "type": "Glazed" },
// { "id": "5005", "type": "Sugar" },
// { "id": "5003", "type": "Chocolate" },
// { "id": "5004", "type": "Maple" }
// ]
// },
// {
// "id": "0003",
// "type": "donut",
// "name": "Old Fashioned",
// "ppu": 0.55,
// "batters":
// {
// "batter":
// [
// { "id": "1001", "type": "Regular" },
// { "id": "1002", "type": "Chocolate" }
// ]
// },
// "topping":
// [
// { "id": "5001", "type": "None" },
// { "id": "5002", "type": "Glazed" },
// { "id": "5003", "type": "Chocolate" },
// { "id": "5004", "type": "Maple" }
// ]
// }
// ]

// Q1: Find all recipies where topping is Maple AND Sugar (Both should be present)
// Answer:
// ["0001", "0002"]

// Q2: Find all recipies where topping is Maple OR Sugar (Both should be present)
// Answer:
// ["0001", "0002", "0003"]

// Q3: Transformation input into the following result. We are mapping batter id with recpies id
// Answer
// {
// "1001": ["0001", "0002", "0003"],
// "1002": ["0001", "0003"],
// "1003": ["0001"],
// "1004": ["0001"]
// }

const recipes = [
  // ... the given array of recipes
];

const resultQ1 = recipes
  .filter(recipe => recipe.topping.some(t => t.type === "Maple"))
  .filter(recipe => recipe.topping.some(t => t.type === "Sugar"))
  .map(recipe => recipe.id);

console.log(resultQ1); // ["0001", "0002"]


const resultQ2 = recipes
  .filter(recipe => recipe.topping.some(t => t.type === "Maple" || t.type === "Sugar"))
  .map(recipe => recipe.id);

console.log(resultQ2); // ["0001", "0002", "0003"]


const mapping = {};

recipes.forEach(recipe => {
  recipe.batters.batter.forEach(batter => {
    if (!mapping[batter.id]) {
      mapping[batter.id] = [];
    }
    mapping[batter.id].push(recipe.id);
  });
});

console.log(mapping);
/*
{
  "1001": ["0001", "0002", "0003"],
  "1002": ["0001", "0003"],
  "1003": ["0001"],
  "1004": ["0001"]
}
*/
