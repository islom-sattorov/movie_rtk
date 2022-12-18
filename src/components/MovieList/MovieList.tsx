import { useSelector } from "react-redux";
import { allMovie } from "../../app/reducers/movie/movieSlice";
import { allShow } from "../../app/reducers/shows/showsSlice";
import { movieData } from "../../types/types";
import { MovieCard } from "../MovieCard/MovieCard";
import style from "./MovieList.module.css";

export const MovieList = () => {
  const movies = useSelector(allMovie);
  const shows = useSelector(allShow);

  let renderedMovies = movies?.map((movie: movieData, idx: number) => (
    <MovieCard key={idx} data={movie} />
  ));

  let renderedShows = shows?.map((show: movieData, idx: number) => (
    <MovieCard key={idx} data={show} />
  ));

  return (
    <section className={style.movie_wrapper}>
      <article className={style.movie_list}>
        <h2>Movies</h2>
        <article className={style.movie_container}>{renderedMovies}</article>
      </article>
      <article className={style.show_list}>
        <h2>Series List</h2>
        <article className={style.movie_container}>{renderedShows}</article>
      </article>
    </section>
  );
};
