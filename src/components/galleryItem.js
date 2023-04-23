export function GalleryItem({movie}){
    return(
        <div>
            <h1>
                {movie.Title}
            </h1>
            <h2>
                {movie.Year}
            </h2>
        </div>
    )
}