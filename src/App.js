import React, { Component } from 'react';
import {AddProduct} from './childs/addproduct/addproduct' 
import {ProductList} from './childs/productlist/productlist'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor(){
    super();
    this.x=0;
    this.arr=[];
    this.state={items:[],x:0}
    this.title='REACT CRUD APPLICATION'
  }
  doAjax(){
    const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
    fetch(url).then(response=>{
      response.json().then(data=>{
          data.mobiles.forEach(obj=>{
          this.arr.push(obj)
          this.x++;
          this.setState(...this.state,{items:this.arr,x:this.x});
          console.log(this.state.x);
        })
      }).catch(err=>{
        console.log("Error is",err);
      })
    })
  }
  myAdd(){
    console.log("lg gyi call");
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="center bordered">{this.title}</h2>
          </div>
        </div>
         <div className="row">
          <div className="col-sm-12">
            <AddProduct update={this.state.x} myAjax={this.doAjax.bind(this)} passed={(obj)=>{
              this.arr.push(obj)
              this.setState(...this.state,{items:this.arr});
            }}/>
          </div>
          <div className="col-sm-12">
            <ProductList addCart={this.myAdd.bind(this)} printfn={this.state.items}/>
          </div>
         </div>
      </div>
    );
  }
}

export default App;
