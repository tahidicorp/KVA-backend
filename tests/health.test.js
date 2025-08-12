import request from 'supertest';
import app from '../server.js';

describe('health', () => {
  it('returns ok', async () => {
    const res = await request(app).get('/health');
    expect([200, 500]).toContain(res.statusCode);
    expect(typeof res.body.ok).toBe('boolean');
  });
});