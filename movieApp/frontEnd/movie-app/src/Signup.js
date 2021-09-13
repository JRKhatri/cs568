export default function SignUp(props){

    return(
        <div>
            <div>Sign Up</div>
           <p> User Id: <input type="text"  name ="userId" onChange ={props.signUpPropertyChanged} value ={props.id}></input></p>
           <p> First Name: <input type="text"  name ="firstName" onChange ={props.signUpPropertyChanged} value ={props.fname}></input></p>
           <p> Last Name: <input type="text"  name ="lastName" onChange ={props.signUpPropertyChanged} value ={props.lname}></input></p>
           <p> User Name <input type="text"  name ="userName" onChange ={props.signUpPropertyChanged} value ={props.uname}></input></p>
           {/* <p> Email: <input type="text"  name ="email" onChange ={props.propertyChanged} value ={props.email}></input></p> */}
           <p> Password: <input type="text"  name ="password" onChange ={props.signUpPropertyChanged} value ={props.password}></input></p>
           {/* <p> Role <input type="text"  name ="role" onChange ={props.propertyChanged} value ={props.role}></input></p> */}
           <p><button onClick ={props.saveUser} >Create Id</button></p>
        </div>
    )
}