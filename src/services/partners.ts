import { apiFetch } from "@/lib/api-client";

interface IPartnersRes {
  total: string;
  results: {
    id: string;
    logo: string;
    name: {
      ar: string;
      en: string;
    };
    url: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export async function getPartners(): Promise<IPartnersRes> {
  const res = await apiFetch("/v1/partners?page=0", "partners", {
    method: "GET",
    auth: false,
  });
  return res;
}
