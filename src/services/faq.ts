/* eslint-disable @typescript-eslint/no-unused-vars */
import { apiFetch } from '@/lib/api-client';
import { IFaq } from '@/types/faq';

export async function getFaqs(): Promise<{ results: IFaq[] }> {
  let res;
  try {
    res = await apiFetch("/v1/faq?", "faqs", {
      method: "GET",
      auth: false,
    });
  } catch { }
  return res;
}
