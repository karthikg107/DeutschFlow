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

        content: `German uses the Latin alphabet with 26 letters plus 4 extra: ä, ö, ü, and ß.

Many letters sound very different from English — especially J, V, W, Z, and Q. Learning the correct sounds from the start will help your pronunciation throughout A1 and beyond.`,
      },

      {
        title: "Full Alphabet Pronunciation",
        type: "table",

        content: JSON.stringify({
          headers: ["Letter", "Sounds like", "Example word"],
          rows: [
            ["A", "ah (like 'father')", "Auto"],
            ["B", "beh", "Buch"],
            ["C", "tseh", "Café"],
            ["D", "deh", "Deutsch"],
            ["E", "eh (like 'bed')", "Essen"],
            ["F", "eff", "Fisch"],
            ["G", "geh", "gut"],
            ["H", "hah", "Haus"],
            ["I", "ee (like 'see')", "Ich"],
            ["J", "yot — sounds like English Y", "ja"],
            ["K", "kah", "Kaffee"],
            ["L", "ell", "lernen"],
            ["M", "emm", "Mann"],
            ["N", "enn", "Nein"],
            ["O", "oh (like 'go')", "Ort"],
            ["P", "peh", "Pizza"],
            ["Q", "koo — always used with U", "Quelle"],
            ["R", "err — rolled at back of throat", "rot"],
            ["S", "ess — like 'z' before a vowel", "Sonne"],
            ["T", "teh", "Tisch"],
            ["U", "oo (like 'boot')", "und"],
            ["V", "fow — sounds like English F", "Vater"],
            ["W", "veh — sounds like English V", "Wasser"],
            ["X", "iks", "Xylofon"],
            ["Y", "üpsilon", "Yoga"],
            ["Z", "tset — sounds like 'ts'", "Zeit"],
          ],
        }),
      },

      {
        title: "Special German Letters (Umlauts + ß)",
        type: "table",

        content: JSON.stringify({
          headers: ["Letter", "Sounds like", "Example"],
          rows: [
            ["ä", "eh — like 'bed'", "Mädchen"],
            ["ö", "like 'bird' (British English)", "schön"],
            ["ü", "say 'ee' with rounded lips", "grün"],
            ["ß", "ss — called Eszett", "Straße"],
          ],
        }),
      },

      {
        title: "The Tricky Letters — Easy to Mix Up",
        type: "tips",

        content: JSON.stringify([
          "J sounds like English Y — 'ja' = 'ya', not 'ja'.",
          "W sounds like English V — 'Wasser' = 'Vasser'.",
          "V sounds like English F — 'Vater' = 'Fater'.",
          "Z sounds like 'ts' — 'Zeit' = 'Tsait'.",
          "S before a vowel sounds like 'z' — 'Sonne' = 'Zonne'.",
          "ß always sounds like 'ss' — never like English 'b'.",
        ]),
      },

      {
        title: "Quick Practice",
        type: "exercise",

        content: JSON.stringify({
          question: "How is the German letter W pronounced?",
          options: [
            "Like English W (as in 'water')",
            "Like English V (as in 'very')",
            "Like English F (as in 'fast')",
          ],
          answer: "Like English V (as in 'very')",
          explanation: "German W is pronounced like English V. So 'Wasser' sounds like 'Vasser'. This is one of the most common mistakes for English speakers.",
        }),
      },

      {
        title: "Examples — Full Sentences",
        type: "examples",

        content: JSON.stringify([
          "Ja — pronounced 'ya' (J = Y sound)",
          "Wasser — pronounced 'Vasser' (W = V sound)",
          "Vater — pronounced 'Fater' (V = F sound)",
          "Zeit — pronounced 'Tsait' (Z = TS sound)",
          "Straße — pronounced 'Shtrasse' (ß = ss)",
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
        title: "Definite Articles (the)",
        type: "table",

        content: JSON.stringify({
          headers: ["Gender", "Article", "Example"],
          rows: [
            ["Masculine", "der", "der Mann (the man)"],
            ["Feminine", "die", "die Frau (the woman)"],
            ["Neuter", "das", "das Kind (the child)"],
            ["Plural", "die", "die Kinder (the children)"],
          ],
        }),
      },

      {
        title: "Indefinite Articles (a / an)",
        type: "table",

        content: JSON.stringify({
          headers: ["Gender", "Article", "Example"],
          rows: [
            ["Masculine", "ein", "ein Mann (a man)"],
            ["Feminine", "eine", "eine Frau (a woman)"],
            ["Neuter", "ein", "ein Kind (a child)"],
            ["Plural", "— (no article)", "Kinder (children)"],
          ],
        }),
      },

      {
        title: "Negative Articles (no / not a)",
        type: "table",

        content: JSON.stringify({
          headers: ["Gender", "Article", "Example"],
          rows: [
            ["Masculine", "kein", "kein Mann (no man)"],
            ["Feminine", "keine", "keine Frau (no woman)"],
            ["Neuter", "kein", "kein Kind (no child)"],
            ["Plural", "keine", "keine Kinder (no children)"],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Der Mann ist groß. (The man is tall.)",
          "Das ist eine Frau. (That is a woman.)",
          "Das ist kein Hund. (That is not a dog.)",
          "Ich habe keine Zeit. (I have no time.)",
        ]),
      },

      {
        title: "Quick Practice",
        type: "exercise",

        content: JSON.stringify({
          question: "Which article means 'a woman' in German?",
          options: ["eine Frau", "die Frau", "keine Frau"],
          answer: "eine Frau",
          explanation: "'eine' is the indefinite article for feminine nouns. 'die' means 'the woman' and 'keine' means 'no woman'.",
        }),
      },

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "Always learn nouns together with their articles — e.g. 'der Tisch', not just 'Tisch'.",
          "kein/keine follows the same pattern as ein/eine.",
          "Plural nouns never use ein — they use die (definite) or keine (negative).",
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

        content: `German verbs change their ending depending on the subject — this is called conjugation.

Most regular verbs follow a predictable pattern. Two verbs you must know immediately are haben (to have) and sein (to be) — they are irregular and used in almost every German sentence.`,
      },

      {
        title: "Regular verb endings — lernen (to learn)",
        type: "table",

        content: JSON.stringify({
          headers: ["Pronoun", "lernen", "Ending"],
          rows: [
            ["ich", "lerne", "-e"],
            ["du", "lernst", "-st"],
            ["er / sie / es", "lernt", "-t"],
            ["wir", "lernen", "-en"],
            ["ihr", "lernt", "-t"],
            ["sie / Sie", "lernen", "-en"],
          ],
        }),
      },

      {
        title: "sein — to be (irregular, must memorise)",
        type: "table",

        content: JSON.stringify({
          headers: ["Pronoun", "sein"],
          rows: [
            ["ich", "bin"],
            ["du", "bist"],
            ["er / sie / es", "ist"],
            ["wir", "sind"],
            ["ihr", "seid"],
            ["sie / Sie", "sind"],
          ],
        }),
      },

      {
        title: "haben — to have (irregular, must memorise)",
        type: "table",

        content: JSON.stringify({
          headers: ["Pronoun", "haben"],
          rows: [
            ["ich", "habe"],
            ["du", "hast"],
            ["er / sie / es", "hat"],
            ["wir", "haben"],
            ["ihr", "habt"],
            ["sie / Sie", "haben"],
          ],
        }),
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Ich lerne Deutsch. (I learn German.)",
          "Du wohnst in Hamburg. (You live in Hamburg.)",
          "Ich bin Student. (I am a student.)",
          "Er hat ein Auto. (He has a car.)",
          "Wir sind müde. (We are tired.)",
        ]),
      },

      {
        title: "Quick Practice",
        type: "exercise",

        content: JSON.stringify({
          question: "What is the correct form of 'sein' for 'wir'?",
          options: ["sind", "seid", "ist"],
          answer: "sind",
          explanation: "'wir sind' means 'we are'. sein is irregular — bin, bist, ist, sind, seid, sind.",
        }),
      },

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "Regular verbs: remove -en from the infinitive, then add -e / -st / -t / -en / -t / -en.",
          "sein and haben are irregular — memorise them, they appear in every conversation.",
          "The verb always comes in second position in a normal German sentence.",
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
          question: "What does 'Wo' mean in German?",
          options: ["Who", "What", "Where"],
          answer: "Where",
          explanation: "'Wo' means 'where'. Remember: Wer = Who, Was = What, Wo = Where, Wann = When, Warum = Why, Wie = How.",
        }),
      },

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "The verb comes directly after the W-question word: Wo wohnst du?",
          "Wie heißt du? (What is your name?) — literally 'How are you called?'",
          "W-questions cannot be answered with yes or no.",
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
        title: "Quick Practice",
        type: "exercise",

        content: JSON.stringify({
          question: "Which sentence is a correct German yes/no question?",
          options: [
            "Du lernst Deutsch?",
            "Lernst du Deutsch?",
            "Deutsch du lernst?",
          ],
          answer: "Lernst du Deutsch?",
          explanation: "In yes/no questions the verb comes first, then the subject: Lernst (verb) du (subject) Deutsch?",
        }),
      },

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "For yes/no questions, place the verb before the subject.",
          "Answer with: Ja (yes), Nein (no), or Doch (yes — contradicting a negative).",
          "Doch is unique to German: 'Lernst du nicht?' — 'Doch!' means 'Actually yes I do!'",
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
          headers: ["Number", "German"],
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
        title: "Numbers 11–20 (irregular — must memorise)",
        type: "table",

        content: JSON.stringify({
          headers: ["Number", "German"],
          rows: [
            ["11", "elf"],
            ["12", "zwölf"],
            ["13", "dreizehn"],
            ["14", "vierzehn"],
            ["15", "fünfzehn"],
            ["16", "sechzehn"],
            ["17", "siebzehn"],
            ["18", "achtzehn"],
            ["19", "neunzehn"],
            ["20", "zwanzig"],
          ],
        }),
      },

      {
        title: "Numbers 21–100 — the pattern",
        type: "explanation",

        content: `From 21 onwards German builds numbers as: ones + und + tens.

21 = einundzwanzig (one-and-twenty)
32 = zweiunddreißig (two-and-thirty)
45 = fünfundvierzig (five-and-forty)

The tens are: 30 dreißig · 40 vierzig · 50 fünfzig · 60 sechzig · 70 siebzig · 80 achtzig · 90 neunzig · 100 hundert`,
      },

      {
        title: "Examples",
        type: "examples",

        content: JSON.stringify([
          "Ich bin 21 Jahre alt. (einundzwanzig)",
          "Der Kaffee kostet 3 Euro. (drei)",
          "Der Kurs hat 15 Teilnehmer. (fünfzehn)",
          "Es kostet 99 Euro. (neunundneunzig)",
        ]),
      },

      {
        title: "Quick Practice",
        type: "exercise",

        content: JSON.stringify({
          question: "What is the German word for 12?",
          options: ["zehn", "zwölf", "zwanzig"],
          answer: "zwölf",
          explanation: "11 and 12 are irregular: 'elf' and 'zwölf'. From 13 onwards you add -zehn (like -teen in English).",
        }),
      },

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "11 (elf) and 12 (zwölf) are irregular — memorise them separately.",
          "13–19 follow a pattern: add -zehn (dreizehn, vierzehn...).",
          "21–99: say the ones digit first, then 'und', then the tens (einundzwanzig).",
          "This is the opposite of English — German says 'one-and-twenty', not 'twenty-one'.",
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
          headers: ["Gender", "Nominativ", "Akkusativ", "Change?"],
          rows: [
            ["Masculine", "der", "den", "✓ changes"],
            ["Feminine", "die", "die", "no change"],
            ["Neuter", "das", "das", "no change"],
            ["Plural", "die", "die", "no change"],
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
        title: "Possessive pronouns in nominative (subject position)",
        type: "table",

        content: JSON.stringify({
          headers: ["Pronoun", "Masculine", "Feminine", "Neuter", "Plural"],
          rows: [
            ["ich → my", "mein", "meine", "mein", "meine"],
            ["du → your", "dein", "deine", "dein", "deine"],
            ["er → his", "sein", "seine", "sein", "seine"],
            ["sie → her", "ihr", "ihre", "ihr", "ihre"],
            ["wir → our", "unser", "unsere", "unser", "unsere"],
            ["ihr → your (pl.)", "euer", "eure", "euer", "eure"],
          ],
        }),
      },

      {
        title: "Quick Practice",
        type: "exercise",

        content: JSON.stringify({
          question: "How do you say 'my car' in German? (Auto = neuter)",
          options: ["meine Auto", "mein Auto", "meiner Auto"],
          answer: "mein Auto",
          explanation: "'Auto' is neuter (das Auto), so the possessive is 'mein' — no extra ending for neuter in nominative.",
        }),
      },

      {
        title: "Quick Tips",
        type: "tips",

        content: JSON.stringify([
          "At A1, focus on mein/dein/sein/ihr — you'll use these the most.",
          "The ending matches the noun's gender: mein (m/n), meine (f/pl).",
          "Tip: possessives follow the same pattern as ein/eine/ein.",
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