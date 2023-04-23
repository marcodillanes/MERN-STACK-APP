export function GenreList(props){
    let genres = ['action', 'adventure', 'romance', 'horror', 'comedy', 'thriller', 'suspense', 'mystery', 'drama', 'western', 'science fiction', 'romantic comedy']

    return(
        <div style={{'display':'inline-flex'}}>
            <ul>
            {genres.map((genre) => {return(<li style={{'list-style':'none', 'fontSize':'30px'}}>
                {genre}
            </li>)})}
            </ul>
        </div>
    )
}