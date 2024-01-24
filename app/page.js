import Movie from "./movie"
export default async function Home() {
  const data = await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=c3bec9f29227ad212f71f442cd95bbfe`)
  const res = await data.json()
  
  
  return (
    <main>
      <h1 className = "text-5xl font-bold pb-5 font-mono " >Movie page</h1>
      <div className="grid gap-5 grid-cols-fluid ">
        {res.results.map(movie => (
        <Movie 
        key = {movie.id}
        id = {movie.id}
        title = {movie.title}
        poster_path = {movie.poster_path}
        release_date = {movie.release_date}
        />
        ))} 
      </div>
    </main>
  )
}
