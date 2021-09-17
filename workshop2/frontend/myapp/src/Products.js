import React from 'react';
import axios from 'axios';
import Product from './Product.js';

export default class Products extends React.Component{
    state ={
        products :[]
    }
    componentDidMount(){
        axios.get('/products', { headers :{ Authorization :localStorage.getItem('token')}}).then(response => {
        //axios.get('/products').then(response => { //@without token
            let copy ={...this.state}
            copy.products = response.data;
            console.log(response.data)
            this.setState(copy)
        })
    }
    updateProductClicked = (id) => {
        console.log(id)
        this.props.history.push('/update-product/'+id)
    }

    showDetailClicked =(id) =>{
        this.props.history.push('/productdetail/'+id)
         console.log(this.props.history)
    }

    deletBtnClicked = (id) =>{
        axios.delete('/products/'+id+'/delete',{
            headers: {
                Authorization:localStorage.getItem('token')
            }
        })
        .then(response =>{
            console.log(response.data)
            axios.get('/products', { headers :{ Authorization :localStorage.getItem('token')}}).then(data =>{
                this.setState({products : data.data})
            })
        }
            )

    }
    
    render(){
        let displayAllProducts = this.state.products.map((item, index) => {
            return (
                <Product 
                key = {index}
                name = {item.name}
                price = {item.price}
                showDetailClicked = {() =>{this.showDetailClicked(item.id)}}
                updateProductClicked ={()=>{this.updateProductClicked(item.id)}}
                deleteBtnClicked = {()=> {this.deletBtnClicked(item.id)}}

                // showCommentClicked = {() =>{this.showCommentClicked(item.id)}}
                ></Product>
            
            )

        })
       
        return(<div>
            <div><h2>Products</h2></div>
            {displayAllProducts}
        </div>
           
        )
    }

}