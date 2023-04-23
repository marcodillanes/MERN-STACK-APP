export function GenreList(props){
    let genres = ['action', 'adventure', 'romance', 'horror', 'comedy', 'thriller', 'suspense', 'mystery', 'drama', 'western', 'science fiction', 'romanctic comedy']

    return(
        <div>
            {genres.map((genre) => {return(<h1>
                {genre}
            </h1>)})}
        </div>
    )
}