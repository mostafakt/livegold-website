export const JWT_COOKIE_NAME = "jwt";
export const DEFAULT_API_BASE = "/api";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE ?? "";
export const METAL_PRICE_APIS = process.env.NEXT_PUBLIC_METAL_PRICE_APIS ?? "";
export const METAL_PRICE_KEY = process.env.NEXT_PUBLIC_METAL_PRICE_KEY ?? "";
export const DEFAULT_CURRENCY = process.env.NEXT_PUBLIC_DEFAULT_CURRENCY ?? "USD";
export const DEFAULT_METAL = process.env.NEXT_PUBLIC_DEFAULT_METAL ?? "XAU";

export const embeddedHtmlClassStyle = `
 prose prose-sm md:prose-base lg:prose-lg xl:prose-xl prose-rtl
    text-secondary-dark font-normal leading-[1.6] 
    prose-p:text-secondary-dark prose-p:leading-[1.7] prose-p:mb-4 prose-p:text-justify
    prose-strong:!text-red-50 prose-strong:font-extrabold prose-strong:block prose-strong:mb-1.5 prose-strong:text-[0.875em] md:prose-strong:text-[0.925em] lg:prose-strong:text-base lg:prose-strong:text-neutral-900 lg:prose-strong:mb-1 xl:prose-strong:mb-2
      prose-br:!hidden      prose-br:!h-1
    lg:prose-h2:text-primary lg:prose-h2:font-bold lg:prose-h2:mt-4 lg:prose-h2:mb-1 lg:prose-h2:text-base
    lg:prose-h1:text-neutral-900 lg:prose-h1:font-bold lg:prose-h1:mt-3 lg:prose-h1:mb-1.5 lg:prose-h1:text-[1.4rem]
    lg:prose-p:text-neutral-700 lg:prose-p:leading-[1.5] lg:prose-p:mb-1
    lg:prose-hr:mt-2 lg:prose-hr:border-neutral-200
    lg:prose-ul:list-disc lg:prose-ul:pl-6 lg:prose-ul:mb-1
    lg:prose-li:text-neutral-700 lg:prose-li:mb-0.5
    xl:prose-p:leading-[1.6]
`;
