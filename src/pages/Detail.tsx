import { IonContent, IonHeader, IonInput, IonItem, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MovieDetail from '../components/MovieDetail';
import './Detail.css';

interface Props {
  configuration: any,
  movie: any,
}

const Detail: React.FC<Props> = ({ configuration, movie }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Movie Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollEvents={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Movie Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        <MovieDetail configuration={configuration} movie={movie} />
      </IonContent>
    </IonPage>
  );
};

export default Detail;
