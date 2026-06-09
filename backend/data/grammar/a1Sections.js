const a1Sections = [

  // =========================
  // ALPHABET
  // =========================

  {
    topicSlug: "alphabet",

    sections: [

      {
        title: "Introduction",
        type: "explanation",

        content: `
German uses the Latin alphabet with 26 letters plus ä, ö, ü, and ß.

Some letters are pronounced differently from English.
        `,
      },

      {
        title: "Special Letters",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Letter",
            "Pronunciation",
            "Example",
          ],

          rows: [
            ["ä", "eh", "Mädchen"],
            ["ö", "uh", "schön"],
            ["ü", "ue", "grün"],
            ["ß", "ss", "Straße"],
          ],
        }),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "Which letter is pronounced like 'ss' in German?",

    options: [
      "ä",
      "ß",
      "ü",
    ],

    answer: "ß",

    explanation:
      "'ß' is called Eszett and sounds like 'ss'.",
  }),
},

      {
        title: "Pronunciation Tips",
        type: "tips",

        content: JSON.stringify([
          "ä sounds similar to the 'e' in 'bed'.",
          "ö is pronounced with rounded lips.",
          "ü does not exist in English pronunciation.",
          "ß is called Eszett and sounds like 'ss'.",
        ]),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "A → Auto",
          "B → Buch",
          "C → Café",
          "D → Deutsch",
          "E → Essen",
        ]),
      },

    ],
  },


  // =========================
  // PERSONAL PRONOUNS
  // =========================

  {
    topicSlug: "pronouns",

    sections: [

      {
        title: "What are Personal Pronouns?",
        type: "explanation",

        content: `
Personal pronouns replace nouns and are used to talk about people or things.

They are essential for building sentences in German.
        `,
      },

      {
        title: "Personal Pronouns",
        type: "table",

        content: JSON.stringify({
          headers: [
            "German",
            "English",
          ],

          rows: [
            ["ich", "I"],
            ["du", "you"],
            ["er", "he"],
            ["sie", "she"],
            ["es", "it"],
            ["wir", "we"],
            ["ihr", "you all"],
            ["sie", "they"],
            ["Sie", "you (formal)"],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Ich lerne Deutsch.",
          "Du bist müde.",
          "Wir wohnen in Berlin.",
          "Sie spielt Fußball.",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "What is the German word for 'we'?",

    options: [
      "wir",
      "sie",
      "ihr",
    ],

    answer: "wir",

    explanation:
  "'wir' is the German personal pronoun for 'we'.",
  }),
},


      {
        title: "Quick Tip",
        type: "tips",

        content: JSON.stringify([
          "Use capital 'Sie' for formal situations.",
        ]),
      },

    ],
  },


  // =========================
  // ARTICLES
  // =========================

  {
    topicSlug: "articles",

    sections: [

      {
        title: "What are Articles?",
        type: "explanation",

        content: `
Articles are words placed before nouns.

German nouns can be masculine, feminine, or neutral.
        `,
      },

      {
        title: "Definite Articles",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Gender",
            "Article",
            "Example",
          ],

          rows: [
            [
              "Masculine",
              "der",
              "der Mann",
            ],

            [
              "Feminine",
              "die",
              "die Frau",
            ],

            [
              "Neutral",
              "das",
              "das Kind",
            ],

            [
              "Plural",
              "die",
              "die Kinder",
            ],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Der Mann ist groß.",
          "Die Frau lernt Deutsch.",
          "Das Kind spielt.",
          "Die Kinder lachen.",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "What is the correct article for 'Mann'?",

    options: [
      "die",
      "der",
      "das",
    ],

    answer: "der",

    explanation:
      "'Mann' is masculine, so it uses the article 'der'.",
  }),
},

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "Always learn nouns together with their articles.",
          "German noun genders are important for grammar later.",
        ]),
      },

    ],
  },


  // =========================
  // PRESENT TENSE
  // =========================

  {
    topicSlug: "present-tense",

    sections: [

      {
        title: "Present Tense Verbs",
        type: "explanation",

        content: `
German verbs change depending on the subject pronoun.

This is called conjugation.
      `,
      },

      {
        title: "Conjugation of wohnen",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Pronoun",
            "Verb",
          ],

          rows: [
            ["ich", "wohne"],
            ["du", "wohnst"],
            ["er / sie / es", "wohnt"],
            ["wir", "wohnen"],
            ["ihr", "wohnt"],
            ["sie / Sie", "wohnen"],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Ich wohne in Berlin.",
          "Du wohnst in Hamburg.",
          "Wir wohnen in Deutschland.",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "What is the correct form of 'wohnen' for 'du'?",

    options: [
      "wohnst",
      "wohne",
      "wohnt",
    ],

    answer: "wohnst",

    explanation:
  "'du' usually takes the ending '-st' with regular verbs.",
  }),
},

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "Most regular German verbs follow similar endings.",
          "The verb usually comes in the second position.",
        ]),
      },

    ],
  },


  // =========================
  // SENTENCE STRUCTURE
  // =========================

  {
    topicSlug: "sentence-structure",

    sections: [

      {
        title: "Basic German Sentence Structure",
        type: "explanation",

        content: `
German sentences usually follow this structure:

Subject + Verb + Object

The verb is usually in the second position.
      `,
      },

      {
        title: "Sentence Pattern",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Subject",
            "Verb",
            "Object",
          ],

          rows: [
            [
              "Ich",
              "lerne",
              "Deutsch",
            ],

            [
              "Du",
              "sprichst",
              "Englisch",
            ],

            [
              "Wir",
              "wohnen",
              "in Berlin",
            ],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Ich lerne Deutsch.",
          "Du wohnst in Hamburg.",
          "Er spielt Fußball.",
          "Wir trinken Kaffee.",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "Which sentence is correct?",

    options: [
      "Ich Deutsch lerne.",
      "Ich lerne Deutsch.",
      "Deutsch ich lerne.",
    ],

    answer:
      "Ich lerne Deutsch.",

      explanation:
  "In German main sentences, the verb usually comes in the second position.",
  }),
},

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "The verb is usually the second element in German sentences.",
          "German word order becomes very important in later levels.",
        ]),
      },

    ],
  },


  // =========================
  // W-QUESTIONS
  // =========================

  {
    topicSlug: "w-questions",

    sections: [

      {
        title: "What are W-Questions?",
        type: "explanation",

        content: `
W-questions are questions that begin with question words.

They are used to ask for specific information.
      `,
      },

      {
        title: "Common W-Question Words",
        type: "table",

        content: JSON.stringify({
          headers: [
            "German",
            "English",
          ],

          rows: [
            ["Wer", "Who"],
            ["Was", "What"],
            ["Wo", "Where"],
            ["Wann", "When"],
            ["Warum", "Why"],
            ["Wie", "How"],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Wie heißt du?",
          "Wo wohnst du?",
          "Was lernst du?",
          "Wann beginnt der Kurs?",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "What comes first in a German yes/no question?",

    options: [
      "Subject",
      "Verb",
      "Object",
    ],

    answer: "Verb",

    explanation:
      "In German yes/no questions, the verb usually comes first.",
  }),
},

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "The verb usually comes directly after the question word.",
          "W-questions help start conversations in German.",
        ]),
      },

    ],
  },


  // =========================
  // YES / NO QUESTIONS
  // =========================

  {
    topicSlug: "yes-no-questions",

    sections: [

      {
        title: "Yes / No Questions",
        type: "explanation",

        content: `
Yes / No questions are questions that can be answered with yes or no.

In German, the verb usually comes first.
      `,
      },

      {
        title: "Question Structure",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Verb",
            "Subject",
            "Rest",
          ],

          rows: [
            [
              "Lernst",
              "du",
              "Deutsch?",
            ],

            [
              "Wohnst",
              "du",
              "in Berlin?",
            ],

            [
              "Spielt",
              "er",
              "Fußball?",
            ],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Kommst du aus Indien?",
          "Sprichst du Deutsch?",
          "Arbeitet sie heute?",
        ]),
      },

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "For yes/no questions, place the verb before the subject.",
        ]),
      },

    ],
  },


  // =========================
  // NUMBERS
  // =========================

  {
    topicSlug: "numbers",

    sections: [

      {
        title: "German Numbers",
        type: "explanation",

        content: `
Numbers are used in daily conversations for age, prices, time, dates, and more.

Learning numbers is an important A1 skill.
      `,
      },

      {
        title: "Numbers 0–10",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Number",
            "German",
          ],

          rows: [
            ["0", "null"],
            ["1", "eins"],
            ["2", "zwei"],
            ["3", "drei"],
            ["4", "vier"],
            ["5", "fünf"],
            ["6", "sechs"],
            ["7", "sieben"],
            ["8", "acht"],
            ["9", "neun"],
            ["10", "zehn"],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Ich bin 20 Jahre alt.",
          "Der Kaffee kostet 3 Euro.",
          "Wir haben 2 Bücher.",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "What is the German word for 5?",

    options: [
      "vier",
      "fünf",
      "sechs",
    ],

    answer: "fünf",

    explanation:
      "'fünf' is the German number for 5.",
  }),
},

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "German numbers are important for shopping, travel, and conversations.",
        ]),
      },

    ],
  },


  // =========================
  // AKKUSATIV
  // =========================

  {
    topicSlug: "akkusativ",

    sections: [

      {
        title: "What is Akkusativ?",
        type: "explanation",

        content: `
The accusative case is used for the direct object in a sentence.

The direct object receives the action.
      `,
      },

      {
        title: "Articles in Akkusativ",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Nominativ",
            "Akkusativ",
          ],

          rows: [
            ["der", "den"],
            ["die", "die"],
            ["das", "das"],
            ["die", "die"],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Ich sehe den Mann.",
          "Sie kauft die Tasche.",
          "Wir haben das Buch.",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "What is the Akkusativ form of 'der'?",

    options: [
      "dem",
      "den",
      "die",
    ],

    answer: "den",

explanation:
  "'der' changes to 'den' in the Akkusativ case.",
  }),
},

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "Only masculine articles usually change in Akkusativ.",
          "Ask 'What?' after the verb to find the direct object.",
        ]),
      },

    ],
  },


  // =========================
  // POSSESSIVE PRONOUNS
  // =========================

  {
    topicSlug: "possessive-pronouns",

    sections: [

      {
        title: "What are Possessive Pronouns?",
        type: "explanation",

        content: `
Possessive pronouns show ownership or belonging.

They are used to say things like:
my book, your bag, our house.
      `,
      },

      {
        title: "Common Possessive Pronouns",
        type: "table",

        content: JSON.stringify({
          headers: [
            "English",
            "German",
          ],

          rows: [
            ["my", "mein"],
            ["your", "dein"],
            ["his", "sein"],
            ["her", "ihr"],
            ["our", "unser"],
            ["your (plural)", "euer"],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Das ist mein Buch.",
          "Wo ist deine Tasche?",
          "Unser Haus ist groß.",
        ]),
      },

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "Possessive pronouns change depending on gender and case.",
          "At A1 level, focus on common everyday usage first.",
        ]),
      },

    ],
  },


  // =========================
  // MODAL VERBS
  // =========================

  {
    topicSlug: "modal-verbs",

    sections: [

      {
        title: "What are Modal Verbs?",
        type: "explanation",

        content: `
Modal verbs are helping verbs.

They change the meaning of the main verb and express ability, necessity, or desire.
      `,
      },

      {
        title: "Common Modal Verbs",
        type: "table",

        content: JSON.stringify({
          headers: [
            "German",
            "English",
          ],

          rows: [
            ["können", "can"],
            ["müssen", "must"],
            ["wollen", "want"],
            ["dürfen", "may / allowed to"],
          ],
        }),
      },

      {
        title: "Sentence Structure",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Subject",
            "Modal Verb",
            "Main Verb",
          ],

          rows: [
            [
              "Ich",
              "kann",
              "Deutsch lernen",
            ],

            [
              "Wir",
              "müssen",
              "arbeiten",
            ],

            [
              "Sie",
              "will",
              "kommen",
            ],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Ich kann Deutsch sprechen.",
          "Wir müssen lernen.",
          "Er will Fußball spielen.",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "Which modal verb means 'can'?",

    options: [
      "müssen",
      "wollen",
      "können",
    ],

    answer: "können",

    explanation:
      "'können' is used to express ability.",
  }),
},

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "The main verb usually goes to the end of the sentence.",
        ]),
      },

    ],
  },


  // =========================
  // SEPARABLE VERBS
  // =========================

  {
    topicSlug: "separable-verbs",

    sections: [

      {
        title: "What are Separable Verbs?",
        type: "explanation",

        content: `
Some German verbs split into two parts in a sentence.

The prefix moves to the end of the sentence.
      `,
      },

      {
        title: "Common Separable Verbs",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Verb",
            "Meaning",
          ],

          rows: [
            ["aufstehen", "to get up"],
            ["einkaufen", "to shop"],
            ["fernsehen", "to watch TV"],
            ["anrufen", "to call"],
          ],
        }),
      },

      {
        title: "Sentence Structure",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Normal Verb",
            "Sentence",
          ],

          rows: [
            [
              "aufstehen",
              "Ich stehe um 7 Uhr auf.",
            ],

            [
              "einkaufen",
              "Wir kaufen heute ein.",
            ],

            [
              "fernsehen",
              "Er sieht am Abend fern.",
            ],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Ich rufe meine Mutter an.",
          "Wir kaufen im Supermarkt ein.",
          "Sie steht früh auf.",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "What happens to the prefix in separable verbs?",

    options: [
      "It disappears",
      "It moves to the end",
      "It stays before the verb",
    ],

    answer: "It moves to the end",

    explanation:
      "In normal sentences, the prefix moves to the end.",
  }),
},

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "The prefix usually moves to the end in normal present tense sentences.",
        ]),
      },

    ],
  },


  // =========================
  // NEGATION
  // =========================

  {
    topicSlug: "negation",

    sections: [

      {
        title: "Negation in German",
        type: "explanation",

        content: `
German uses words like 'nicht' and 'kein' to make negative sentences.

They are used differently depending on the sentence.
      `,
      },

      {
        title: "nicht vs kein",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Word",
            "Usage",
          ],

          rows: [
            [
              "nicht",
              "negates verbs, adjectives, or whole sentences",
            ],

            [
              "kein",
              "negates nouns with articles",
            ],
          ],
        }),
      },

      {
        title: "Examples with nicht",
        type: "examples",

        content: JSON.stringify([
          "Ich komme nicht.",
          "Das ist nicht gut.",
          "Wir lernen heute nicht.",
        ]),
      },

      {
        title: "Examples with kein",
        type: "examples",

        content: JSON.stringify([
          "Ich habe kein Auto.",
          "Sie hat keine Tasche.",
          "Wir kaufen kein Brot.",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "Which word is used to negate nouns?",

    options: [
      "nicht",
      "kein",
      "nein",
    ],

    answer: "kein",

    explanation:
      "'kein' is used to negate nouns with articles.",
  }),
},

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "Use 'kein' with nouns.",
          "Use 'nicht' for verbs and sentence negation.",
        ]),
      },

    ],
  },


  // =========================
  // TIME & DATE
  // =========================

  {
    topicSlug: "time-date",

    sections: [

      {
        title: "Time and Date in German",
        type: "explanation",

        content: `
Time and dates are used in daily conversations, appointments, and schedules.

German uses the 24-hour clock very often.
      `,
      },

      {
        title: "Common Time Expressions",
        type: "table",

        content: JSON.stringify({
          headers: [
            "German",
            "English",
          ],

          rows: [
            ["heute", "today"],
            ["morgen", "tomorrow"],
            ["gestern", "yesterday"],
            ["Uhr", "o'clock"],
            ["Minute", "minute"],
            ["Stunde", "hour"],
          ],
        }),
      },

      {
        title: "Telling Time",
        type: "table",

        content: JSON.stringify({
          headers: [
            "German",
            "English",
          ],

          rows: [
            ["Es ist ein Uhr.", "It is 1 o'clock."],
            ["Es ist drei Uhr.", "It is 3 o'clock."],
            ["Es ist halb acht.", "It is 7:30."],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Der Kurs beginnt um 9 Uhr.",
          "Heute ist Montag.",
          "Wir treffen uns morgen.",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "What does 'heute' mean?",

    options: [
      "tomorrow",
      "today",
      "yesterday",
    ],

    answer: "today",

    explanation:
      "'heute' means 'today' in German.",
  }),
},

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "German often uses the 24-hour clock in formal situations.",
        ]),
      },

    ],
  },


  // =========================
  // DATIV
  // =========================

  {
    topicSlug: "dativ",

    sections: [

      {
        title: "What is Dativ?",
        type: "explanation",

        content: `
The dative case is often used for indirect objects.

It answers questions like:
to whom? or for whom?
      `,
      },

      {
        title: "Dative Articles",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Nominativ",
            "Dativ",
          ],

          rows: [
            ["der", "dem"],
            ["die", "der"],
            ["das", "dem"],
            ["die", "den"],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Ich gebe dem Mann ein Buch.",
          "Sie hilft der Frau.",
          "Wir danken dem Lehrer.",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "What is the Dativ form of 'der'?",

    options: [
      "den",
      "dem",
      "die",
    ],

    answer: "dem",

    explanation:
      "'der' changes to 'dem' in the dative case.",
  }),
},

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "Many German prepositions use the dative case.",
          "Dative is very common in spoken German.",
        ]),
      },

    ],
  },


  // =========================
  // NOMINATIV
  // =========================

  {
    topicSlug: "nominativ",

    sections: [

      {
        title: "What is Nominativ?",
        type: "explanation",

        content: `
The nominative case is used for the subject of the sentence.

The subject is the person or thing doing the action.
        `,
      },

      {
        title: "Definite Articles in Nominativ",
        type: "table",

        content: JSON.stringify({
          headers: [
            "Masculine",
            "Feminine",
            "Neutral",
            "Plural",
          ],

          rows: [
            [
              "der Mann",
              "die Frau",
              "das Kind",
              "die Kinder",
            ],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Der Mann ist hier.",
          "Die Frau lernt Deutsch.",
          "Das Kind spielt.",
          "Die Kinder lachen.",
        ]),
      },

      {
  title: "Quick Practice",
  type: "exercise",

  content: JSON.stringify({
    question:
      "Which case is used for the subject of the sentence?",

    options: [
      "Akkusativ",
      "Dativ",
      "Nominativ",
    ],

    answer: "Nominativ",

    explanation:
      "The nominative case is used for the subject doing the action.",
  }),
},

      {
        title: "Quick Tip",
        type: "tips",

        content: JSON.stringify([
          "Ask 'Who is doing the action?' to find the nominative subject.",
        ]),
      },

    ],
  },

];

export default a1Sections;