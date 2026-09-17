


function MovieCard({ show, onSelect }) {
  const poster =
    show.image?.medium ||
    "https://via.placeholder.com/210x295?text=No+Image";

  const rating = show.rating?.average ?? "N/A";

  const premiereYear = show.premiered
    ? show.premiered.slice(0, 4)
    : "N/A";

  return (
    <article className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      
      
      <div className="relative overflow-hidden bg-gray-800">
        <img
          src={poster}
          alt={show.name}
          loading="lazy"
          className="w-full aspect-2/3 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-sm rounded-full text-sm font-semibold text-yellow-400">
          ⭐ {rating}
        </div>
      </div>

      
      <div className="p-4 sm:p-5">
        <h2
          className="text-lg font-bold text-white truncate group-hover:text-red-400 transition-colors duration-300"
          title={show.name}
        >
          {show.name}
        </h2>

        <div className="flex items-center justify-between mt-3 text-sm">
          <span className="text-gray-400">
            {premiereYear}
          </span>

          {show.runtime && (
            <span className="text-gray-500">
              {show.runtime} min
            </span>
          )}
        </div>

        <button
          onClick={() => onSelect(show)}
          className="w-full mt-5 py-2.5 px-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          See Details
        </button>
      </div>
    </article>
  );
}

export default MovieCard;