import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import GenreList from '../components/GenreList'
import './Genres.css';

interface Props {
  configuration: any,
  genres: any,
  setActiveGenre: Function
}

const Genres: React.FC<Props> = ({ configuration, genres, setActiveGenre }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Genres</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Genres</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GenreList 
          configuration={configuration} 
          genres={genres} 
          setActiveGenre={setActiveGenre} />
      </IonContent>
    </IonPage>
  );
};

export default Genres;
