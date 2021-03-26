import {
  IonList,
  IonImg,
  IonItem,
  IonLabel,
  IonRippleEffect,
} from '@ionic/react';
import { useHistory } from 'react-router';
import './MovieList.css';

interface Props {
  configuration: any,
  movies: any[],
  setActiveMovie: Function
}

const MovieList: React.FC<Props> = ({ configuration, movies, setActiveMovie }) => {
  let history = useHistory();
  const images = configuration.images || {};
  const base_url = images.secure_base_url;
  const poster_sizes = images.poster_sizes || ["w92"];
  const basePosterUrl = base_url === undefined ? undefined : `${base_url}${poster_sizes[0]}`;

  return (
    <IonList>
      {movies && movies.map && (movies || []).map(movie => {
        const hasPoster = base_url && movie.poster_path;
        const padStyle = { marginLeft: hasPoster ? 10 : 60 };

        return (
          <IonItem 
            key={movie.id} 
            onClick={() => { 
              setActiveMovie(movie);
              history.push('/detail');
            }} 
            button>
            <IonRippleEffect type="unbounded"></IonRippleEffect>
            { hasPoster && (
                <IonImg src={`${basePosterUrl}/${movie.poster_path}`} style={{ width: 50 }} />
            )
          }
          <IonLabel style={padStyle}>{movie.title}</IonLabel>
          </IonItem>
        )}
      )}
    </IonList>
  );
};

export default MovieList;
