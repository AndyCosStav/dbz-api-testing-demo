import { jest } from '@jest/globals';
import request from 'supertest';

jest.unstable_mockModule('../models/characterModel.js', () => ({
  findAll: jest.fn(),
  findById: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  remove: jest.fn()
}));

const Character = await import('../models/characterModel.js');
const { default: app } = await import('../server.js');

describe('Character API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('GET /api/characters returns list', async () => {
    Character.findAll.mockReturnValue([
      { id: 1, name: 'Goku', race: 'Saiyan', specialMove: 'Kamehameha' }
    ]);

    const res = await request(app).get('/api/characters');

    expect(res.status).toBe(200);
    expect(res.body[0].name).toBe('Goku');
  });

  test('GET /api/characters/:id 404 if not found', async () => {
    Character.findById.mockReturnValue(undefined);
    const res = await request(app).get('/api/characters/99');
    expect(res.status).toBe(404);
  });

  test('POST /api/characters 400 if missing fields', async () => {
    const res = await request(app)
      .post('/api/characters')
      .send({ name: 'Gohan' });
    expect(res.status).toBe(400);
  });

  test('POST /api/characters creates character', async () => {
    Character.create.mockReturnValue({
      id: 2, name: 'Vegeta', race: 'Saiyan', specialMove: 'Final Flash'
    });

    const res = await request(app).post('/api/characters').send({
      name: 'Vegeta', race: 'Saiyan', specialMove: 'Final Flash'
    });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Vegeta');
  });

  test('PUT /api/characters/:id updates character', async () => {
    const updated = {
      id: 1, name: 'Piccolo', race: 'Namekian', specialMove: 'Special Beam Cannon'
    };
    Character.update.mockReturnValue(updated);

    const res = await request(app).put('/api/characters/1').send(updated);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Piccolo');
  });

  test('DELETE /api/characters/:id returns 204', async () => {
    Character.remove.mockReturnValue(true);
    const res = await request(app).delete('/api/characters/1');
    expect(res.status).toBe(204);
  });
});
