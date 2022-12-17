import { MovieList } from "../../components/MovieList/MovieList";
import style from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <article className={style.banner_img}>
        <MovieList />
      </article>
    </>
  );
};
