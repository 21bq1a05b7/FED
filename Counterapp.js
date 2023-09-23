import React,{Component} from "react";
class Counterapp extends Component
{
    state={
        count:0,
    };
    incrementHandler=()=>{
        this.setState({count:this.state.count+1});
    };

    decrementHandler=()=>{
        this.setState({count:this.state.count-1});
        };
        render(){
            return(
                <div>
                    <button type="button" onClick={this.incrementHandler}>+</button>
                    &nbsp;&nbsp;
                    {this.state.count}
                    &nbsp;&nbsp;
                    <button type="button" onClick={this.decrementHandler}>-</button>
                </div> 
            );
        }
    }
export default Counterapp;