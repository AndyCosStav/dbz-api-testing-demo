import * as Character from '../models/characterModel.js';

export const getAll = (req, res) => {
  res.json(Character.findAll());
};

export const getById = (req, res) => {
  const char = Character.findById(req.params.id);
  if (!char) return res.status(404).json({ error: 'Character not found' });
  res.json(char);
};

export const create = (req, res) => {
  const { name, race, specialMove } = req.body;
  if (!name || !race || !specialMove) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const newChar = Character.create({ name, race, specialMove });
  res.status(201).json(newChar);
};

export const update = (req, res) => {
  const updated = Character.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ error: 'Character not found' });
  res.json(updated);
};

export const remove = (req, res) => {
  const deleted = Character.remove(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'Character not found' });
  res.status(204).send();
};
