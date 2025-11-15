const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6">
      <div className="card">
        <div className="flex items-start space-x-3 mb-4">
          <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          <div className="flex-1">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
        </div>
      </div>

      {[...Array(5)].map((_, i) => (
        <div key={i} className="result-card">
          <div className="flex gap-4">
            <div className="hidden sm:block w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-lg flex-shrink-0"></div>
            <div className="flex-1 space-y-3">
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
              <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
              <div className="space-y-2">
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
