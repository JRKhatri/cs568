import React from "react"
import axios from "axios";


export default class CreateProduct extends React.Component{
   
    state = {
        product : {
            id:null,
            name : "",
            price :null,
            brand :"",
            model: "",
            year:"",
            review:[{id:0,title:"", description:''}]
        },

        

    }
    propertyChanged(event){
        let copy = {...this.state.product};
        copy[event.target.name]= event.target.value;
        this.setState({product : copy})
    }

    createProductBtnClicked(){
        axios.post('/products', this.state.product,{
            headers :{
                Authorization :localStorage.getItem('token')
            }
        })
        .then(response =>{
            console.log(response.data)
        })


    }


    render(){
    return(
        <div>
                <h3>Create Product</h3>
                Id :<input type = "number" value ={this.state.product.id} name = "id" onChange={(event) => {this.propertyChanged(event)}}/>
                Name :<input type="text" value={this.state.product.name} name="name" onChange={(event) => { this.propertyChanged(event) }} />
                Price :<input type="number" value={this.state.product.price} name="price" onChange={(event) => { this.propertyChanged(event) }} />
                Brand :<input type="text" value={this.state.product.brand} name="brand" onChange={(event) => { this.propertyChanged(event) }} />
                Model :<input type="text" value={this.state.product.model} name="model" onChange={(event) => { this.propertyChanged(event) }} />
                Year :<input type="text" value={this.state.product.year} name="year" onChange={(event) => { this.propertyChanged(event) }} />
                <button onClick={()=>{this.createProductBtnClicked()}} >Create</button>
            </div>

    )

}
}