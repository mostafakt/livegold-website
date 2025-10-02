export interface LocaleString {
  ar: string;
  en: string;
}

export interface LocaleArrayString {
  ar?: string[];
  en?: string[];
}

export interface IPrivacyPolicy {
  id: string;
  title?: LocaleString;
  imageUrl?: string;
  videoUrl?: string;
  content?: LocaleString;
  seoKeywords?: LocaleArrayString;
  seoDescription?: LocaleString;
  seoImageUrl?: string;
}
