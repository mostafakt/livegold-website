
export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Skeleton */}
      <section className="text-white/90 pt-4 lg:pt-8 flex flex-col items-center">
        <div className="w-full max-w-360">
          <div className="mb-10">
            <nav className="text-sm flex items-start">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-4 bg-neutral-300 rounded w-20 animate-pulse"></div>
                  <span className="mx-1 text-neutral-500 flex items-center" aria-hidden="true">
                    <svg className="rtl:rotate-180" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 bg-neutral-300 rounded w-40 animate-pulse"></div>
                </div>
              </div>
            </nav>
          </div>

          {/* Header Skeleton */}
          <div className="text-center mb-16">
            <div className="h-10 bg-neutral-300 rounded w-96 max-w-full mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-neutral-300 rounded w-80 max-w-full mx-auto animate-pulse"></div>
            <div className="w-24 h-1 bg-neutral-300 mx-auto rounded-full mt-6 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-drop p-8 md:p-12">
              {/* Article Content Skeleton */}
              <div className="space-y-8">
                {/* Section 1 */}
                <div className="space-y-4">
                  <div className="h-7 bg-neutral-300 rounded w-64 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-neutral-200 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-neutral-200 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-neutral-200 rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <div className="h-7 bg-neutral-300 rounded w-72 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-neutral-200 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-neutral-200 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-neutral-200 rounded w-5/6 animate-pulse"></div>
                    <div className="h-4 bg-neutral-200 rounded w-2/3 animate-pulse"></div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <div className="h-7 bg-neutral-300 rounded w-80 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-neutral-200 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-neutral-200 rounded w-4/5 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Last Updated Skeleton */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <div className="h-4 bg-neutral-300 rounded w-40 animate-pulse"></div>
              </div>
            </div>

            {/* CTA Section Skeleton */}
            <div className="mt-12 text-center">
              <div className="bg-card-bg-gradient rounded-2xl p-8 border border-primary-200">
                <div className="h-7 bg-neutral-300 rounded w-48 mx-auto mb-4 animate-pulse"></div>
                <div className="h-5 bg-neutral-200 rounded w-80 max-w-full mx-auto mb-6 animate-pulse"></div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="h-12 bg-neutral-300 rounded-lg w-32 animate-pulse"></div>
                  <div className="h-12 bg-neutral-300 rounded-lg w-32 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}