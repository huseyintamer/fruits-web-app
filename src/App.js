import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
export default class App extends Component {

  constructor(){
    super();

    this.state = {
      Fruits:[],
      searchField:''
    }
  }

  componentDidMount() {
    fetch('http://tropicalfruitandveg.com/api/tfvjsonapi.php?search=all').
    then(res => res.json()).
    then((result) => this.setState({Fruits:(result.results)}) )
 
  }
  render() {
    const { Fruits, searchField } = this.state;
    const FilteredFruits = Fruits.filter(fruit =>
      fruit.tfvname.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <input 
        placeholder='Sarch Fruits'
        type='search'
        onChange={(p)=> this.setState({searchField: p.target.value}, ()=> console.log(this.state.searchField))}
        />
           <CardList fruits={FilteredFruits}/>
      </div>
    )
  }
}


