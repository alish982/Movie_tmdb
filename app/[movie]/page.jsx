import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { commnets } from './comment'
import CommentPage from './index'

const MovieDetail = async ({ params }) => {
    const { movie } = params
    const imagePath = "https://image.tmdb.org/t/p/original"
    const data = await fetch (`https://api.themoviedb.org/3/movie/${movie}?api_key=c3bec9f29227ad212f71f442cd95bbfe`)
    const res = await data.json()
    console.log(res)

  return (
    <div>
        <h2 className = "text-5xl font-bold pb-5 font-mono">{res.title}</h2>
        <h2 className = "text-xl text-red-600 font-mono ">{res.release_date}</h2>
        <h2 className = "text-xl text-red-600 font-mono">Runtime: {res.runtime} minutes</h2>
        <h2 className = "text-xl text-red-600 font-mono">Imdb Rating: {Math.floor(res.vote_average)}</h2>
        <h2 className = "text-xl text-red-600 font-mono"> Genre : {res.genres[0].name}</h2>
        <h2 className = "text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">{res.status}</h2><br></br>
        <CommentPage />

        <Image 
        className = "my-12 w-full rounded"
        src = {imagePath + res.backdrop_path}
        width = {600}
        height = {600}
        priority
        />
        <div className = " font-mono-medium">
        <p>
          {res.overview}
        </p>
        </div>
        <Link className = "text-sm bg-purple-600 inline-block my-2 py-2 px-4 rounded-md" href = "/">Back to home page</Link>
    </div>
  )
}

export default MovieDetail