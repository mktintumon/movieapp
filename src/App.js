import './App.css';

import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import Favourites from './components/Favourites';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path='/' 
        element={
          <>
          <Banner/>
          <MovieList/>
          </>
        }/>

        <Route path='/favourites' element={<Favourites/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
