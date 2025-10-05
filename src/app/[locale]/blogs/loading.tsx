
export default function BlogsLoading() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-primary-bg pt-4 lg:pt-8 pb-16 items-center px-3 lg:px-16 2xl:px-24">
      {/* Breadcrumb Skeleton */}
      <div className="mb-10 max-w-360 w-full">
        <nav className="text-sm flex items-start">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="flex items-center">
              <div className="h-4 w-16 bg-neutral-300 rounded animate-pulse rtl:pl-2 ltr:pr-2"></div>
              <span className="mx-1 text-neutral-300 flex items-center" aria-hidden="true">
                <svg className="rtl:rotate-180" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-12 bg-neutral-300 rounded animate-pulse rtl:pl-2 ltr:pr-2"></div>
            </div>
          </div>
        </nav>
      </div>

      {/* Header Skeleton */}
      <div className="text-center mb-16">
        <div className="h-10 w-64 bg-neutral-300 rounded animate-pulse mx-auto mb-4"></div>
        <div className="h-6 w-96 bg-neutral-200 rounded animate-pulse mx-auto mb-6"></div>
        <div className="w-24 h-1 bg-neutral-200 rounded-full mx-auto mt-6"></div>
      </div>

      {/* Blog Grid Skeleton */}
      <div className="w-full flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 items-center justify-center w-full gap-6 max-w-360">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="col-span-1 flex items-center justify-center h-full">
              <div className="flex flex-col w-full max-w-full sm:max-w-96 h-full rounded-xl shadow-md overflow-hidden bg-white">
                {/* Image Skeleton */}
                <div className="w-full h-64 bg-neutral-200 animate-pulse"></div>
                
                {/* Content Skeleton */}
                <div className="flex flex-col mb-7 gap-4 mt-4 px-4">
                  {/* Title Skeleton */}
                  <div className="h-5 w-3/4 bg-neutral-300 rounded animate-pulse"></div>
                  
                  {/* Excerpt Skeletons */}
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-neutral-200 rounded animate-pulse"></div>
                    <div className="h-3 w-4/5 bg-neutral-200 rounded animate-pulse"></div>
                    <div className="h-3 w-3/4 bg-neutral-200 rounded animate-pulse"></div>
                    <div className="h-3 w-5/6 bg-neutral-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}