import { Redirect, Route } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { home, search, list } from 'ionicons/icons';

import Home from './pages/Home';
import Search from './pages/Search';
import Genres from './pages/Genres';
import Detail from './pages/Detail';
import GenreDetail from './pages/GenreDetail';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { getConfiguration, getPopular, getSearchResults, getGenres, getGenreMovies } from './services';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  const [ configuration, setConfiguration ] = useState({});
  const [ popular, setPopular ] = useState({});
  const [ searchText, setSearchText ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);
  const [ activeMovie, setActiveMovie ] = useState({}); 
  const [ genres, setGenres ] = useState([]);
  const [ activeGenre, setActiveGenre ] = useState({ id: -1, name: 'none' });
  const [ genreMovies, setGenreMovies ] = useState([]);

  useEffect(() => {
    getConfiguration()
      .then((res) => setConfiguration(res))
      .catch(err => console.log('CONFIGURATION ERROR', err));
  }, [getConfiguration, setConfiguration]);

  useEffect(() => {
    getPopular()
      .then((res) => setPopular(res.results))
      .catch(err => console.log('POPULAR ERROR', err));
  }, [getPopular, setPopular]);

  useEffect(() => {
    if((searchText || '') === '') {
      setSearchResults([]);
    }
    else {
      getSearchResults(searchText)
        .then((res) => {
          setSearchResults(res.results);
        })
        .catch(err => console.log('SEARCH ERROR', err));
    }
  }, [searchText, getSearchResults, setSearchText, setSearchResults]);

  useEffect(() => {
    getGenres()
      .then((res) => setGenres(res.genres))
      .catch(err => console.log('POPULAR ERROR', err));
  }, [getGenres, setGenres]);

  useEffect(() => {
    if(activeGenre.id <= 0) {
      setGenreMovies([]);
    }
    else {
      getGenreMovies(activeGenre.id)
        .then((res) => {
          setGenreMovies(res.results);
        })
        .catch(err => console.log('SEARCH ERROR', err));
    }
  }, [activeGenre, getGenreMovies, setGenreMovies]);


  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home 
                configuration={configuration} 
                popular={popular} 
                setActiveMovie={setActiveMovie} />
            </Route>
            <Route exact path="/search">
              <Search 
                configuration={configuration} 
                searchText={searchText} 
                setSearchText={setSearchText} 
                movies={searchResults}
                setActiveMovie={setActiveMovie} />
            </Route>
            <Route path="/genres">
              <Genres 
                configuration={configuration} 
                genres={genres} 
                setActiveGenre={setActiveGenre} />
            </Route>
            <Route path="/detail">
              <Detail configuration={configuration} movie={activeMovie} />
            </Route>
            <Route path="/genre-detail">
              <GenreDetail 
                configuration={configuration} 
                activeGenre={activeGenre} 
                genreMovies={genreMovies}
                setActiveMovie={setActiveMovie} />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={search} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
            <IonTabButton tab="genres" href="/genres">
              <IonIcon icon={list} />
              <IonLabel>Genres</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
)};

export default App;
