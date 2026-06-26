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
},

{
  id: 10,
  title: "At the Doctor",
  description: "Describe symptoms and make an appointment.",
  prompt: "You are at a doctor's office. Describe how you feel and answer the doctor's questions.",
  example: "Ich habe Kopfschmerzen und Fieber. Ich fühle mich nicht gut.",
  questions: [
    {
      question: "Guten Tag. Was kann ich für Sie tun?",
      sampleAnswer: "Ich fühle mich nicht gut."
    },
    {
      question: "Welche Beschwerden haben Sie?",
      sampleAnswer: "Ich habe Kopfschmerzen und Fieber."
    },
    {
      question: "Seit wann haben Sie diese Beschwerden?",
      sampleAnswer: "Seit zwei Tagen."
    }
  ],
  completionMessage: "Gute Besserung!"
},

{
  id: 11,
  title: "Weather Talk",
  description: "Talk about the weather.",
  prompt: "Describe the current weather and say what you like to do in different seasons.",
  example: "Heute ist es sonnig und warm. Im Sommer gehe ich gerne schwimmen.",
  questions: [
    {
      question: "Wie ist das Wetter heute bei dir?",
      sampleAnswer: "Heute ist es sonnig und warm."
    },
    {
      question: "Was machst du gerne im Sommer?",
      sampleAnswer: "Im Sommer gehe ich gerne schwimmen."
    },
    {
      question: "Magst du den Winter?",
      sampleAnswer: "Ja, ich mag den Winter. Es ist kalt aber schön."
    }
  ],
  completionMessage: "Toll! Du hast das Wetter super beschrieben."
},

{
  id: 12,
  title: "At the Supermarket",
  description: "Buy groceries and ask where things are.",
  prompt: "You are in a supermarket. Ask where to find products and pay at the checkout.",
  example: "Entschuldigung, wo finde ich die Milch? Ich möchte auch Brot kaufen.",
  questions: [
    {
      question: "Hallo! Kann ich Ihnen helfen?",
      sampleAnswer: "Ja, wo finde ich die Milch?"
    },
    {
      question: "Was möchten Sie noch kaufen?",
      sampleAnswer: "Ich möchte auch Brot und Eier kaufen."
    },
    {
      question: "Möchten Sie eine Tüte?",
      sampleAnswer: "Ja, bitte. Eine Tüte, danke."
    }
  ],
  completionMessage: "Vielen Dank! Auf Wiedersehen."
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
},

{
  id: 13,
  title: "Making a Phone Call",
  description: "Make a call to book an appointment.",
  prompt: "You are calling a hair salon to book an appointment. Ask for availability.",
  example: "Guten Tag, ich möchte einen Termin beim Friseur machen. Wann haben Sie Zeit?",
  questions: [
    {
      question: "Guten Tag, Friseursalon Schmidt. Was kann ich für Sie tun?",
      sampleAnswer: "Ich möchte einen Termin machen."
    },
    {
      question: "Für wann möchten Sie den Termin?",
      sampleAnswer: "Für nächsten Dienstag, bitte."
    },
    {
      question: "Um wie viel Uhr passt es Ihnen?",
      sampleAnswer: "Um zehn Uhr wäre gut."
    },
    {
      question: "Auf welchen Namen soll ich den Termin buchen?",
      sampleAnswer: "Auf den Namen Müller, bitte."
    }
  ],
  completionMessage: "Ihr Termin ist gebucht. Auf Wiedersehen!"
},

{
  id: 14,
  title: "Renting an Apartment",
  description: "Inquire about an apartment to rent.",
  prompt: "You are calling about an apartment advertisement. Ask about the rent, rooms and location.",
  example: "Ich habe Ihre Anzeige gesehen. Wie viel kostet die Wohnung pro Monat?",
  questions: [
    {
      question: "Guten Tag, Sie rufen wegen der Wohnung an?",
      sampleAnswer: "Ja, genau. Wie viel kostet die Miete?"
    },
    {
      question: "Die Miete beträgt 800 Euro. Haben Sie weitere Fragen?",
      sampleAnswer: "Wie viele Zimmer hat die Wohnung?"
    },
    {
      question: "Sie hat drei Zimmer. Wann möchten Sie einziehen?",
      sampleAnswer: "Am ersten April, wenn möglich."
    },
    {
      question: "Möchten Sie die Wohnung besichtigen?",
      sampleAnswer: "Ja, gerne. Wann ist das möglich?"
    }
  ],
  completionMessage: "Sehr gut! Sie haben die Wohnung kompetent besprochen."
},

