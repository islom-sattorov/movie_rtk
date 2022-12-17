import { movieAPIKEY } from "../../app/api/apiSlice";
import { useGetMoviesQuery } from "../../app/reducers/movie/movieApi";
import { MovieList } from "../../components/MovieList/MovieList";
import style from "./Home.module.css";

interface movieData {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface apiReq {
  Response: string;
  totalResults: string;
  Search: movieData[];
}

export const Home = () => {
  const { data, isLoading, isFetching, isError } = useGetMoviesQuery({
    apiKey: movieAPIKEY,
    s: "Harry",
    type: "Movie",
  });

  if (isLoading) return <h2>"Loading..."</h2>;

  if (isFetching) return <h2>Get new movies</h2>;

  if (isError) return <h2>Something went wrong</h2>;

  return (
    <>
      <article className={style.banner_img}>
        <MovieList />
      </article>
    </>
  );
};
