import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MovieList from '../components/MovieList'
import './Genres.css';

interface Props {
  configuration: any,
  activeGenre: any,
  genreMovies: any[],
  setActiveMovie: Function
}

const GenreDetail: React.FC<Props> = ({ activeGenre, configuration, genreMovies, setActiveMovie }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle key={activeGenre.id}>{activeGenre.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{activeGenre.name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MovieList configuration={configuration} movies={genreMovies} setActiveMovie={setActiveMovie} />
      </IonContent>
    </IonPage>
  );
};

export default GenreDetail;
