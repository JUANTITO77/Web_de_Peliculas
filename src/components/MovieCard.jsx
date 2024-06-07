import styles from "../styles/MovieCard.module.css";

const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <>
      <li className={styles.MovieCard}>

        <img 
        src={imageUrl} 
        alt={movie.title} 
        className={styles.movieImage}
        width={230}
        height={345}
         />

        <div>{movie.title}</div>
      </li>
    </>
  );
};

export default MovieCard;
