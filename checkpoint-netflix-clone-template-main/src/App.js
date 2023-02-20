import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import request from "./request";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* for banner.js  */}
      <Banner></Banner>
   
    
        
        <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchUrl={request.fetchTrending} />
        <Row title="History Movies" fetchUrl={request.fetchHistoryMovies} />
        <Row title="Animation Movies" fetchUrl={request.fetchAnimationMovies} />
        <Row title="Fantasy Movies" fetchUrl={request.fetchFantasyMovies} />
        <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
        </div> 


    
  );
}

export default App;