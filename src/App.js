import './App.css';
import requests from './request';
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';


function App() {

  return (
    <div className='App'>
      {/* {Navbar} */}
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="TRENDINGS" fetchUrl={requests.fetchTrending} />
      <Row title="TOPRATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTIONS" fetchUrl={requests.fetchAction} />
      <Row title="WAR" fetchUrl={requests.fetchWar} />
      <Row title="ROMANTIC" fetchUrl={requests.fetchRomantic} />
      <Row title="ADVENTURE" fetchUrl={requests.fetchAdventure} />
      <Row title="POPULAR" fetchUrl={requests.fetchPopular} />
      <Row title="UPCOMING" fetchUrl={requests.fetchUpcoming} />
    </div>
  )
}

export default App;
