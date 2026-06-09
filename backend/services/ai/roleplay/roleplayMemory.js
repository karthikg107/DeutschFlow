const memoryStore = {};

export function getRoleplayMemory(sessionId) {
  return memoryStore[sessionId];
}

export function updateRoleplayMemory(sessionId, data) {
  memoryStore[sessionId] = {
    ...memoryStore[sessionId],
    ...data
  };
}