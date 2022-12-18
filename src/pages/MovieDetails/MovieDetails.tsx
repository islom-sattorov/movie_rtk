import { useEffect } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BiCalendarWeek, BiFilm, BiUpvote } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAPIKEY } from "../../app/api/apiSlice";
import { useGetDetailQuery } from "../../app/reducers/detail/detailApi";
import {
  addDetail,
  allDetail,
  removeDetail,
} from "../../app/reducers/detail/detailSlice";
import { Loader } from "../../components/Loader/Loader";
import style from "./MovieDetails.module.css";

export const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const showOrMovieDetail = useSelector(allDetail);

  const { data, isLoading, isFetching } = useGetDetailQuery({
    apiKey: movieAPIKEY,
    i: imdbID,
    plot: "full",
  });

  useEffect(() => {
    dispatch(addDetail(data));
    return () => {
      dispatch(removeDetail(""));
    };
  }, [data, imdbID]);

  if (isLoading || isFetching) return <Loader />;

  return (
    <section className={style.movie_section}>
      <article className={style.section_left}>
        <article className={style.section_title}>
          {showOrMovieDetail?.Title}
        </article>
        <article className={style.movie_rating}>
          <p>
            IMDB Rating
            <i>
              <AiTwotoneStar />
            </i>
            : {showOrMovieDetail?.imdbRating}
          </p>
          <p>
            IMDB Votes
            <i>
              <BiUpvote />
            </i>
            : {showOrMovieDetail?.imdbVotes}
          </p>
          <p>
            Runtime
            <i>
              <BiFilm />
            </i>
            : {showOrMovieDetail?.Runtime}
          </p>
          <p>
            Year
            <i>
              <BiCalendarWeek />
            </i>
            : {showOrMovieDetail?.Year}
          </p>
        </article>
        <article className={style.movie_plot}>{data?.Plot}</article>
        <article className={style.movie_info}>
          <div>
            <p>Director</p>
            <p>{data.Director}</p>
          </div>
          <div>
            <p>Stars</p>
            <p>{data.Actors}</p>
          </div>
          <div>
            <p>Genres</p>
            <p>{data.Genre}</p>
          </div>
          <div>
            <p>Languages</p>
            <p>{data.Language}</p>
          </div>
          <div>
            <p>Awards</p>
            <p>{data.Awards}</p>
          </div>
        </article>
      </article>
      <article className={style.section_right}>
        <img src={data.Poster} alt={data?.Title} />
      </article>
    </section>
  );
};
