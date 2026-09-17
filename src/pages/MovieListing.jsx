
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import MovieModal from '../components/MovieModal'
import { getAllShows,searchShows } from '../Services/api';

function MovieListing() {
  const navigate = useNavigate();
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedShow, setSelectedShow] = useState(null);
  const [query, setQuery] = useState("");
 useEffect(() => {
  const loadShows = async () => {
      try {
        setLoading(true);
        setError("");

        const results = await getAllShows();

        setShows(results);
      } catch {
        setError("Unable to load movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadShows();
  }, []);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery || "");

    if (!searchQuery) {
      try {
        setLoading(true);
        setError("");

        const results = await getAllShows();

        setShows(results);
      } catch {
        setError("Unable to load movies.");
      } finally {
        setLoading(false);
      }

      return;
    }

    try {
      setLoading(true);
      setError("");

      const results = await searchShows(searchQuery);

      const normalizedResults = results.map((result) => result.show);

      setShows(normalizedResults);
    } catch {
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      
      <section className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Explore Movies & Shows
            </h1>

            <p className="mt-3 text-sm sm:text-base text-gray-400">
              Search and discover your next favorite show.
            </p>
          </div>
           <button onClick={() => navigate(-1)}>
           ← Go Back
           </button>
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

     
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {query && !loading && !error && (
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-400 text-sm">
              Search results for
            </p>

            <h2 className="text-xl sm:text-2xl font-bold mt-1">
              "{query}"
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {shows.length} result{shows.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        
        {loading && (
          <div className="py-16 sm:py-24 text-center">
            <div className="inline-flex items-center gap-3">
              <div className="w-6 h-6 border-4 border-gray-700 border-t-red-500 rounded-full animate-spin" />

              <span className="text-gray-400">
                Loading movies...
              </span>
            </div>
          </div>
        )}

        
        {!loading && error && (
          <div className="py-16 text-center">
            <div className="max-w-md mx-auto bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <div className="text-4xl mb-4">⚠️</div>

              <h2 className="text-xl font-bold text-white mb-2">
                Something went wrong
              </h2>

              <p className="text-gray-400 mb-5">
                {error}
              </p>

              <button
                onClick={() => handleSearch(query)}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition duration-300"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

       
        {!loading && !error && shows.length === 0 && (
          <div className="py-16 sm:py-24 text-center">
            <div className="max-w-md mx-auto">
              <div className="text-5xl mb-5">🎬</div>

              <h2 className="text-2xl font-bold mb-3">
                No shows found
              </h2>

              <p className="text-gray-400">
                We couldn't find anything matching "{query}".
                Try searching for another title.
              </p>
            </div>
          </div>
        )}

        
        {!loading && !error && shows.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shows.map((show) => (
              <MovieCard
                key={show.id}
                show={show}
                onSelect={setSelectedShow}
              />
            ))}
          </div>
        )}
      </main>

      
      {selectedShow && (
        <MovieModal
          show={selectedShow}
          onClose={() => setSelectedShow(null)}
        />
      )}
    </div>
  );
}
export default MovieListing