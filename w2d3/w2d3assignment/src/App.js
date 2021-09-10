
import React from 'react'
import Component from './Component.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("I am in App constructor room");
    
  }
  state = {
    products : [{subject: "React Programming"}],
    product : {name :"React"}

  }
  nameChanged = (event) => {
    let copy = {...this.state.product}
    copy.name = event.target.value
    this.setState({product : copy})
  }

  componentDidMount(){
    console.log("I am in App componentDidMount")
  }

  componentDidUpdate(){
    console.log("I am in App componentDidUpdate ")
}
componentWillUnmount(){
  document.removeEventTarget('onChange', this.nameChanged)
}

  render() {
    console.log("I am in render room")
    return (
      <div className="App">
        <div>HI I am testing it</div>
        <Component   name = {this.state.products[0].subject}>
         
        </Component>
       <input type = "text" value= {this.state.product.name} onChange = {(event) => {this.nameChanged(event)}}></input>
       
      </div>
    )
  }
}

export default App;

