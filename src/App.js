import Auction from "./components/Auction";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Welcome from "./components/Welcome";


function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Auction />
      <Discover />
      <Footer />

    </div>
  );
}

export default App;
