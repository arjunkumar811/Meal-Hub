function Shimmer() {
    return (
        <>
            <div className="shimmer-container flex flex-wrap">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="p-4 m-4 w-[250px] rounded-lg bg-white shadow-lg animate-pulse">
                        <div className="h-40 bg-gray-200 rounded-lg"></div>
                        <div className="font-bold py-4 text-lg bg-gray-200 h-6 rounded"></div>
                        <div className="text-sm bg-gray-200 h-4 rounded mb-2"></div>
                        <div className="text-sm bg-gray-200 h-4 rounded mb-2"></div>
                        <div className="text-sm bg-gray-200 h-4 rounded mb-2"></div>
                        <div className="text-sm bg-gray-200 h-4 rounded"></div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Shimmer;
