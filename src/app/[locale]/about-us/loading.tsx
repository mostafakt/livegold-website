export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <section className="bg-primary-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="h-4 w-48 bg-white/30 rounded mb-4"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
            <div className="text-white">
              <div className="h-12 bg-white/30 rounded mb-6 w-3/4"></div>
              <div className="h-6 bg-white/30 rounded w-full mb-2"></div>
              <div className="h-6 bg-white/30 rounded w-5/6"></div>

              {/* Stats Skeleton */}
              <div className="grid grid-cols-2 gap-6 mt-12">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="text-center">
                    <div className="h-8 bg-white/30 rounded mb-2 w-16 mx-auto"></div>
                    <div className="h-4 bg-white/30 rounded w-20 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image Skeleton */}
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8">
              <div className="bg-white rounded-2xl p-6">
                <div className="aspect-video bg-gray-300 rounded-xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="h-10 bg-gray-300 rounded w-64 mx-auto mb-6"></div>
            <div className="h-6 bg-gray-300 rounded w-96 max-w-full mx-auto"></div>
          </div>

          {/* Features Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-drop">
                <div className="h-12 w-12 bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
