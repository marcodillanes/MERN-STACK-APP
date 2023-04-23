import { GalleryItem } from './galleryItem'

export function Gallery({data}){

    const movies = data

    return (
        <div>
            {movies.map((movie)=> < GalleryItem movie={movie} key={movie.imdbID} />)}
        </div>
    )
}