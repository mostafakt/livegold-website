import { apiFetch } from "@/lib/api-client";

export interface IBlogsRes {
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
      createdAt: string;
      updatedAt: string;
    };
    isPopular: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
  total: number;
}
export interface IBlogRes {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  content: {
    ar: string;
    en: string;
  };
  image?: string;
  video?: string;
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
}
export async function getBlogs(): Promise<IBlogsRes> {
  let res;
  try {
    res = await apiFetch(
      "/v1/blogs?page=0&pageSize=100&totalPages=10",
      "blogs",
      {
        method: "GET",
        auth: false,
      }
    );
  } catch {}
  return res;
}

export async function getBlog(id: string): Promise<IBlogRes> {
  let res;
  try {
    res = await apiFetch(`/v1/blogs/${id}`, `blog-${id}`, {
      method: "GET",
      auth: false,
    });
  } catch {}
  return res;
}
