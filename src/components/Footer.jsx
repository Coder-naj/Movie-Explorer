


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

        
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white">
              Movie<span className="text-red-500">Explorer</span>
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Discover your next favorite movie.
            </p>
          </div>

          
          <div className="flex items-center gap-5">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Facebook"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              Instagram
            </a>

          </div>

        </div>

        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} MovieExplorer. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
