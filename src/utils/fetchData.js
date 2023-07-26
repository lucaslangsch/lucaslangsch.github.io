const URL = 'https://api.github.com/users/lucaslangsch/repos';
const token = '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';

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