import { hashPassword, verifyPassword } from './bcrypt'
import { beforeEach, describe, expect, test } from '@jest/globals'

describe('Bcrypt Utility Functions', () => {
  let password = 'password12345'
  let hash: string
  beforeEach(async () => {
    hash = await hashPassword(password)
  })

  test('hashPassword should hash a password', async () => {
    expect(hash).toBeDefined()
    expect(hash).not.toBe(password)
  })

  test('verifyPassword should verify a password against a hash', async () => {
    const isMatch = await verifyPassword(password, hash)
    expect(isMatch).toBeTruthy()
  })

  test('verifyPassword should fail for incorrect passwords', async () => {
    const isMatch = await verifyPassword('wrongpassword', hash)
    expect(isMatch).toBeFalsy()
  })

  test('hashPassword should produce different hashes for the same password', async () => {
    const hashNew = await hashPassword(password)
    expect(hash).not.toBe(hashNew)
  })

  test('verifyPassword should fail for different passwords', async () => {
    const isMatch = await verifyPassword('differentPassword', hash)
    expect(isMatch).toBeFalsy()
  })
})
