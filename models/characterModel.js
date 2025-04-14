let characters = [];
let id = 1;

export const findAll = () => characters;

export const findById = (idVal) => characters.find(c => c.id === parseInt(idVal));

export const create = (data) => {
  const character = { id: id++, ...data };
  characters.push(character);
  return character;
};

export const update = (idVal, data) => {
  const index = characters.findIndex(c => c.id === parseInt(idVal));
  if (index === -1) return null;
  characters[index] = { ...characters[index], ...data };
  return characters[index];
};

export const remove = (idVal) => {
  const index = characters.findIndex(c => c.id === parseInt(idVal));
  if (index === -1) return false;
  characters.splice(index, 1);
  return true;
};