{
  id: 15,
  title: "At the Bank",
  description: "Open an account or ask about services.",
  prompt: "You want to open a bank account. Ask what you need and fill in the details.",
  example: "Ich möchte ein Konto eröffnen. Was brauche ich dafür?",
  questions: [
    {
      question: "Guten Tag, wie kann ich Ihnen helfen?",
      sampleAnswer: "Ich möchte ein Konto eröffnen."
    },
    {
      question: "Haben Sie Ihren Ausweis dabei?",
      sampleAnswer: "Ja, hier ist mein Personalausweis."
    },
    {
      question: "Möchten Sie auch eine Kreditkarte?",
      sampleAnswer: "Ja, das wäre hilfreich."
    }
  ],
  completionMessage: "Ihr Konto wurde erfolgreich eröffnet. Willkommen!"
},

{
  id: 16,
  title: "Planning a Trip",
  description: "Plan a holiday with a friend.",
  prompt: "You and your friend are planning a trip to Germany. Discuss where to go and what to do.",
  example: "Ich möchte München besuchen. Wir können das Oktoberfest besuchen.",
  questions: [
    {
      question: "Wohin sollen wir in den Urlaub fahren?",
      sampleAnswer: "Ich möchte München besuchen."
    },
    {
      question: "Was wollen wir dort machen?",
      sampleAnswer: "Wir können das Oktoberfest besuchen und Museen besichtigen."
    },
    {
      question: "Wie lange soll die Reise dauern?",
      sampleAnswer: "Ich denke, eine Woche wäre schön."
    },
    {
      question: "Wie reisen wir dorthin — mit dem Zug oder mit dem Flugzeug?",
      sampleAnswer: "Mit dem Zug wäre günstiger und komfortabel."
    }
  ],
  completionMessage: "Super geplant! Viel Spaß auf der Reise!"
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
},

{
  id: 17,
  title: "Discussing Current Events",
  description: "Talk about news and give your opinion.",
  prompt: "Discuss a recent news topic in German. Share your opinion and ask for the other person's view.",
  example: "Ich habe gelesen, dass die Preise stark gestiegen sind. Was denkst du darüber?",
  questions: [
    {
      question: "Hast du die Nachrichten heute gelesen?",
      sampleAnswer: "Ja, ich habe gelesen, dass die Preise stark gestiegen sind."
    },
    {
      question: "Was denkst du über diese Situation?",
      sampleAnswer: "Ich glaube, die Regierung sollte mehr handeln."
    },
    {
      question: "Welche Lösungen würdest du vorschlagen?",
      sampleAnswer: "Man könnte die Steuern senken und mehr fördern."
    }
  ],
  completionMessage: "Sehr interessant! Du hast deine Meinung gut ausgedrückt."
},

{
  id: 18,
  title: "Describing a Problem at Work",
  description: "Explain a workplace issue to a colleague.",
  prompt: "You have a problem at work — a project deadline is at risk. Explain the situation and propose a solution.",
  example: "Wir haben ein Problem mit dem Projekt. Die Deadline ist nächste Woche und wir sind nicht fertig.",
  questions: [
    {
      question: "Guten Morgen. Wie läuft das Projekt?",
      sampleAnswer: "Wir haben leider ein Problem. Wir sind nicht im Zeitplan."
    },
    {
      question: "Was genau ist das Problem?",
      sampleAnswer: "Die Entwicklung dauert länger als geplant."
    },
    {
      question: "Was schlägst du vor?",
      sampleAnswer: "Ich denke, wir sollten die Deadline verschieben und mehr Ressourcen einsetzen."
    },
    {
      question: "Kannst du den Kunden informieren?",
      sampleAnswer: "Ja, ich werde heute noch mit dem Kunden sprechen."
    }
  ],
  completionMessage: "Gut gemacht! Du hast das Problem professionell gelöst."
},

{
  id: 19,
  title: "Cultural Discussion",
  description: "Compare German and your home culture.",
  prompt: "Compare traditions and customs from Germany with those from your home country.",
  example: "In Deutschland feiert man Weihnachten sehr groß. In meinem Land ist es anders.",
  questions: [
    {
      question: "Welche deutschen Traditionen findest du interessant?",
      sampleAnswer: "Ich finde Weihnachtsmärkte sehr schön und einzigartig."
    },
    {
      question: "Wie feiert man dieses Fest in deinem Heimatland?",
      sampleAnswer: "In meinem Land feiern wir es mit der Familie zu Hause."
    },
    {
      question: "Was ist der größte kulturelle Unterschied, den du bemerkt hast?",
      sampleAnswer: "Deutsche sind oft pünktlicher und direkter in der Kommunikation."
    },
    {
      question: "Was magst du an der deutschen Kultur besonders?",
      sampleAnswer: "Ich mag die Effizienz und das gute öffentliche Verkehrssystem."
    }
  ],
  completionMessage: "Wunderbar! Du hast einen tollen Kulturvergleich gemacht."
}


]
};

export default speakingScenarios;
