import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import User from "./components/User";
import Settings from "./components/settings";

function App() {
  const userImg = "../assets/User.jpg";
  const userName = "Simone";
  return (
    <div>
      <TopBar />
      <div id="home">
        <Gallery movies="Alien" saga="Alien" />
        <Gallery movies="Pirates" saga="Pirates of the Caribbean + Extra" />
        <Gallery movies="Spider-Man" saga="Spider-Man" />
      </div>
      {/* <div id="user">
        <User img={userImg} name={userName} />
      </div> */}
      {/* <div id="settings">
        <Settings img={userImg} name={userName} />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
