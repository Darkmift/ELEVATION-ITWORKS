import { z } from 'zod'

const buildSchema = z.object({
  name: z.string(),
  age: z.number(),
  buildId: z.string(),
  status: z.enum(['success', 'failed', 'canceled']),
  caption: z.string(),
  command: z.string(),
  startTime: z.string(), // a stringified date
  endTime: z.string(), // a stringified date
  errorsNumber: z.string(),
  warningsNumber: z.string(),
})

export default buildSchema
