

import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies or shows..."
          aria-label="Search movies"
          className="w-full flex-1 px-4 sm:px-5 py-3 sm:py-3.5 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition"
        />

        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 sm:py-3.5 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg font-semibold transition-all duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;