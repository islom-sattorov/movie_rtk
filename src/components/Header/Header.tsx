import { Link } from "react-router-dom";
import user from "../../images/user.png";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <section className={style.header}>
      <Link to="/">
        <h2 className={style.header_logo}>Movie App</h2>
      </Link>
      <article className={style.header_image}>
        <img src={user} alt="user" />
      </article>
    </section>
  );
};
