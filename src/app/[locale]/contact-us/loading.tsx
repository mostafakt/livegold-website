export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center pt-4 lg:pt-8 pb-16 max-w-360 w-full">
      {/* Breadcrumb Skeleton */}
      <div className="w-full">
        <div className="mb-10 w-full">
          <nav className="text-sm flex items-start">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <div className="h-4 w-20 bg-neutral-300 rounded animate-pulse"></div>
              <div className="mx-1 text-neutral-500 flex items-center">
                <svg className="rtl:rotate-180" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M1 1L5 5L1 9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
              <div className="h-4 w-16 bg-neutral-300 rounded animate-pulse"></div>
            </div>
          </nav>
        </div>

        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="h-10 w-48 bg-neutral-300 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-96 bg-neutral-300 rounded mx-auto mb-6 animate-pulse"></div>
          <div className="w-24 h-1 bg-neutral-300 mx-auto rounded-full mt-6 animate-pulse"></div>
        </div>

        {/* Top Section Skeleton */}
        <div className="bg-white rounded-2xl shadow-drop p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-8 w-64 bg-neutral-300 rounded mb-6 animate-pulse"></div>
              <div className="space-y-3">
                <div className="h-4 w-full bg-neutral-300 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-neutral-300 rounded animate-pulse"></div>
                <div className="h-4 w-4/6 bg-neutral-300 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="bg-card-bg-gradient rounded-xl p-8 border border-primary-400">
              <div className="h-7 w-32 bg-neutral-300 rounded mb-4 animate-pulse"></div>
              <div className="space-y-3 mb-6">
                <div className="h-4 w-full bg-neutral-300 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-neutral-300 rounded animate-pulse"></div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neutral-300 rounded-full animate-pulse"></div>
                <div>
                  <div className="h-5 w-32 bg-neutral-300 rounded mb-1 animate-pulse"></div>
                  <div className="h-4 w-16 bg-neutral-300 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-drop p-8 h-fit sticky top-8">
              <div className="h-7 w-32 bg-neutral-300 rounded mb-4 animate-pulse"></div>
              <div className="h-4 w-48 bg-neutral-300 rounded mb-8 animate-pulse"></div>
              
              {/* Contact Items */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-neutral-300 rounded-full flex-shrink-0 animate-pulse"></div>
                  <div className="flex-1">
                    <div className="h-5 w-24 bg-neutral-300 rounded mb-1 animate-pulse"></div>
                    <div className="space-y-1">
                      <div className="h-4 w-32 bg-neutral-300 rounded animate-pulse"></div>
                      {item === 2 && <div className="h-4 w-32 bg-neutral-300 rounded animate-pulse"></div>}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Media Skeleton */}
              <div>
                <div className="h-5 w-20 bg-neutral-300 rounded mb-4 animate-pulse"></div>
                <div className="flex gap-3 flex-wrap">
                  {[1, 2].map((item) => (
                    <div key={item} className="w-10 h-10 bg-neutral-300 rounded-full animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form Skeleton */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-drop p-8">
              <div className="h-7 w-32 bg-neutral-300 rounded mb-4 animate-pulse"></div>
              <div className="h-4 w-96 bg-neutral-300 rounded mb-8 animate-pulse"></div>
              
              <div className="space-y-6">
                {/* Email Field */}
                <div>
                  <div className="h-4 w-32 bg-neutral-300 rounded mb-2 animate-pulse"></div>
                  <div className="h-12 w-full bg-neutral-300 rounded-lg animate-pulse"></div>
                </div>
                
                {/* Message Field */}
                <div>
                  <div className="h-4 w-32 bg-neutral-300 rounded mb-2 animate-pulse"></div>
                  <div className="h-48 w-full bg-neutral-300 rounded-lg animate-pulse"></div>
                </div>
                
                {/* Submit Button */}
                <div className="h-14 w-full bg-neutral-300 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}