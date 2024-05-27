import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt.utils'

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') {
    next()
  }
  try {
    const token = req.cookies.access_token
    if (!token) {
      return res.status(403).json({ message: 'Admin not authorized' })
    }
    const decodedToken = verifyToken(token)
    ;(req as any).id = decodedToken.id
    ;(req as any).username = decodedToken.username
    ;(req as any).role = decodedToken.role
    return next()
  } catch (error) {
    console.error(error)
    return res.status(403).json({ message: 'Admin not authorized' })
  }
}

export default checkAuth
