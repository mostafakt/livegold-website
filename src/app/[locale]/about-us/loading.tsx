export default function AboutUsLoading() {
  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Hero Section Skeleton */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-360 mx-auto px-4">
          <div className="text-center">
            {/* Title Skeleton */}
            <div className="h-8 bg-neutral-300 rounded-lg w-48 mx-auto mb-6 animate-pulse"></div>
            
            {/* Divider Skeleton */}
            <div className="w-20 h-1 bg-neutral-300 rounded-full mx-auto mb-8 animate-pulse"></div>
            
            {/* Content Skeleton */}
            <div className="space-y-4">
              <div className="h-4 bg-neutral-300 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-neutral-300 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-neutral-300 rounded w-5/6 mx-auto animate-pulse"></div>
              <div className="h-4 bg-neutral-300 rounded w-4/6 mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-16 lg:py-20 bg-primary-400">
        <div className="max-w-360 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl p-8 text-center shadow-drop">
                <div className="h-12 bg-neutral-300 rounded-lg w-32 mx-auto mb-4 animate-pulse"></div>
                <div className="h-4 bg-neutral-300 rounded w-24 mx-auto animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-360 mx-auto px-4">
          {/* Section Title Skeleton */}
          <div className="text-center mb-12">
            <div className="h-8 bg-neutral-300 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-start space-x-4 animate-pulse">
                <div className="flex-shrink-0 w-12 h-12 bg-neutral-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-6 bg-neutral-300 rounded w-32 mb-2"></div>
                  <div className="h-4 bg-neutral-300 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}