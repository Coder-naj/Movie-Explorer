

function MovieModal({ show, onClose }) {
  const cleanSummary = (summary) => {
    if (!summary) {
      return "No description available.";
    }

    return summary
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[94vh] overflow-y-auto bg-gray-900 border border-gray-800 rounded-xl sm:rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-52 sm:h-64 md:h-80">
          {show.image?.original ? (
            <>
              <img
                src={show.image.original}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
              />

              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <img
                  src={show.image.original}
                  alt={show.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </>
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <span className="text-gray-500">
                No image available
              </span>
            </div>
          )}

          <div className="absolute inset-0 z-20 bg-linear-to-t from-gray-900 via-black/20 to-black/40 pointer-events-none" />


          <button
           type="button"
           onClick={onClose}
           className="absolute z-30 top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-black/70 hover:bg-red-600 rounded-full text-white text-lg sm:text-xl   transition-all duration-300 cursor-pointer"
           aria-label="Close movie details"
           >
            ✕
          </button>

          <h2 className="absolute bottom-4 left-4 sm:left-6 right-4 text-2xl sm:text-3xl md:text-4xl font-bold">
            {show.name}
          </h2>
        </div>

        
        <div className="p-4 sm:p-6 md:p-8">
        
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5 text-sm">
            <span className="text-yellow-400">
              ⭐ {show.rating?.average ?? "N/A"}
            </span>

            <span className="text-gray-400">
              Premiered: {show.premiered || "N/A"}
            </span>
          </div>

         
          {show.genres?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {show.genres.map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-xs sm:text-sm text-red-400"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

         
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3">
              Overview
            </h3>

            <p className="text-sm sm:text-base text-gray-300 leading-7">
              {cleanSummary(show.summary)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;