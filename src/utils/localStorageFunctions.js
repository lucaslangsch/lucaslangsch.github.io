const saveLocalStorage = (name, data) => {
  return localStorage.setItem(name, JSON.stringify(data));
};

const getLocalStorage = (name) => {
  return localStorage.getItem(name);
};

const getRepoDetailsFromLocal = (id) => {
  const repos = JSON.parse(getLocalStorage('reposDataToRender'));
  const [repoDetails] = repos.filter((repo) => repo.id == Number(id));
  return repoDetails;
};

export {
  saveLocalStorage,
  getLocalStorage,
  getRepoDetailsFromLocal,
}