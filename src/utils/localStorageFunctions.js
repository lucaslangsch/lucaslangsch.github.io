const saveLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

const getLocalStorage = (name) => {
  return localStorage.getItem(name);
};

export {
  saveLocalStorage,
  getLocalStorage,
}