import { LocaleString, LocaleArrayString } from './privacy-policy';

export interface IContactUs {
  id: string;
  title?: LocaleString;
  imageUrl?: string;
  videoUrl?: string;
  content?: LocaleString;
  phone?: string;
  whatsapp?: string;
  email?: string;
  seoKeywords?: LocaleArrayString;
  seoDescription?: LocaleString;
  seoImageUrl?: string;
}