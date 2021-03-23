import { 
  IonContent,
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
} from '@ionic/react';
import MovieList from '../components/MovieList';
import './Home.css';

interface Props {
  configuration: any,
  popular: any,
  setActiveMovie: Function
}

const Home: React.FC<Props> = ({ configuration, popular, setActiveMovie }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Popular Movies</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollEvents={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Popular Movies</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MovieList 
          key="movie-list" 
          configuration={configuration} 
          movies={popular} 
          setActiveMovie={setActiveMovie} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
