const URL = 'https://api.github.com/users/lucaslangsch/repos';
const token = import.meta.env.VITE_TOKEN_GITHUB;

const fetchData = async () => {
  try {
    const data = await fetch(URL, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    });
    if (!data.ok) {
      throw new Error('Problemas ao solicitar projetos do repositório');
    };
    return await data.json();
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchData;