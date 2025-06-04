
import MovieList from "./movie-list/MovieList"
import NavbarComponent from "./navbar/NavbarComponent"

const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <MovieList id="popular" title="Popular" type="popular"/>
      <MovieList id="upcoming" title="Up Coming" type="upcoming"/>
      <MovieList id="top_rated" title="Top rated" type="top_rated"/>
    </div>
  )
}

export default App


