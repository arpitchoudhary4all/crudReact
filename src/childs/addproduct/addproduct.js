import React from 'react';
import {AddHeading} from './addheading'
import {Form} from './form'
import {Count} from './count'
import '../../App.css';
export class AddProduct extends React.Component{
    constructor(){
        super();
        this.counter=0;
        this.state={counter:0};
    }
    caller(){
        this.props.myAjax();
        this.counter+=4;
        this.setState({counter:this.counter});    
    }
    render(){
        return(
            <div className="bordered">
                <AddHeading/>
                <Form makeCall={this.caller.bind(this)} pass={(obj)=>{
                    this.props.passed(obj);
                    this.counter++;
                    this.setState({counter:this.counter});
                }}/>
                <h6>{this.props.update}</h6>
                <Count countfn={this.state.counter}/>
            </div>       
        );
    }
}