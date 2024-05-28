import { ControllerMethod } from "../types"
import { authService } from "./auth.service"
import { adminLoginSchema } from '../builds/zod/schemas'

export const login = async (req, res) => {
  const { username, password } = req.body

  const result = await authService.login(username, password)
  if (!result) {
    return res.status(401)
      .clearCookie('session-token')
      .json({ message: 'Invalid username or password' })
  }
  if (!result.token) return res.status(401)
    .clearCookie('session-token')
    .json({ message: 'Invalid username or password' })

  res.cookie('session-token', result.token, { httpOnly: true })
  return res.status(200).json(result.admin)
}

// middleware to check if username and password are provided

export const checkLoginInput = (req, res, next) => {
  const { username, password } = req.body
  console.log("🚀 ~ checkLoginInput ~ { username, password } :", { username, password } )
  const result = adminLoginSchema.safeParse({ username, password })
  console.log("🚀 ~ checkLoginInput ~ result:", result)
  if (!result.success) {
    return res.status(400).json({ message: 'Invalid username or password' })
  }
  next()
}