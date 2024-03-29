import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from './SearchBox'
import 'tachyons'
// import './SearchBox.css'
import './App.css'
 

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots :robots, 
            searchfield: ''
        }
    }

onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
}

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase()
            .includes(this.state.searchfield
            .toLowerCase())
        })
    
        return (
            <div className = 'pa2 tc'>
                <h1 className = 'f1'>My Robots Friends</h1> 
                <SearchBox SearchChange = {this.onSearchChange}/>
                <CardList robots = {filteredRobots }/>
            </div>
            
        )
    }
}
    


export default App