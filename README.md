# LiveGold — تطبيق متابعة أسعار الذهب

**تابع أسعار الذهب لحظة بلحظة، وابدأ البيع والشراء أو شارك في المزادات بسهولة من جوالك.**

> التطبيق الأول في السعودية لمتابعة أسعار الذهب على مدار الساعة — تحديثات دقيقة وفورية لأسعار السوق المحلّي والعالمي، مع قسم مزادات يدعم نشر وشراء القطع الذهبية والمجوهرات.

---

## Table of contents

1. Project overview — ملخص المشروع
2. Features — الميزات
3. Tech stack
4. Project structure — شجرة المشروع
5. Getting started — التشغيل محليًا
6. React Query — ملاحظة المشروع (تمت الإضافة)
7. API client & auth
8. i18n (next-intl)
9. Styling & assets
10. Scripts
11. Contributing & tips
12. Known issues & notes
13. License

---

## 1. Project overview — ملخص المشروع

**English:**
LiveGold is a Next.js + TypeScript application to track gold prices in realtime, allow buying/selling and host live auctions for jewelry and precious metals. It targets shop owners, investors and general users in Saudi Arabia and beyond.

**العربية:**
التطبيق الأول في السعودية لمتابعة أسعار الذهب على مدار الساعة. يقدم تحديثات فورية لأسعار السوق المحلية والعالمية، بالإضافة إلى قسم مزادات لعرض والمزايدة على القطع الذهبية بطريقة شفافة وآمنة.

---

## 2. Features — الميزات

* تحديثات لحظية لأسعار الذهب (محلي/عالمي).
* لوحة مزادات حية: عرض قطع، مزايدة، سجل مزاد.
* تسجيل / تسجيل دخول للمستخدمين والتجار.
* إدارة القوائم، صور القطع، وصف المزاد ومعاينات.
* واجهة متعددة اللغات (عربي/إنجليزي) باستخدام `next-intl`.
* رسومات بيانية لعرض سعر الذهب عبر الزمن باستخدام `recharts`.
* تجربة مُحسّنة على الجوال (mobile-first).

---

## 3. Tech stack

* **Framework:** Next.js 14 (app router)
* **Language:** TypeScript
* **State:** Redux Toolkit (for global app state) + **React Query** (for server state / API caching & fetching)
* **API client:** Axios (src/lib/api-client.ts)
* **Styling:** Tailwind CSS
* **Forms:** react-hook-form + zod
* **Charts:** Recharts
* **Testing & mocks:** msw (Mock Service Worker)
* **Utilities:** date-fns, clsx, js-cookie

**Important:** Requires Node **>= 18**.

---

## 4. Project structure

(Shortened tree — full tree in repo)

```
public/
  fonts/
  images/
src/
  app/
    layout.tsx
    page.tsx
    login/page.tsx
    not-found.tsx
  components/
    AuthInitializer.tsx
    Header.tsx
    Footer.tsx
    home/
      AuctionsSection.tsx
      BannerSection.tsx
  lib/
    api-client.ts
    server-auth.ts
  services/
    auth-client.ts
  store/
    store.ts
    slices/
  styles/
  types/
  utils/
tailwind.config.ts
package.json
```

---

## 5. Getting started — التشغيل محليًا

### Prerequisites

* Node.js >= 18
* pnpm / npm / yarn (examples use `npm`)

### Install

```bash
npm install
```

### Env

Create a `.env.local` (or use your preferred env mechanism). Example variables:

```
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
NEXT_PUBLIC_WS_URL=wss://api.example.com
NEXT_PUBLIC_APP_LOCALE=ar
JWT_SECRET=your_jwt_secret_here
```

### Run in dev

```bash
npm run dev
```

### Build & start

```bash
npm run build
npm start
```

---

## 6. React Query — ملاحظة المشروع (تمت الإضافة)

> **Note:** You added **React Query** (`@tanstack/react-query`) to the project for API initialization and cache management. Below is a recommended local setup and usage patterns.
 
 
 
---

## 7. API client & auth

* `src/lib/api-client.ts` — central axios instance: set `baseURL`, interceptors for auth token, and unified error handling.
* `src/lib/server-auth.ts` & `src/services/auth-client.ts` — utilities for JWT handling and server-side auth.
* `AuthInitializer.tsx` — hydrates auth state on app load (keep it before components that need auth info).

**Tip:** Use `React Query` for all server-state operations (prices, auctions, bids). Use RTK (Redux) for UI/state that is strictly client-only (drawer open, language selector).

---

## 8. i18n

Project uses `next-intl`. Store translations under `src/utils/locales/ar` and `.../en` (already present). Ensure pages/components call `useTranslations` where needed.

---

## 9. Styling & assets

* Fonts are in `public/fonts` (Expo Arabic, Tajawal). Use `src/styles/fonts.ts` to import into layout.
* Tailwind configuration is in `tailwind.config.ts`.
* Images live under `public/images/...` and are organized by page/section.

---

## 10. Scripts (from `package.json`)

* `dev` — `next dev`
* `build` — `next build`
* `start` — `next start`
* `lint` — `next lint`

(See package.json in repo for full dependency list.)

---

## 11. Contributing & tips

* Run `npm run lint` before commits. Husky + lint-staged are configured.
* Use `msw` for local mocking of API during UI work.
* When adding carousels, prefer **embla-carousel-react** or your Swiper-based preference (noted).
* Keep React Query keys consistent (`['goldPrice', currency]`, `['auctions', auctionId]`).

---

## 12. Known issues & notes

* **Line endings:** Team cross-OS issues (CRLF vs LF) — add an `.gitattributes` to enforce LF on committed files.
* **React Query addition:** You've already added `@tanstack/react-query` and devtools — ensure `Providers` wraps the app and that SSR hydration is handled for any server-side fetched data.
* **Auctions:** Make sure websocket / polling design is decided (WS for real-time bids is recommended).

---

## 13. License

MIT © Your Company

---

## Quick next steps (suggestions)

* Ensure `src/app/layout.tsx` or `src/components/Providers.tsx` mounts React Query provider.
* Add a small `hooks/` folder for `useGoldPrice`, `useAuctions`, `useAuctionDetails`.
* If you want, I can generate the `Providers.tsx` file or sample `useGoldPrice` hook and a ready-to-drop `api-client.ts` (tell me which one and I’ll add it).

---

*Created for the LiveGold Next.js + TypeScript project.*
