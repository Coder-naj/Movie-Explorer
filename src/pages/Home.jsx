import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <HeroBanner />
      </main>
      <Footer />
    </div>
  )
}
export default Home