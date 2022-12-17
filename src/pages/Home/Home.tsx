import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieAPIKEY } from "../../app/api/apiSlice";
import { useGetMoviesQuery } from "../../app/reducers/movie/movieApi";
import { addMovie } from "../../app/reducers/movie/movieSlice";
import { Loader } from "../../components/Loader/Loader";
import { MovieList } from "../../components/MovieList/MovieList";
import { movieData } from "../../types/types";
import style from "./Home.module.css";

interface apiReq {
  Response: string;
  totalResults: string;
  Search: movieData[];
}

export const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isFetching, isError, isSuccess } = useGetMoviesQuery(
    {
      apiKey: movieAPIKEY,
      s: "Harry",
      type: "Movie",
    }
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(addMovie(data?.Search));
    }
  }, [data]);

  if (isLoading) return <Loader />;

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
