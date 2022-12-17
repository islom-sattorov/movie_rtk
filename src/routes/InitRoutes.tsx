import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Home } from "../pages/Home/Home";
import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
import { NotFound } from "../pages/NotFound/NotFound";
import styles from "./InitRoutes.module.css";

export const InitRoutes = () => {
  return (
    <section className={styles.routes}>
      <Header />
      <article className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </article>
      <Footer />
    </section>
  );
};
