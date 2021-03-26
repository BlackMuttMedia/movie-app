import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonItem,
    IonLabel,
  } from '@ionic/react'
  import './MovieList.css';
  
  interface Props {
    configuration: any;
    movie: any;
  }
  
  const MovieDetail: React.FC<Props> = ({ configuration, movie }) => {
    const images = configuration.images || {};
    const base_url = images.secure_base_url;
    const poster_sizes = images.poster_sizes || ["w92"];
    const basePosterUrl = base_url === undefined ? undefined : `${base_url}${poster_sizes[0]}`;
    const hasPoster = basePosterUrl && movie.poster_path;
    const year = new Date(movie.release_date).getFullYear();
  
    return (
        <IonCard key={movie.id}>
            <IonCardHeader>
                <IonCardTitle>{movie.title} ({year})</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol size='3'>
                            { hasPoster && (
                                <IonImg src={`${basePosterUrl}/${movie.poster_path}`} />
                            )}
                        </IonCol>
                        <IonCol size='9'>
                            {movie.overview}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
  };
  
  export default MovieDetail;
  