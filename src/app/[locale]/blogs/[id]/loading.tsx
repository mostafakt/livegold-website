import { Skeleton } from "@/components/ui/Skeleton";

export default function BlogDetailLoading() {
  return (
    <div className="flex flex-col items-center justify-center w-full pb-10">
      {/* Header Section Skeleton */}
      <div className="flex w-full h-75 items-center justify-center !max-h-75 lg:!max-h-96 3xl:!max-h-96 overflow-hidden bg-neutral-300">
        <div className="w-full h-full flex justify-center items-center bg-secondary-dark bg-opacity-45">
          <div className="z-[999] text-center flex items-center justify-center font-bold w-full">
            <Skeleton className="h-8 w-3/4 md:w-1/2 bg-primary-200 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="px-3 xl:px-16 2xl:px-24 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col w-full max-w-360 py-3 mt-4 items-start">
          <div className="flex flex-col gap-4 text-center justify-between w-full">
            <div className="w-full mt-6">
              {/* Content paragraphs skeleton */}
              <div className="w-full text-start wrapper justify-start space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton 
                      className={`h-6 ${
                        i % 2 === 0 ? 'w-1/3' : 'w-full'
                      } bg-neutral-300 rounded`} 
                    />
                    <Skeleton className="h-4 w-full bg-neutral-200 rounded" />
                    <Skeleton className="h-4 w-11/12 bg-neutral-200 rounded" />
                    {i % 3 === 0 && (
                      <>
                        <Skeleton className="h-4 w-10/12 bg-neutral-200 rounded" />
                        <Skeleton className="h-4 w-9/12 bg-neutral-200 rounded" />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Popular Articles Section Skeleton */}
          <div className="text-secondary-dark mt-14 text-start justify-start text-xl md:text-3xl font-bold">
            <Skeleton className="h-8 w-48 bg-neutral-300 rounded" />
          </div>

          {/* Blog Cards Carousel Skeleton */}
          <div className="w-full mt-4">
            <div className="flex gap-4 overflow-hidden">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-96 sm:max-w-96 h-full py-2"
                >
                  <div className="flex flex-col w-full max-w-full sm:max-w-96 h-full rounded-xl shadow-md overflow-hidden border border-neutral-200">
                    {/* Image skeleton */}
                    <Skeleton className="w-full h-48 bg-neutral-300 rounded-none" />
                    
                    <div className="flex flex-col mb-7 gap-2 mt-4 px-4">
                      {/* Title skeleton */}
                      <Skeleton className="h-6 w-3/4 bg-neutral-300 rounded" />
                      
                      {/* Content preview skeleton */}
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full bg-neutral-200 rounded" />
                        <Skeleton className="h-4 w-11/12 bg-neutral-200 rounded" />
                        <Skeleton className="h-4 w-10/12 bg-neutral-200 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons Skeleton */}
          <div className="w-full flex items-center justify-start mt-6 gap-6">
            <Skeleton className="w-10 h-10 bg-neutral-300 rounded-full" />
            <Skeleton className="w-10 h-10 bg-neutral-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}