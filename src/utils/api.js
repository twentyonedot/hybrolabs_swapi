export const fetchPeople = async (page) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  return res.json();
};

export const fetchCharacter = async (id) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  return res.json();
};

export const fetchData = async (link) => {
  const res = await fetch(link);
  return res.json();
};
