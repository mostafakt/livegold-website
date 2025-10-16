/* eslint-disable @typescript-eslint/no-explicit-any */ 
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryHandler } from "./middleware";
import type { IBlogsRes } from "@/services/blogs";
import { toQueryString } from "@/utils/toQueryString";

export type FetchArgs = {
  filters?: Record<string, any>;
  page?: number;
  pageSize?: number;
  sort?: string;
  [extra: string]: any;
};

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: baseQueryHandler,
  tagTypes: ["Blog"],
  endpoints: (builder) => ({
    fetchBlogs: builder.query<IBlogsRes, FetchArgs | void>({
      query: (args: any = {}) => {
        const { filters = {}, page = 0, pageSize = 100, sort, ...rest } = args;
        const q = {
          page,
          pageSize,
          sort,
          ...filters,
          ...rest,
        };
        const qs = toQueryString(q);
        return {
          url: `/v1/blogs${qs ? `?${qs}` : ""}`,
          method: "GET",
        };
      },
      providesTags: (result) =>
        result?.results
          ? [
              ...result.results.map((r: any) => ({
                type: "Blog" as const,
                id: r.id,
              })),
              { type: "Blog", id: "LIST" },
            ]
          : [{ type: "Blog", id: "LIST" }],
    }),
  }),
});

export const { useFetchBlogsQuery } = blogsApi;
