
export default function Movie(props){
    if(props.details === "no"){

    return (
        <div>
            <p>Movie Name : {props.name}</p>
            <p>Rating :{props.rating}</p>
            <p>Genre : {props.genre}</p>
            <button onClick = {props.showMovieDetails}>Details</button>
           
            </div>
    )
    } else {
        return(
        <div>
            <p>Movie Name : {props.name}</p>
            <p>Rating :{props.rating}</p>
            <p>Genre : {props.genre}</p>
            <p>Director :{props.description}</p>
            <p>Release Year : {props.release}</p>
            <p> Description :{props.description}</p>
            <button onClick = {props.removeMovieDetais}>Remove Details</button>
            
        </div>
        )
        }
    
}