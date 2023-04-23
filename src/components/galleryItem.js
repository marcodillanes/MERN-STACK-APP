export function GalleryItem({movie}){
    return(
        <div>
            <img src={movie.Poster} alt="poster of movie"/>
            <h1>
                {movie.Title}
            </h1>
            <h2>
                {movie.Year}
            </h2>
            <h3>
                {movie.Genre}
            </h3>
        </div>
    )
}