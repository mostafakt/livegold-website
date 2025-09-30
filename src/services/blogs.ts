import { apiFetch } from "@/lib/api-client";

export interface IBlogsRes {
  total: string;
  results: {
    id: string;
    title: {
      ar: string;
      en: string;
    };
    content: {
      ar: string;
      en: string;
    };
    image: string;
    author: {
      ar: string;
      en: string;
    };
    category: {
      id: string;
      name: {
        ar: string;
        en: string;
      };
      description: {
        ar: string;
        en: string;
      };
      image: string;
      createdAt: string;
      updatedAt: string;
    };
    isPopular: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export async function getBlogs(): Promise<IBlogsRes> {
  const res = await apiFetch("/v1/blogs?page=0", "blogs", {
    method: "GET",
    auth: false,
  });
  return res;
}
