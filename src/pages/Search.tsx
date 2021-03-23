import { IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MovieList from '../components/MovieList';
import './Search.css';

interface Props {
  configuration: any,
  movies: any[],
  searchText: string, 
  setSearchText: Function,
  setActiveMovie: Function,
}

const Search: React.FC<Props> = ({ configuration, movies, searchText, setSearchText, setActiveMovie }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search Movies</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollEvents={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Search Movies</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput 
          type="text" 
          value={searchText} 
          onIonChange={(e) => setSearchText(e.detail.value)} 
          placeholder="Search ..."
          clearInput />
        <MovieList 
          key="movie-list" 
          configuration={configuration} 
          movies={movies} 
          setActiveMovie={setActiveMovie} />
      </IonContent>
    </IonPage>
  );
};

export default Search;
