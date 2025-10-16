export default function LoadingSwiper() {
  return (
    <div className="w-full">
      <div className="swiper swiper-rtl">
        <div className="swiper-wrapper">
          {/* Create 8 skeleton slides to match your content */}
          {Array.from({ length: 8 }).map((_, index) => (
            <div 
              key={index} 
              className="swiper-slide w-56 max-w-fit"
              style={{ marginLeft: '16px' }}
            >
              <div className="flex relative flex-row-reverse items-center justify-center gap-2 rounded-xl animate-pulse">
                {/* Price change indicator skeleton */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <div className="flex items-center">
                        {/* Percentage skeleton */}
                        <div className="w-8 h-4 bg-neutral-300 rounded-md"></div>
                        {/* Minus sign skeleton */}
                        <div className="w-2 h-4 bg-neutral-300 rounded-md mx-1"></div>
                        {/* Arrow icon skeleton */}
                        <div className="w-5 h-5 bg-neutral-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text content skeleton */}
                <div className="shrink-0 flex items-center justify-center gap-1">
                  {/* Label skeleton */}
                  <div className="w-16 h-4 bg-neutral-300 rounded-md"></div>
                  {/* Price skeleton */}
                  <div className="w-12 h-4 bg-neutral-400 rounded-md"></div>
                </div>

                {/* Image skeleton */}
                <div className="w-10 h-10 bg-neutral-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}