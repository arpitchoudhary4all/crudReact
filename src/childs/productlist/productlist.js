import React from 'react';
import {ListHeading} from './listheading'
import {Product} from './product'
import '../../App.css';
export class ProductList extends React.Component{
    mycall(){
        this.props.addCart();
    }
    render(){
        return(
            <div className="bordered">
                <ListHeading/> 
                {this.props.printfn.map(obj=>{
                    return <Product add={this.mycall.bind(this)} key={obj.id} mobile={obj}/>
                })}      
            </div>
        );
    }
}