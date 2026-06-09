// simple in-memory storage (same behavior as before but structured)
const userMemory = {};

export const getMemory = (userId, mode) => {
  if (!userMemory[userId]) {
    userMemory[userId] = {};
  }

  if (!userMemory[userId][mode]) {
    userMemory[userId][mode] = [];
  }

  return userMemory[userId][mode];
};

export const resetMemoryIfNeeded = (userId, mode, level) => {
  if (!userMemory[userId]) {
    userMemory[userId] = { lastMode: null, lastLevel: null };
  }

  if (
    userMemory[userId].lastMode !== mode ||
    userMemory[userId].lastLevel !== level
  ) {
    userMemory[userId][mode] = [];
    userMemory[userId].lastMode = mode;
    userMemory[userId].lastLevel = level;
  }
};

export const addToMemory = (userId, mode, role, content) => {
  const memory = getMemory(userId, mode);

  memory.push({ role, content });

  if (memory.length > 8) {
    memory.shift();
  }
};