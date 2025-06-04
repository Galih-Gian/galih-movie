import { useEffect, useState } from "react"
import GroupFilter from "../filter/GroupFilter"
import _, { filter } from 'lodash'
const MovieList = ({title,type,id}) => {
const[movies,setMovies]=useState([])
const[filterMovies,setFilterMovies]=useState([])
const[minRating,setMinRating]=useState(0)
const[search, setSearch]=useState("")
const[short, setShort]=useState({
    by:'default',
    order:'asc'
  })
  
  useEffect(()=>{
    fetchMovieList();
  },[])

  useEffect(()=>{
    if(short.by !== 'default'){
      const shorted= _.orderBy(filterMovies,[short.by],[short.order])
      setFilterMovies(shorted)
    }
  },[short])
  useEffect(()=>{
    if(search !== ""){
      const filterSearch= movies.filter((movie)=>{
        return movie.original_title.toLowerCase().includes(search.toLowerCase())
      })
      setFilterMovies(filterSearch)
    }else{
      setFilterMovies(movies)
    }
  },[search])
    const fetchMovieList= async()=>{
    const response= await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=0450d2078758e2a5b9c9875667a57cf6`)
    const data= await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  }
   const handleFilter= (rate)=>{
    if(rate == minRating){
      setMinRating(0)
      setFilterMovies(movies)
    }else{
      setMinRating(rate)
      const filtered= movies.filter((movie)=>movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  }
  const handleShort= (e)=>{
    const {name, value}= e.target;
    setShort((prev)=>({...prev, [name]:value}))
    console.log(short)
  }
  const searchFilter= (e)=>{
    setSearch(e.target.value)
    console.log(search)
  }
  
  return (
       <div>
      {/* top header awal */}
     <div className="mt-20 pb-5">
        <div className="flex justify-between px-2 border-b-2 border-white pb-5">
        <div className="flex justify-center items-center gap-3">
          <GroupFilter minRating={minRating} ratings={[8,7,6]} onRateFilter={handleFilter} />

          <select name="by" id="" className="text-lg p-2  text-slate-200 bg-slate-600 rounded-md" onChange={handleShort} value={short.by}>
            <option value="default">Short By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select name="order" id=""className="text-lg p-2 text-slate-200 bg-slate-600 rounded-md" onChange={handleShort} value={short.order}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
            
          </select>
        </div>
        <div className="">
        <div className="flex justify-end px-2 gap-3 items-center">
          <input type="text" name="cari" className="bg-slate-400 py-2 px-4 rounded-lg font-medium text-lg" autoComplete="off" placeholder="cari film favorit anda" onChange={searchFilter}  />
        </div>
      </div>
        </div>
      </div>
      {/* top header akhir */}

      {/* konten awal */}
    <div className="mt-22 mb-5">
    <h1 id={id} className="text-6xl mt-20 mb-10">{title}</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
      {filterMovies.map((movie)=>(
            <div key={movie.id}>
            <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="blank">
            <div className="bg-slate-600 p-2 rounded-md hover:scale-105 shadow-lg transition-all duration-500 ease-in w-[200px] cursor-pointer">
            <div className="relative">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="hero" className="w-100"data-aos="fade-up"
              />
              <div className="absolute bottom-0 px-2 py-2 flex flex-col gap-y-1 bg-black opacity-0 w-full h-full hover:opacity-90 transition-all duration-500 ease-in-out">
              <h1 className="font-medium text-lg">{movie.original_title}</h1>
                <p className="font-medium">Date :<span className="ml-1">{movie.release_date} |</span><span className="ml-1">{movie.original_language}</span></p>
                <div className="font-medium">Genre : {movie.genre_ids}</div>
                <div className="font-medium">Popularity : {movie.popularity} <span className="text-orange-600 ml-1"><i className="fa-solid fa-fire-flame-curved"></i></span></div>
                <div className="font-medium">Rating : {movie.vote_average} <span className="ml-1 text-yellow-400"><i className="fa-solid fa-star"></i></span></div>
                <p className="text-xs text-justify">{movie.overview.slice(0,100)+"...."}</p>
              </div>
            </div>
          </div>
            </a>
            </div>
          ))}
    </div>
   </div>
      {/* konten akhir */}
        
    </div>
  )
}

export default MovieList




















