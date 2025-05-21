export default function Loading() {
  return (
    <div>
      <div className="max-w-[1120px] bg-gray-100 shadow-xl mx-auto lg:pb-10">
        <div className="flex items-center justify-center lg:mt-2">
          <div className="animate-pulse rounded-lg w-[827px] h-[335px] bg-gray-300"></div>
        </div>
        <div className="flex items-center justify-center lg:mt-2">
          <div className="animate-pulse rounded-lg w-[827px] h-[30px] bg-gray-300"></div>
        </div>
        <div className="pl-3 lg:mt-10">
          <div className="animate-pulse rounded-lg h-[30px] w-[300px] bg-gray-300"></div>
          <div className="animate-pulse rounded-lg h-[20px] w-[300px] bg-gray-300 mt-2"></div>
          <div className="pl-4 animate-pulse rounded-lg h-[20px] w-[300px] bg-gray-300 mt-2"></div>
        </div>
      </div>
    </div>
  );
}
