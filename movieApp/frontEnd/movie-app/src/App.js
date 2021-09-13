//import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import Movie from './Movie.js'
import CreateMovie from './CreateMovie.js';
import SignUp from './Signup.js';



class App extends  React.Component{

  state = {
    movies :[],
    movieDetails :[],

    movie : {
      movieId:0,
      name :'',
      rating :0,
      genre : '',
      details :[{director : "sorry", release :"sorry", description:"Sorry"}]
    },
    user : {
      userId:0,
      firstName :'',
      lastName :'',
      userName : '',
      address :"Sorry",
      email:'sorry@miu.edu',
      password :'',
      role : 'guest'
    },

    showMovieDetails : false,
  }
//install axios (npm i axios) it is module which will work like fetch
//fetching the data and mounting in browser is done in componentDidMount
  componentDidMount(){
    axios.get('/movies')   //backend REST api url
    //it return promise but unlike fetch we do not do response.json() and .then(originalData)
    //inside response has json object axios does by it by default and put fetched data in property data of response json object
        .then((response) =>{    
          let copyState = {...this.state}   
          copyState.movies = response.data ;    
          this.setState(copyState)
    })
  }

  showMovieDetails =(id)=>{
    console.log(id)
    this.setState({showMovieDetails : true});
    let found = this.state.movieDetails.find(item => item.movieId === id);
    if(!found){
      let findMovie = this.state.movies.find(item => item.movieId === id);
      this.setState({movieDetails : this.state.movieDetails.concat(findMovie)})
}
  }
  propertyChanged =(event) => {
    let copyMovie = {...this.state.movie}
    copyMovie[event.target.name] = event.target.value;
    this.setState({movie : copyMovie})
  }
  signUpPropertyChanged =(event) => {
    let copyUser = {...this.state.user}
    copyUser[event.target.name] = event.target.value;
    this.setState({user : copyUser})
  }
  saveMovie = () => {
    axios.post('/movies',this.state.movie).then(response =>{
      console.log(response.data)
     }).catch(error => console.log(error))
  }
  saveUser = () => {
    axios.post('/users',this.state.user).then(response =>{
      console.log(response.data)
     }).catch(error => console.log(error))
  }

  
  render(){
    let displayAllMovies = this.state.movies.map(item =>{
      return(
        <Movie 
        key = {item.movieId}
        details = "no"
        name={item.name}
        rating = {item.rating}
        genre = {item.genre}
        showMovieDetails = {() => {this.showMovieDetails(item.movieId)}}
        
        ></Movie>
      )
    })

    let displayMovieDetails = null;
    if(this.state.showMovieDetails){
     displayMovieDetails = this.state.movieDetails.map(item =>{
      return(
        <Movie 
        key = {item.movieId}
        name={item.name}
        rating = {item.rating}
        genre = {item.genre}
        director = {item.details[0].director}
        release ={item.details[0].release}
        description = {item.details[0].description}
        ></Movie>
      )
    })
  }

    return(
      <div>
        {displayAllMovies}
        <hr/>
         {this.state.showMovieDetails ? displayMovieDetails :null}
         <hr/>
         <CreateMovie
         id ={this.state.movie.movieId}
         name = {this.state.movie.name}
         rating = {this.state.movie.rating}
         genre = {this.state.movie.genre}
         propertyChanged = {(event)=>{this.propertyChanged(event)}}
         saveMovie = {this.saveMovie}
         ></CreateMovie>
         <hr/>
         <SignUp
         id ={this.state.user.userId}
         fname = {this.state.user.firstName}
         lname = {this.state.user.lastName}
         uname = {this.state.user.userName}
         password = {this.state.user.password}
         signUpPropertyChanged = {(event)=>{this.signUpPropertyChanged(event)}}
         saveUser = {this.saveUser}
         ></SignUp>

      </div>
    )
  
    
}
}

export default App;
