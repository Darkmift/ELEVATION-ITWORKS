import bcrypt from 'bcryptjs'

/**
 * SaltRounds is an integer that determines the computing cost of the whole hashing process.
 * The higher the number the slower the process of generating hash which in turns makes brute
 * force attacks to take too long but at the same time the integer needs to be low enough so
 * our users dont have to wait for too long to login and signup to our app.
 */
const SALT_ROUNDS = 10

/**
 * Hashes a plain text password.
 * @param {string} password - The plain text password that user enters.
 * @returns {Promise<string>} - The hashed password to store into DB.
 */
export async function hashPassword(password: string): Promise<string> {
  try {
    const salt = await bcrypt.genSalt(SALT_ROUNDS)
    const hash = await bcrypt.hash(password, salt)
    return hash
  } catch (error) {
    throw new Error('Error hashing password')
  }
}

/**
 * Verifies a plain text password against a hashed password.
 * @param {string} password - The plain text password that user enters.
 * @param {string} hash - The hashed password that was stored in the DB.
 * @returns {Promise<boolean>} - True if the password matches the hash, false otherwise.
 */
export async function verifyPassword(
  password: string,
  hash: string,
): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hash)
  } catch (error) {
    throw new Error('Error verifying password')
  }
}
