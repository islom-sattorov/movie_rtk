import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { movieAPIKEY } from "../../app/api/apiSlice";
import { useLazyGetMoviesQuery } from "../../app/reducers/movie/movieApi";
import { addMovie } from "../../app/reducers/movie/movieSlice";
import { useLazyGetShowsQuery } from "../../app/reducers/shows/showsApi";
import { addShows } from "../../app/reducers/shows/showsSlice";
import user from "../../images/user.png";
import { Loader } from "../Loader/Loader";
import style from "./Header.module.css";

export const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  // const { data, isLoading, isFetching, isSuccess, isError } = useGetMoviesQuery(
  //   {
  //     apiKey: movieAPIKEY,
  //     s: term,
  //     type: "Movie",
  //     page: 1,
  //   }
  // );

  // const {
  //   data: dataShow,
  //   isLoading: isLoadingShow,
  //   isFetching: isFetchingShow,
  //   isSuccess: isSuccessShow,
  // } = useGetShowsQuery({
  //   apiKey: movieAPIKEY,
  //   s: term,
  //   type: "series",
  //   page: 1,
  // });

  const [trigger, { data, isSuccess, isLoading, isError, isFetching }] =
    useLazyGetMoviesQuery();

  const [
    triggerShow,
    {
      data: dataShow,
      isSuccess: isSuccessShow,
      isFetching: isFetchingShow,
      isLoading: isLoadingShow,
    },
  ] = useLazyGetShowsQuery();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm("");
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(addMovie(data?.Search));
    }
    if (isSuccessShow) {
      dispatch(addShows(dataShow?.Search));
    }
  }, [data, dataShow]);

  if (isLoading || isLoadingShow) return <Loader />;

  if (isFetching || isFetchingShow) return <Loader />;

  if (isError) return <h2>Something went wrong</h2>;

  return (
    <section className={style.header}>
      <Link to="/">
        <h2 className={style.header_logo}>Movie App</h2>
      </Link>
      <article className={style.header_search}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="search"
            value={term}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTerm(e.target.value)
            }
            placeholder="Search"
          />
          <button
            onClick={() => {
              trigger({
                apiKey: movieAPIKEY,
                s: term,
                type: "movie",
                page: 1,
              });
              triggerShow({
                apiKey: movieAPIKEY,
                s: term,
                type: "series",
                page: 1,
              });
            }}
            type="submit"
          >
            <i className={style.search_icon}>
              <BiSearch />
            </i>
          </button>
        </form>
      </article>
      <article className={style.header_image}>
        <img src={user} alt="user" />
      </article>
    </section>
  );
};
