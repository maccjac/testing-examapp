//contains helper functions for storing/retrieving user progress locally.

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const clearLocalStorage = () => {
  localStorage.removeItem('answers');
  localStorage.removeItem('currentQuestion');
};
