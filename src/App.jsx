import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import User from "./components/User";

function App() {
  return (
    <div>
      <TopBar />;
      <div id="home">
        {/* <Gallery movies="Alien" saga="Alien" />
      <Gallery movies="Pirates" saga="Pirates of the Caribbean + Extra" />
      <Gallery movies="Spider-Man" saga="Spider-Man" /> */}
      </div>
      <div id="user">
        <User />
      </div>
      <Footer />;
    </div>
  );
}

export default App;
