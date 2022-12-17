import { movieAPIKEY } from "../../app/api/apiSlice";
import { useGetMoviesQuery } from "../../app/reducers/movie/movieApi";
import { MovieList } from "../../components/MovieList/MovieList";
import style from "./Home.module.css";

export const Home = () => {
  const {
    data = [],
    isLoading,
    isFetching,
  } = useGetMoviesQuery({ apiKey: movieAPIKEY, s: "Harry" });

  console.log(data);

  return (
    <>
      <article className={style.banner_img}>
        <MovieList />
      </article>
    </>
  );
};
