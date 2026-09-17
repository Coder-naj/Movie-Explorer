
import MovieCard from './MovieCard';
function MovieGrid({shows,onSelect}) {
  if (!shows || shows.length === 0) {
    return(
    <div className="text-center text-gray-500 mt-8">
       <p className="text-lg">
        No movies found.
       </p>
    </div>)    
  }
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
       {shows.map((show) => ( 
        <MovieCard key={show.id} show={show} onSelect={onSelect} />
       ))} 
      </div>
    );
};

export default MovieGrid;
