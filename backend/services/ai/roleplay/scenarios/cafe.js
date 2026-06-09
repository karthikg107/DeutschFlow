export const cafeScenario = {
  role: "Waiter in a German café",

  steps: [
    {
      id: "greeting",
      ai: "Guten Tag! Was möchten Sie?",
      expectedIntents: ["order"],
    },
    {
      id: "order",
      ai: "Möchten Sie Ihren Kaffee schwarz oder mit Milch?",
      expectedIntents: ["coffee_black", "coffee_milk"],
    },
    {
      id: "confirm",
      ai: "Alles klar. Möchten Sie noch etwas?",
      expectedIntents: ["no_more", "more"],
    },
    {
      id: "end",
      ai: "Perfekt. Das macht 3 Euro. Danke!",
      expectedIntents: [],
    },
  ],
};