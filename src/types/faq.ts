import { LocaleString } from './privacy-policy';

export interface IFaq {

  id: string
  question: LocaleString,
  answer: LocaleString,
  sorting: number
  status: string
  createdAt: string
  updatedAt: string


}