import MovieCard from './MovieCard';
import movies from './movies.json';
import styles from '../styles/MoviesGrid.module.css'

const MoviesGrid = () => {
    console.log(movies)
  return (
    <ul className={styles.moviesGrid}>
        {movies.map((e)=><MovieCard movie={e} key={e.id}/>)}
    </ul>
  )
}

export default MoviesGrid