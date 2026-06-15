const speakingScenarios = {
a1: [
{
id: 1,

  title: "Introduce Yourself",

  description:
    "Talk about your name, age and hobbies.",

  prompt:
    "Introduce yourself in German. Mention your name, age, country and hobbies.",

  example:
    "Ich heiße Anna. Ich bin 22 Jahre alt. Ich komme aus Deutschland. Meine Hobbys sind Lesen und Musik hören.",

  questions: [
    {
      question:
        "Hallo! Ich bin Mia. Wie heißt du?",
      sampleAnswer:
        "Ich heiße Anna."
    },

    {
      question:
        "Wie alt bist du?",
      sampleAnswer:
        "Ich bin 22 Jahre alt."
    },

    {
      question:
        "Woher kommst du?",
      sampleAnswer:
        "Ich komme aus Deutschland."
    },

    {
      question:
        "Was sind deine Hobbys?",
      sampleAnswer:
        "Meine Hobbys sind Lesen und Musik hören."
    }
  ],

  completionMessage:
    "Sehr gut! Das war eine tolle Vorstellung."
},

{
  id: 2,

  title: "Talking About Family",

  description:
    "Describe your family members.",

  prompt:
    "Talk about your family. Mention parents, siblings and their jobs.",

  example:
    "Ich habe eine kleine Familie. Mein Vater ist Lehrer. Meine Mutter arbeitet im Büro. Ich habe einen Bruder.",

  questions: [
    {
      question:
        "Hallo! Ich bin Mia. Erzähl mir etwas über deine Familie.",
      sampleAnswer:
        "Ich habe eine kleine Familie."
    },

    {
      question:
        "Wie heißt dein Vater?",
      sampleAnswer:
        "Mein Vater heißt Raj."
    },

    {
      question:
        "Was macht deine Mutter beruflich?",
      sampleAnswer:
        "Meine Mutter arbeitet im Büro."
    },

    {
      question:
        "Hast du Geschwister?",
      sampleAnswer:
        "Ja, ich habe einen Bruder."
    }
  ],

  completionMessage:
    "Sehr gut! Du hast deine Familie gut beschrieben."
},

{
  id: 3,

  title: "Ordering Food",

  description:
    "Order food in a restaurant.",

  prompt:
    "Imagine you are in a restaurant. Order food and a drink.",

  example:
    "Ich möchte eine Pizza und eine Cola, bitte. Was kostet das?",

  questions: [
    {
      question:
        "Hallo! Willkommen im Restaurant. Was möchten Sie bestellen?",
      sampleAnswer:
        "Ich möchte eine Pizza, bitte."
    },

    {
      question:
        "Möchten Sie etwas trinken?",
      sampleAnswer:
        "Ja, ich möchte eine Cola."
    },

    {
      question:
        "Möchten Sie einen Nachtisch?",
      sampleAnswer:
        "Nein danke."
    }
  ],

  completionMessage:
    "Vielen Dank für Ihre Bestellung."
},

{
  id: 4,

  title: "Daily Routine",

  description:
    "Talk about your daily routine.",

  prompt:
    "Describe a normal day from morning until evening.",

  example:
    "Ich stehe um sieben Uhr auf. Ich frühstücke und gehe zur Arbeit. Abends sehe ich fern.",

  questions: [
    {
      question:
        "Hallo! Wann stehst du normalerweise auf?",
      sampleAnswer:
        "Ich stehe um sieben Uhr auf."
    },

    {
      question:
        "Was machst du am Morgen?",
      sampleAnswer:
        "Ich frühstücke und gehe zur Arbeit."
    },

    {
      question:
        "Was machst du am Nachmittag?",
      sampleAnswer:
        "Ich arbeite und lerne Deutsch."
    },

    {
      question:
        "Was machst du am Abend?",
      sampleAnswer:
        "Ich sehe fern und gehe schlafen."
    }
  ],

  completionMessage:
    "Sehr gut! Das war ein toller Tagesablauf."
}


],

a2: [
{
id: 5,

  title: "Shopping",

  description:
    "Buy clothes or groceries.",

  prompt:
    "You are shopping. Ask for prices, sizes and products.",

  example:
    "Wie viel kostet dieses T-Shirt? Haben Sie Größe M?",

  questions: [
    {
      question:
        "Hallo! Kann ich Ihnen helfen?",
      sampleAnswer:
        "Ja, ich suche ein T-Shirt."
    },

    {
      question:
        "Welche Größe suchen Sie?",
      sampleAnswer:
        "Ich suche Größe M."
    },

    {
      question:
        "Möchten Sie noch etwas kaufen?",
      sampleAnswer:
        "Nein danke."
    }
  ],

  completionMessage:
    "Vielen Dank für Ihren Einkauf."
},

{
  id: 6,

  title: "Directions",

  description:
    "Ask for directions.",

  prompt:
    "Ask someone how to reach a specific place in town.",

  example:
    "Entschuldigung, wie komme ich zum Bahnhof?",

  questions: [
    {
      question:
        "Entschuldigung, kann ich Ihnen helfen?",
      sampleAnswer:
        "Ja, wie komme ich zum Bahnhof?"
    },

    {
      question:
        "Welchen Ort suchen Sie?",
      sampleAnswer:
        "Ich suche den Bahnhof."
    },

    {
      question:
        "Brauchen Sie weitere Informationen?",
      sampleAnswer:
        "Nein danke."
    }
  ],

  completionMessage:
    "Gute Reise!"
},

{
  id: 7,

  title: "Train Station",

  description:
    "Buy train tickets.",

  prompt:
    "Buy a train ticket and ask about departure times.",

  example:
    "Ich möchte eine Fahrkarte nach Berlin. Wann fährt der nächste Zug?",

  questions: [
    {
      question:
        "Guten Tag. Wohin möchten Sie reisen?",
      sampleAnswer:
        "Ich möchte nach Berlin reisen."
    },

    {
      question:
        "Wann möchten Sie fahren?",
      sampleAnswer:
        "Ich möchte morgen fahren."
    },

    {
      question:
        "Benötigen Sie eine Hin- und Rückfahrt?",
      sampleAnswer:
        "Ja, bitte."
    }
  ],

  completionMessage:
    "Vielen Dank. Gute Reise!"
}


],

b1: [
{
id: 8,

  title: "Job Interview",

  description:
    "Answer interview questions.",

  prompt:
    "Talk about your education, skills and work experience.",

  example:
    "Ich habe Informatik studiert und Erfahrung in der Webentwicklung.",

  questions: [
    {
      question:
        "Erzählen Sie etwas über sich.",
      sampleAnswer:
        "Ich habe Informatik studiert."
    },

    {
      question:
        "Welche Fähigkeiten haben Sie?",
      sampleAnswer:
        "Ich habe Erfahrung in der Webentwicklung."
    },

    {
      question:
        "Warum möchten Sie hier arbeiten?",
      sampleAnswer:
        "Weil ich mich beruflich weiterentwickeln möchte."
    }
  ],

  completionMessage:
    "Vielen Dank für das Gespräch."
},

{
  id: 9,

  title: "University Life",

  description:
    "Discuss your studies.",

  prompt:
    "Talk about your university, subjects and future goals.",

  example:
    "Ich studiere Informatik. Mein Lieblingsfach ist Softwareentwicklung.",

  questions: [
    {
      question:
        "Was studieren Sie?",
      sampleAnswer:
        "Ich studiere Informatik."
    },

    {
      question:
        "Welches Fach mögen Sie am meisten?",
      sampleAnswer:
        "Mein Lieblingsfach ist Softwareentwicklung."
    },

    {
      question:
        "Was sind Ihre Zukunftspläne?",
      sampleAnswer:
        "Ich möchte Softwareentwickler werden."
    }
  ],

  completionMessage:
    "Vielen Dank für das Gespräch."
}


]
};

export default speakingScenarios;
