import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import { Search } from './components/search/search.component';
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

 handle = (p) => {
this.setState({searchField: p.target.value}, ()=> console.log(this.state.searchField))
};


  render() {

    const { Fruits, searchField } = this.state;

    const FilteredFruits = Fruits.filter(fruit =>
      fruit.tfvname.toLowerCase().includes(searchField.toLowerCase()))
    

    return (
      <div className="App">
        <Search
        type={'search'}   
        placeholder={'Search Fruits'}     
        handleChange={this.handle} />
        <CardList fruits={FilteredFruits}/>
      </div>
    )
  }
}


