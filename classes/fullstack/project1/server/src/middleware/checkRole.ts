import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt.utils'

const checkRole = (role: number) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.method === 'OPTIONS') {
      next()
    }
    try {
      const token = req.cookies.access_token
      if (!token) {
        return res.status(403).json({ message: 'Admin not authorized' })
      }
      const decodedToken = verifyToken(token)
      if (role !== decodedToken.role) {
        return res.status(403).json({ message: 'Access denied' })
      }
      return next()
    } catch (error) {
      console.error(error)
      return res.status(403).json({ message: 'Admin not authorized' })
    }
  }
}

export default checkRole
