import { useSelector } from "react-redux";
import { allMovie } from "../../app/reducers/movie/movieSlice";
import { movieData } from "../../types/types";
import { MovieCard } from "../MovieCard/MovieCard";
import style from "./MovieList.module.css";

export const MovieList = () => {
  const movies = useSelector(allMovie);

  let renderedMovies = movies?.map((movie: movieData, idx: number) => (
    <MovieCard key={idx} data={movie} />
  ));

  return (
    <section className={style.movie_wrapper}>
      <article className={style.movie_list}>
        <h2>Movies</h2>
        <article className={style.movie_container}>{renderedMovies}</article>
      </article>
    </section>
  );
};
