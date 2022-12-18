import { useEffect, useState } from "react";
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
  const [page, setPage] = useState<number>(1);

  const dispatch = useDispatch();
  const { data, isLoading, isFetching, isError, isSuccess } = useGetMoviesQuery(
    {
      apiKey: movieAPIKEY,
      s: "Harry",
      type: "Movie",
      page: page,
    }
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(addMovie(data?.Search));
    }
  }, [data]);

  if (isLoading) return <Loader />;

  if (isFetching) return <Loader />;

  if (isError) return <h2>Something went wrong</h2>;

  return (
    <>
      <article className={style.banner_img}>
        <MovieList />
        <article className={style.pagination}>
          <button
            onClick={() => {
              if (page > 1) {
                setPage((prev) => (prev -= 1));
              }
            }}
          >
            {"<"}
          </button>
          <p>{page}</p>
          <button
            onClick={() => {
              if (data?.Search.length > 1) {
                setPage((prev) => (prev += 1));
              }
            }}
          >
            {">"}
          </button>
        </article>
      </article>
    </>
  );
};
