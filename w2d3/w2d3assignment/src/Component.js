import React from "react";

export default class Component extends React.Component {
    constructor(props) {
        super(props)
        console.log("I am in Component Constructor 1")
    }
    componentDidMount() {
        console.log("I am in Component componentDidMount 3")
    }

    componentDidUpdate() {
        console.log("I am in Component componentDidMount ")
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.state === nextState)
  return false;
}
    render() {
        console.log("I am in Component render 2")
        return (
            <div>
                {this.props.name}
            </div>

        )
    }
}