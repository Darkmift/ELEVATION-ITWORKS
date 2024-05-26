import mongoose from 'mongoose'
import { Role, STATUS } from '../../types'

const adminSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: {
      type: Number,
      required: true,
      enum: [parseInt(Role.ONE), parseInt(Role.TWO), parseInt(Role.THREE)],
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { versionKey: false },
)

export const AdminModel = mongoose.model('Admin', adminSchema)

const buildSchema = new mongoose.Schema(
  {
    buildId: { type: String, unique: true, required: true },
    status: {
      type: String,
      required: true,
      enum: [STATUS.CANCELED, STATUS.FAILED, STATUS.SUCCESS],
    },
    caption: { type: String, required: true },
    command: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    errorsNumber: { type: Number, required: true },
    warningsNumber: { type: Number, required: true },
  },
  { versionKey: false },
)

export const BuildModel = mongoose.model('Build', buildSchema)
