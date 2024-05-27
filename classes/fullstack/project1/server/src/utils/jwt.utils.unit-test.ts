import { describe, it, expect } from '@jest/globals';
import { generateToken, verifyToken  } from './jwt.utils';

describe('generateToken', () => {
  it('should generate a valid JWT token', () => {
    const id = '664fd399b4975b186d4b061f';
    const username = 'admin';
    const role = 1;

    const token = generateToken(id, username, role);

    expect(typeof token).toBe('string');
    expect(token.length).toBeGreaterThan(0);
  });
});

describe('verifyToken', () => {
  it('should verify a valid JWT token', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGZkMzk5YjQ5NzViMTg2ZDRiMDYxZiIsInVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlIjoxfQ.4xgBSu_nWQb1V3zFuWaia-o5gNObTCNPOGr-AhCJGas'
    const decodedToken = verifyToken(token);

    expect(decodedToken).toHaveProperty('id', '664fd399b4975b186d4b061f');
    expect(decodedToken).toHaveProperty('username', 'admin');
    expect(decodedToken).toHaveProperty('role', 1);
  });

  it('should throw an error for an invalid JWT token', () => {
    const token = 'ayJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGZkMzk5YjQ5NzViMTg2ZDRiMDYxZiIsInVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlIjoxfQ.4xgBSu_nWQb1V3zFuWaia-o5gNObTCNPOGr-AhCJGas';
    
    expect(() => {
      verifyToken(token);
    }).toThrowError('invalid token');
  });
});