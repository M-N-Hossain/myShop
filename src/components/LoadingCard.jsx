
export default function LoadingCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow animate-pulse">
      {/* <!-- Image skeleton --> */}
      <div className="bg-gray-300 h-48 rounded-md mb-4"></div>
      {/* <!-- Title skeleton --> */}
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      {/* <!-- Category skeleton --> */}
      <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
      {/* <!-- Price skeleton --> */}
      <div className="h-4 bg-gray-300 rounded w-1/4 mb-4"></div>
      {/* <!-- Button skeleton --> */}
      <div className="h-10 bg-gray-300 rounded"></div>
    </div>
  );
}
