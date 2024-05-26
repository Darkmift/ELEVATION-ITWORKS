
import { generateToken, verifyToken  } from './jwt.utils';

describe('generateToken', () => {
  it('should generate a valid JWT token', () => {
    const id = '123';
    const username = 'testuser';
    const role = 1;

    const token = generateToken(id, username, role);

    expect(typeof token).toBe('string');
    expect(token.length).toBeGreaterThan(0);
  });
});

describe('verifyToken', () => {
  it('should verify a valid JWT token', () => {
    const token = 'your_valid_token_here';

    const decodedToken = verifyToken(token);

    expect(decodedToken).toHaveProperty('id');
    expect(decodedToken).toHaveProperty('username');
    expect(decodedToken).toHaveProperty('role');
  });

  it('should throw an error for an invalid JWT token', () => {
    const token = 'your_invalid_token_here';
    
    expect(() => {
      verifyToken(token);
    }).toThrowError('Invalid token');
  });
});