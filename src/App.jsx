import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails.jsx";
import { LandingPage } from "./pages/LandingPage";

  export function App(){
    return (
    <Router>
       
        <header>
            <Link to="/">
               <h1 className={styles.title}>Movies</h1>
            </Link>
            <br/>
            <Link to="/movie">Movie</Link>
        </header>

        <main>
            <Routes>
                <Route exact path="/movie" element={< MovieDetails/>}/>
                <Route path="/" element={<LandingPage />}/>
            </Routes>
        </main>

    </Router>
    );
}