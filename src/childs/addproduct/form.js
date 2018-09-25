import React, {Component}  from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
export class Form extends Component{
      addToObject(id,name,price,url){
          var  obj={id:'',name:'',price:'',url:''};
          obj.id = id;
          obj.name = name;
          obj.price = price;
          obj.url = url;
          this.props.pass(obj);
      }
      getValues(){
          var id = this.refs.id.value;
          var name = this.refs.name.value
          var price = this.refs.price.value
          var url = this.refs.url.value          
          this.addToObject(id,name,price,url);
        }
        call(){
            this.props.makeCall();
            this.refs.btn.setAttribute("disabled", "disabled");
        }
    render(){
        return(
            <div>
                <label>Product ID:-</label>
                <input ref="id" type="text" placeholder="Enter produt Id"/>
                <br/>
                <label>Product Name:-</label>
                <input ref="name" type="text" placeholder="Enter product Name"/>
                <br/>
                <label>Product Price:-</label>
                <input ref="price" type="text" placeholder="Enter product price"/>
                <br/>
                <label>Product URL:-</label>
                <input ref="url" type="text" placeholder="Enter product URL"/>
                <br/>
                <button onClick={this.getValues.bind(this)}>ADD PRODUCT</button>
                <button ref="btn" onClick={this.call.bind(this)}>LOAD RECORDS</button>
            </div>
        )
    }
}