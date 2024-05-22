export enum STATUS {
  SUCCESS = "success",
  FAILED = "failed",
  CANCELED = "canceled"
}

export interface IBuild {
  buildId: string
  status: STATUS
  caption: string
  command: string
  startTime: string // a stringified date
  endTime: string // a stringified date
  errorsNumber: string
  warningsNumber: string
}

export type BuildCountWeekly = Record<string,number>