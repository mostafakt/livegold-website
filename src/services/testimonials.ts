import { apiFetch } from "@/lib/api-client";
interface ITestimonialsRes {
  total: number;
  results: [
    {
      id: string;
      logo: string;
      name: {
        ar: string;
        en: string;
      };
      description: {
        ar: string;
        en: string;
      };
      company: {
        ar: string;
        en: string;
      };
      position: {
        ar: string;
        en: string;
      };
      createdAt: unknown;
      updatedAt: unknown;
    },
  ];
}
export async function getTestimonials(): Promise<ITestimonialsRes> {
  const res = await apiFetch("/v1/testimonials?page=0&pageSize=10&orderColumn=createdAt&orderDirection=desc", "testimonials", {
    method: "GET",
  });
  return res;
}
