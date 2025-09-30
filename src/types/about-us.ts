import { LocaleString, LocaleArrayString } from './term-and-condition';

export interface IAboutUs {
  id: string;
  title?: LocaleString;
  imageUrl?: string;
  videoUrl?: string;
  content?: LocaleString;
  seoKeywords?: LocaleArrayString;
  seoDescription?: LocaleString;
  seoImageUrl?: string;
}