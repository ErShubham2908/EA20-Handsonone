import { Component } from "react";
import ClassCompo from "./ClassCompo";
import FunctionCompo from "./FunctionCompo";

class AppClass extends Component{
    constructor(){
        super();
            this.state = {
                functionClick : false,
                classClick: false
            } 
    }
    // const handleFunc = () => {
        
    // }
    render(){
        return(
            <>
                <button onClick={() => this.setState({functionClick: !this.state.functionClick})}>Function Click</button>
                <button onClick={() => this.setState({classClick: !this.state.classClick})}>class Click</button>
                {/* {this.state.functionClick ? <FunctionCompo /> : null } */}
                {this.state.functionClick && <FunctionCompo /> }
                {this.state.classClick && <ClassCompo /> }
            </>
        )
    }
}

export default AppClass

// export defult AppClass
// Two type of Export 
// 1. Default Export - 
// Only one time in a single file
// 2. Named Export -