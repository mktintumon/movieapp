import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import Favourites from './components/Favourites';

function App() {
  return (
    <>
    <Navbar />
    {/* <Banner/>
    <MovieList/> */}
    <Favourites/>
    </>
  );
}

export default App;
