import {
  IonList,
  IonImg,
  IonItem,
  IonLabel,
  IonRippleEffect,
} from '@ionic/react';
import { useHistory } from 'react-router';
import './GenreList.css';

interface Props {
  configuration: any,
  genres: any[],
  setActiveGenre: Function
}

const GenreList: React.FC<Props> = ({ configuration, genres, setActiveGenre }) => {
  let history = useHistory();
  const images = configuration.images || {};
  const base_url = images.secure_base_url;
  const poster_sizes = images.poster_sizes || ["w92"];
  const basePosterUrl = base_url === undefined ? undefined : `${base_url}${poster_sizes[0]}`;

  return (
    <IonList>
      {genres && genres.map && genres.map(genre => {

        return (
          <IonItem key={genre.id}
          onClick={() => { 
            setActiveGenre(genre);
            history.push('/genre-detail');
          }} 
          button>
            <IonLabel>{genre.name}</IonLabel>
          </IonItem>
        )}
      )}
    </IonList>
  );
};

export default GenreList;
