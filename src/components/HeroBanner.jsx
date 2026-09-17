

import { Link } from "react-router-dom"; 
import bg from "../assets/bg.png";
function HeroBanner() { 
  return ( 
  <section className="relative min-h-[75vh] flex items-center overflow-hidden" style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center", }} > 
  
   <div className="absolute inset-0 bg-black/10" /> 
  
    <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/80 to-gray-950/20" /> 
   
    <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20"> 
    <div className="max-w-3xl"> 
     
    <p className="mb-4 text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-red-500"> 
      Welcome to Movie Explorer 
    </p> 
       
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white"> 
        Discover Your 
        <span className="block text-red-500"> 
          Next Favorite Movie 
        </span> 
      </h1> 
          
          <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-gray-300"> 
            Explore amazing movies and shows, discover new stories, and find detailed information about the titles you'll love to watch. 
          </p> 
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4"> 
              <Link to="/movies" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold rounded-lg shadow-xl hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5" > 
              Explore Movies 
              <span className="text-xl">
                →
              </span> 
              </Link> 
              <Link to="/movies" className="inline-flex items-center justify-center px-7 py-3.5 border border-gray-600 hover:border-gray-400 text-gray-200 hover:text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-300" > 
              Browse Collection 
              </Link> 
            </div> 
     </div> 
    </div> 
              
   <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-950 to-transparent" /> 
  </section> ); 
}

export default HeroBanner;