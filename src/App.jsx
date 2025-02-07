import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div>
      <TopBar />;
      <Gallery movies="Alien" saga="Alien" />
      <Gallery movies="Pirates" saga="Pirates of the Caribbean + Extra" />
      <Gallery movies="Spider-Man" saga="Spider-Man" />
      <Footer />;
    </div>
  );
}

export default App;
