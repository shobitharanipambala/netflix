import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    {/* for banner.js  */}
      <Banner></Banner>
    </div>
  );
}

export default App;