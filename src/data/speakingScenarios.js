const speakingScenarios = {
  a1: [
    {
      id: 1,
      title: "Introduce Yourself",
      description: "Talk about your name, age and hobbies.",
      prompt:
        "Introduce yourself in German. Mention your name, age, country and hobbies.",
      example:
        "Ich heiße Anna. Ich bin 22 Jahre alt. Ich komme aus Deutschland. Meine Hobbys sind Lesen und Musik hören.",

      questions: [
        "Hallo! Ich bin Mia. Wie heißt du?",
        "Wie alt bist du?",
        "Woher kommst du?",
        "Was sind deine Hobbys?",
        "Sehr gut! Das war eine tolle Vorstellung."
      ]
    },

    {
      id: 2,
      title: "Talking About Family",
      description: "Describe your family members.",
      prompt:
        "Talk about your family. Mention parents, siblings and their jobs.",
      example:
        "Ich habe eine kleine Familie. Mein Vater ist Lehrer. Meine Mutter arbeitet im Büro. Ich habe einen Bruder.",

      questions: [
        "Hallo! Ich bin Mia. Erzähl mir etwas über deine Familie.",
        "Wie heißt dein Vater?",
        "Was macht deine Mutter beruflich?",
        "Hast du Geschwister?",
        "Sehr gut! Du hast deine Familie gut beschrieben."
      ]
    },

    {
      id: 3,
      title: "Ordering Food",
      description: "Order food in a restaurant.",
      prompt:
        "Imagine you are in a restaurant. Order food and a drink.",
      example:
        "Ich möchte eine Pizza und eine Cola, bitte. Was kostet das?",

      questions: [
        "Hallo! Willkommen im Restaurant. Was möchten Sie bestellen?",
        "Möchten Sie etwas trinken?",
        "Möchten Sie einen Nachtisch?",
        "Vielen Dank für Ihre Bestellung."
      ]
    },

    {
      id: 4,
      title: "Daily Routine",
      description: "Talk about your daily routine.",
      prompt:
        "Describe a normal day from morning until evening.",
      example:
        "Ich stehe um sieben Uhr auf. Ich frühstücke und gehe zur Arbeit. Abends sehe ich fern.",

      questions: [
        "Hallo! Wann stehst du normalerweise auf?",
        "Was machst du am Morgen?",
        "Was machst du am Nachmittag?",
        "Was machst du am Abend?",
        "Sehr gut! Das war ein toller Tagesablauf."
      ]
    }
  ],

  a2: [
    {
      id: 5,
      title: "Shopping",
      description: "Buy clothes or groceries.",
      prompt:
        "You are shopping. Ask for prices, sizes and products.",
      example:
        "Wie viel kostet dieses T-Shirt? Haben Sie Größe M?",

      questions: [
        "Hallo! Kann ich Ihnen helfen?",
        "Welche Größe suchen Sie?",
        "Möchten Sie noch etwas kaufen?",
        "Vielen Dank für Ihren Einkauf."
      ]
    },

    {
      id: 6,
      title: "Directions",
      description: "Ask for directions.",
      prompt:
        "Ask someone how to reach a specific place in town.",
      example:
        "Entschuldigung, wie komme ich zum Bahnhof?",

      questions: [
        "Entschuldigung, kann ich Ihnen helfen?",
        "Welchen Ort suchen Sie?",
        "Brauchen Sie weitere Informationen?",
        "Gute Reise!"
      ]
    },

    {
      id: 7,
      title: "Train Station",
      description: "Buy train tickets.",
      prompt:
        "Buy a train ticket and ask about departure times.",
      example:
        "Ich möchte eine Fahrkarte nach Berlin. Wann fährt der nächste Zug?",

      questions: [
        "Guten Tag. Wohin möchten Sie reisen?",
        "Wann möchten Sie fahren?",
        "Benötigen Sie eine Hin- und Rückfahrt?",
        "Vielen Dank. Gute Reise!"
      ]
    }
  ],

  b1: [
    {
      id: 8,
      title: "Job Interview",
      description: "Answer interview questions.",
      prompt:
        "Talk about your education, skills and work experience.",
      example:
        "Ich habe Informatik studiert und Erfahrung in der Webentwicklung.",

      questions: [
        "Erzählen Sie etwas über sich.",
        "Welche Fähigkeiten haben Sie?",
        "Warum möchten Sie hier arbeiten?",
        "Vielen Dank für das Gespräch."
      ]
    },

    {
      id: 9,
      title: "University Life",
      description: "Discuss your studies.",
      prompt:
        "Talk about your university, subjects and future goals.",
      example:
        "Ich studiere Informatik. Mein Lieblingsfach ist Softwareentwicklung.",

      questions: [
        "Was studieren Sie?",
        "Welches Fach mögen Sie am meisten?",
        "Was sind Ihre Zukunftspläne?",
        "Vielen Dank für das Gespräch."
      ]
    }
  ]
};

export default speakingScenarios;