// import { apiFetch } from "@/lib/api-client";

// import { normalizeQuery, QueryRecord } from "@/utils/query";

// export async function fetchProducts(
//   searchParams?: QueryRecord
// ): Promise<ProductsList> {
//   let url = "/public/v1/products";

//   if (searchParams) {
//     const query = new URLSearchParams(normalizeQuery(searchParams));
//     url += `?${query.toString()}`;
//   }
//   return apiFetch<ProductsList>(url, "products-list", {
//     method: "GET",
//     auth: false,
//     cache: "no-store",
//   });
// }
// export async function fetchProductsFilters(): Promise<IProductFiltersRes> {
//   return apiFetch<IProductFiltersRes>(
//     "/public/v1/products/filters",
//     "products-filters",
//     {
//       method: "GET",
//       auth: false,
//     }
//   );
// }
// export async function fetchProduct(id: string): Promise<IProductDetails> {
//   return apiFetch<IProductDetails>(
//     `/public/v1/products/${id}`,
//     `product-${id}`,
//     {
//       method: "GET",
//       auth: false,
//     }
//   );
// }
// export async function fetchProductRating(
//   id: string
// ): Promise<IProductRatingRes> {
//   return apiFetch<IProductRatingRes>(
//     `/public/v1/product-reviews/rating/${id}`,
//     `product-rating-${id}`,
//     {
//       method: "GET",
//       auth: false,
//     }
//   );
// }
// export async function fetchProductReview(
//   id: string
// ): Promise<IProductReviewsRes> {
//   return apiFetch<IProductReviewsRes>(
//     `/public/v1/product-reviews/${id}`,
//     `product-rating-${id}`,
//     {
//       method: "GET",
//       auth: false,
//     }
//   );
// }
