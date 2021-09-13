
export default function CreateMovie(props){

    return(
        <div>
           <p> MovieId: <input type="text"  name ="movieId" onChange ={props.propertyChanged} value ={props.id}></input></p>
           <p> Name: <input type="text"  name ="name" onChange ={props.propertyChanged} value ={props.name}></input></p>
           <p> Rating: <input type="text"  name ="rating" onChange ={props.propertyChanged} value ={props.rating}></input></p>
           <p> Genre: <input type="text"  name ="genre" onChange ={props.propertyChanged} value ={props.genre}></input></p>
           <p><button onClick ={props.saveMovie} >Save Movie</button></p>
        </div>
    )
}