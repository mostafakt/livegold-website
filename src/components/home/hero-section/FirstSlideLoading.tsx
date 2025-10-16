export default function PriceChartSkeleton() {
  return (
    <div className="flex flex-col gap-3 lg:gap-4 animate-pulse">
      {/* Mobile Filters Skeleton */}
      <div>
        <div className="block rounded-md lg:hidden">
          <details className="mb-2">
            <summary className="cursor-pointer py-2 px-4 bg-neutral-200 rounded font-medium">
              <div className="h-5 w-20 bg-neutral-300 rounded"></div>
            </summary>
            <div className="flex flex-col gap-4 mt-2">
              {/* Period Filter Skeleton */}
              <div className="flex flex-col flex-wrap items-start gap-2 w-auto">
                <div className="h-6 w-16 bg-neutral-300 rounded mb-1"></div>
                <div className="flex flex-wrap items-center gap-1 w-auto">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="h-11 px-3 py-2 rounded-lg bg-neutral-200"
                    >
                      <div className="h-5 w-12 bg-neutral-300 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dropdown Filters Skeleton */}
              <div className="flex flex-row gap-6">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-start gap-1 flex-1"
                  >
                    <div className="h-5 w-12 bg-neutral-300 rounded"></div>
                    <div className="relative inline-block text-start w-full">
                      <div className="h-11 w-full rounded-lg bg-neutral-200 flex items-center justify-between px-3">
                        <div className="h-5 w-24 bg-neutral-300 rounded"></div>
                        <div className="h-5 w-5 bg-neutral-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>

        {/* Desktop Filters Skeleton */}
        <div className="hidden lg:flex flex-row w-full gap-16 justify-between">
          {/* Period Filter */}
          <div className="flex flex-col flex-wrap items-start gap-2 w-auto">
            <div className="h-7 w-20 bg-neutral-300 rounded"></div>
            <div className="flex flex-wrap items-center gap-1 w-auto">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`h-11 px-3 py-2 rounded-lg ${
                    i === 0 ? "bg-primary-200" : "bg-neutral-200"
                  }`}
                >
                  <div
                    className={`h-5 w-12 rounded ${
                      i === 0 ? "bg-primary-300" : "bg-neutral-300"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Dropdown Filters */}
          <div className="flex flex-row gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col items-start gap-1">
                <div className="h-5 w-12 bg-neutral-300 rounded"></div>
                <div className="relative inline-block text-start w-full">
                  <div className="h-11 w-32 rounded-lg bg-neutral-200 flex items-center justify-between px-3">
                    <div className="h-5 w-20 bg-neutral-300 rounded"></div>
                    <div className="h-5 w-5 bg-neutral-300 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex flex-row flex-wrap gap-4 lg:gap-6">
        {/* Left Sidebar - Stats Cards */}
        <div className="flex flex-col w-full xl:max-w-xs gap-3">
          {/* Current Price & Symbol */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="rounded-lg p-3 pt-3 border border-neutral-200 flex flex-col gap-3 items-start justify-start flex-1">
              <div className="h-5 w-20 bg-neutral-300 rounded"></div>
              <div className="h-8 w-32 bg-neutral-300 rounded"></div>
            </div>
            <div className="w-full sm:w-24 h-24 bg-neutral-100 p-2.5 rounded-lg flex justify-center items-center">
              <div className="h-10 w-10 bg-neutral-300 rounded-full"></div>
            </div>
          </div>

          {/* Weekly Change */}
          <div className="flex gap-3">
            <div className="rounded-lg p-3 pt-3 border border-neutral-200 flex flex-col gap-3 items-start justify-start w-full">
              <div className="h-5 w-24 bg-neutral-300 rounded"></div>
              <div className="flex items-end gap-2">
                <div className="h-7 w-16 bg-neutral-300 rounded"></div>
                <div className="h-6 w-12 bg-neutral-300 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* High/Low Prices */}
          <div className="rounded-lg p-3 pt-3 border border-neutral-200 flex flex-col gap-3 items-start justify-start w-full">
            <div className="h-5 w-24 bg-neutral-300 rounded"></div>
            <div className="flex flex-col gap-2 w-full">
              {/* High Price */}
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 bg-neutral-300 rounded"></div>
                <div className="h-5 w-16 bg-neutral-300 rounded"></div>
                <div className="h-6 w-20 bg-neutral-300 rounded"></div>
              </div>
              {/* Low Price */}
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 bg-neutral-300 rounded"></div>
                <div className="h-5 w-16 bg-neutral-300 rounded"></div>
                <div className="h-6 w-20 bg-neutral-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Create Alert Button Skeleton */}
          <div className="h-11 bg-neutral-200 rounded-lg flex items-center justify-center gap-2 mt-2">
            <div className="h-5 w-32 bg-neutral-300 rounded"></div>
            <div className="h-6 w-6 bg-neutral-300 rounded"></div>
          </div>
        </div>

        {/* Chart Area Skeleton */}
        <div className="flex-1 w-full min-h-72  bg-white  lg:min-h-96">
          <div className="w-full h-full p-3 sm:p-4 bg-white rounded-xl">
            {/* Chart Header Skeleton */}
            <div className="flex justify-between items-center mb-4">
              <div className="h-6 w-32 bg-neutral-200 rounded"></div>
              <div className="h-6 w-20 bg-neutral-200 rounded"></div>
            </div>

            {/* Chart Container Skeleton */}
            <div className="w-full h-64 lg:h-80rounded-lg relative overflow-hidden">
              {/* Simulated Chart Grid */}
              <div className="absolute inset-0 flex flex-col justify-between py-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-px bg-neutral-200 w-full"></div>
                ))}
              </div>

              {/* Simulated Chart Line */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="h-32 w-full">
                  <div className="relative h-full">
                    {/* Wave-like chart line */}
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 400 120"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,60 C80,30 120,90 200,60 C280,30 320,90 400,60"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                        fill="none"
                      />
                      <path
                        d="M0,60 C80,30 120,90 200,60 C280,30 320,90 400,60 L400,120 L0,120 Z"
                        fill="url(#chartGradientSkeleton)"
                        opacity="0.3"
                      />
                      <defs>
                        <linearGradient
                          id="chartGradientSkeleton"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#e5e7eb"
                            stopOpacity="0.4"
                          />
                          <stop
                            offset="100%"
                            stopColor="#e5e7eb"
                            stopOpacity="0.1"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-3 w-8 bg-neutral-300 rounded"></div>
                ))}
              </div>

              {/* Y-axis labels */}
              <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between py-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="h-3 w-12 bg-neutral-300 rounded"
                  ></div>
                ))}
              </div>
            </div>

            {/* Chart Legend Skeleton */}
            <div className="flex justify-center gap-6 mt-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-neutral-300 rounded-full"></div>
                  <div className="h-3 w-16 bg-neutral-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export const ChartSkeleton = () => (
  <div className="w-full h-full bg-white shadow-drop rounded-2xl p-3 sm:p-4 animate-pulse">
    {/* Chart Header Skeleton */}
    <div className="flex justify-between items-center mb-6">
      <div className="h-6 w-40 bg-neutral-200 rounded-lg"></div>
      <div className="h-4 w-20 bg-neutral-200 rounded"></div>
    </div>

    {/* Main Chart Area */}
    <div className="w-full h-64 relative">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-4 w-12">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-3 w-12 bg-neutral-200 rounded"></div>
        ))}
      </div>

      {/* Chart Content */}
      <div className="ml-12 h-full relative">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-px bg-neutral-100 w-full"></div>
          ))}
        </div>

        {/* Animated Wave Line */}
        <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
          <div className="relative h-full">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,80 C50,40 100,100 150,60 C200,20 250,80 300,40 C350,0 400,60 400,60"
                stroke="#f3f4f6"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M0,80 C50,40 100,100 150,60 C200,20 250,80 300,40 C350,0 400,60 400,120 L0,120 Z"
                fill="url(#skeletonGradient)"
              />
              <defs>
                <linearGradient
                  id="skeletonGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#e2e8f0" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-2 w-8 bg-neutral-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>

    {/* Loading Text */}
    <div className="flex justify-center mt-6">
      <div className="flex items-center gap-3">
        <div className="h-4 w-4 bg-primary-300 rounded-full animate-bounce"></div>
        <div className="h-4 w-32 bg-neutral-200 rounded"></div>
      </div>
    </div>
  </div>
);

// No Data Component
export const NoDataState = ({ message }: { message: string }) => (
  <div className="w-full h-full bg-white shadow-drop rounded-2xl p-6 flex flex-col items-center justify-center">
    {/* Illustration */}
    <div className="relative mb-6">
      <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
        <svg
          className="w-12 h-12 text-primary-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-200 rounded-full opacity-60"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary-300 rounded-full opacity-40"></div>
    </div>

    {/* Text Content */}
    <div className="text-center max-w-sm">
      <h3 className="text-lg font-bold text-neutral-800 mb-2">{message}</h3>
      {/* <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
        {message ||
          "We couldn't load the price chart data at the moment. This could be due to market closure or temporary unavailability."}
      </p> */}
    </div>

    {/* Background Pattern */}
    <div className="absolute inset-0 pointer-events-none opacity-5">
      <div className="absolute top-4 right-4 w-16 h-16 border-2 border-primary-300 rounded-lg"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-secondary-300 rounded-lg"></div>
    </div>
  </div>
);
export function PriceStatsSkeleton() {
  return (
    <div className="flex flex-row flex-wrap gap-4 lg:gap-6 animate-pulse">
      {/* Left Stats Column - Exact same width and height constraints */}
      <div className="flex flex-col w-full !h-full xl:max-w-xs gap-3">
        {/* Current Price Card */}
        <div className="rounded-lg p-3 pt-3 border border-neutral-200 flex flex-col gap-3 items-start justify-start">
          <div className="font-medium text-base text-center text-transparent bg-neutral-200 rounded w-20 h-5"></div>
          <div className="font-bold text-2xl lg:text-3xl text-center text-transparent bg-neutral-300 rounded w-32 h-8 lg:h-9"></div>
        </div>

        {/* Weekly Change Card */}
        <div className="flex gap-3">
          <div className="rounded-lg p-3 pt-3 border border-neutral-200 flex flex-col gap-3 items-start justify-start w-full">
            <div className="font-medium text-base text-center text-transparent bg-neutral-200 rounded w-24 h-5"></div>
            <div className="flex items-end gap-2">
              <div className="font-medium text-xl lg:text-2xl text-center text-transparent bg-neutral-300 rounded w-20 h-7 lg:h-8"></div>
              <div className="flex justify-center items-center gap-2.5 bg-neutral-200 px-4 py-2 rounded-xl font-medium text-6 leading-6 text-center text-transparent w-16 h-6"></div>
            </div>
          </div>
        </div>

        {/* High/Low Prices Card */}
        <div className="rounded-lg p-3 pt-3 border border-neutral-200 flex flex-col gap-3 items-start justify-start w-full h-40 flex justify-center">
          <div className="font-medium text-base text-center text-transparent bg-neutral-200 rounded w-24 h-5 mb-2"></div>
          <div className="flex flex-col gap-2 w-full">
            {/* High Price Row */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-neutral-200 rounded"></div>
              <div className="text-base lg:text-lg font-medium text-transparent bg-neutral-200 rounded w-16 h-5"></div>
              <div className="text-xl lg:text-2xl font-medium text-transparent bg-neutral-300 rounded w-28 h-6 lg:h-7"></div>
            </div>

            {/* Low Price Row */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-neutral-200 rounded"></div>
              <div className="text-base lg:text-lg font-medium text-transparent bg-neutral-200 rounded w-16 h-5"></div>
              <div className="text-xl lg:text-2xl font-medium text-transparent bg-neutral-300 rounded w-28 h-6 lg:h-7"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Area - Maintains exact flex behavior */}
      <div className="flex-1 w-full min-h-72 lg:min-h-96">
        <div className="w-full h-full bg-white shadow-drop rounded-2xl p-3 sm:p-4">
          {/* Chart Header Skeleton */}
          <div className="flex justify-between items-center mb-4">
            <div className="h-6 w-40 bg-neutral-200 rounded"></div>
            <div className="h-4 w-20 bg-neutral-200 rounded"></div>
          </div>

          {/* Chart Container - Exact same height behavior */}
          <div className="w-full h-56 lg:h-72 xl:h-80 rounded-lg relative overflow-hidden border border-neutral-100">
            {/* Y-axis labels */}
            <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-between py-4 w-12">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-3 w-12 bg-neutral-200 rounded"></div>
              ))}
            </div>

            {/* Chart Grid */}
            <div className="absolute left-12 right-0 top-0 bottom-0 flex flex-col justify-between py-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-px bg-neutral-100 w-full"></div>
              ))}
            </div>

            {/* Chart Wave Line */}
            <div className="absolute bottom-4 left-12 right-4 top-4">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,150 C50,120 100,180 150,140 C200,100 250,160 300,120 C350,80 400,140 400,140"
                  stroke="#e5e7eb"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0,150 C50,120 100,180 150,140 C200,100 250,160  300,120 C350,80 400,140 400,200 L0,200 Z"
                  fill="url(#skeletonWave)"
                />
                <defs>
                  <linearGradient
                    id="skeletonWave"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ffd99d" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#ffd99d" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ffd99d" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* X-axis labels */}
            <div className="absolute bottom-2 left-12 right-4 flex justify-between">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-2 w-8 bg-neutral-200 rounded"></div>
              ))}
            </div>
          </div>

          {/* Chart Legend Skeleton */}
          <div className="flex justify-center gap-6 mt-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-3 w-3 bg-neutral-200 rounded-full"></div>
                <div className="h-3 w-12 bg-neutral-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
