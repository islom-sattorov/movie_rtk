import { Link } from "react-router-dom";
import style from "./MovieCard.module.css";

export const MovieCard = ({ data }: any) => {
  return (
    <section className={style.card_item}>
      <Link to={`/movie/${data.imdbID}`}>
        <article className={style.card_inner}>
          <article className={style.card_top}>
            <img src={data.Poster} alt={data.Title} />
          </article>
          <article className={style.card_bottom}>
            <article className={style.card_info}>
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </article>
          </article>
        </article>
      </Link>
    </section>
  );
};
