import React from 'react'
import Link from "next/link"
import Image from "next/image"


const Movie = ({title, id, poster_path, release_date}) => {
  const imagePath = "https://image.tmdb.org/t/p/original"
    return (
    <div>
        <h1 className = "text-xl text-red-600 pb-1  pr-2 font-mono">{title}</h1>
        <h2 className = "text-l text-red-600 pb-3 font-mono">{release_date}</h2>
        <Link href = {`/${id}`}>
            <Image className = "hover:scale-125 transition duration-500 cursor-pointer"
                src = {imagePath + poster_path}
                width = {250}
                height = {250}
                alt = {title}
            />
        </Link>
    </div>
  )
}

export default Movie