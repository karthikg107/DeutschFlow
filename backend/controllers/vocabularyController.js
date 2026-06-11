import prisma from "../prisma/prismaClient.js";

/* ======================================
   GET VOCABULARY BY LEVEL
====================================== */

export const getVocabularyByLevel =
  async (req, res) => {

    try {

      const { level } = req.params;

      const words =
        await prisma.vocabularyWord.findMany({

          where: {
            levelCode:
              level.toUpperCase()
          },

          orderBy: [
            {
              letter: "asc"
            },
            {
              germanWord: "asc"
            }
          ]

        });

      res.json(words);

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to fetch vocabulary"
      });

    }

};

/* ======================================
   SEARCH VOCABULARY
====================================== */

export const searchVocabulary =
  async (req, res) => {

    try {

      const { q } = req.query;

      const results =
        await prisma.vocabularyWord.findMany({

          where: {

            OR: [

              {
                germanWord: {
                  contains: q,
                  mode: "insensitive"
                }
              },

              {
                englishMeaning: {
                  contains: q,
                  mode: "insensitive"
                }
              }

            ]

          },

          take: 50

        });

      res.json(results);

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to search vocabulary"
      });

    }

};

/* ======================================
   GET TOPIC VOCABULARY
====================================== */

export const getTopicVocabulary =
  async (req, res) => {

    try {

      const {
        level,
        topic
      } = req.params;

      const words =
        await prisma.vocabularyWord.findMany({

          where: {

            levelCode:
              level.toUpperCase(),

            topic

          },

          orderBy: {
            germanWord: "asc"
          }

        });

      res.json(words);

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to fetch topic vocabulary"
      });

    }

};

/* ======================================
   SAVE WORD
====================================== */

export const saveWord =
  async (req, res) => {

    try {

      const { wordId } = req.params;

      const existing =
        await prisma.savedWord.findFirst({

          where: {
            userId: req.user.id,
            wordId: Number(wordId)
          }

        });

      if (existing) {

        return res.status(400).json({
          message:
            "Word already saved"
        });

      }

      const savedWord =
        await prisma.savedWord.create({

          data: {
            userId: req.user.id,
            wordId: Number(wordId)
          }

        });

      res.json(savedWord);

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to save word"
      });

    }

};

/* ======================================
   GET SAVED WORDS
====================================== */

export const getSavedWords =
  async (req, res) => {

    try {

      const savedWords =
        await prisma.savedWord.findMany({

          where: {
            userId: req.user.id
          },

          include: {
            word: true
          },

          orderBy: {
            createdAt: "desc"
          }

        });

      res.json(savedWords);

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to fetch saved words"
      });

    }

};

/* ======================================
   REMOVE SAVED WORD
====================================== */

export const removeSavedWord =
  async (req, res) => {

    try {

      const { wordId } = req.params;

      await prisma.savedWord.deleteMany({

        where: {
          userId: req.user.id,
          wordId: Number(wordId)
        }

      });

      res.json({
        message: "Word removed"
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        message:
          "Failed to remove word"
      });

    }

};
