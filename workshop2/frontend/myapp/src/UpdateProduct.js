import React from "react";
import axios from "axios";

export default class UpdateProduct extends React.Component {
    state = {
        product: {
            //id:0,
            name: "",
            price: 0,
            brand: "",
            model: "",
            year: ""
        },
        id : this.props.match.params.id,
        
    }
    componentDidMount() {
        axios.get('/products/' + this.props.match.params.id + '/details', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then(response => {
                let copy = { ...this.state }
                copy.product = response.data
                this.setState(copy)

            })

    }

    propertyChanged = (event) => {
        let copy = { ...this.state.product }
        copy[event.target.name] = event.target.value;
        this.setState({ product: copy })
    }

    applyButtonClicled() {
        console.log(this.state.product)
        axios.put('/products/'+this.state.id+'/update', this.state.product, {
            headers: {
                Authorization: localStorage.getItem('token')
            },
        }).then(response => {
            console.log(response.data)
            
        })

    }
    componentDidUpdate(){
        return true;
    }



    render() {
        console.log(this.state.id)
        return (

            <div>
                <h3>Update Product</h3>
                {/* Id :<input type = "text" value ={this.state.product.id} name = "id" onChange={(event) => {this.propertyChanged(event)}}/> */}
                Name :<input type="text" value={this.state.product.name} name="name" onChange={(event) => { this.propertyChanged(event) }} />
                Price :<input type="text" value={this.state.product.price} name="price" onChange={(event) => { this.propertyChanged(event) }} />
                Brand :<input type="text" value={this.state.product.brand} name="brand" onChange={(event) => { this.propertyChanged(event) }} />
                Model :<input type="text" value={this.state.product.model} name="model" onChange={(event) => { this.propertyChanged(event) }} />
                Year :<input type="text" value={this.state.product.year} name="year" onChange={(event) => { this.propertyChanged(event) }} />
                <button onClick={()=>{this.applyButtonClicled()}} >Apply</button>
            </div>

        )
    }

}