import React, { Component } from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import robots from '../robots'
import Scroll from '../components/Scroll'
class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
        .then(robots => {
            this.setState({robots: robots})
        })
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    render(){
        const {robots, searchField } = this.state;
        const onSearchChange = this.onSearchChange;
        const filteredRobots = robots.filter(
            robots => {
            return (
                robots.name
                .toLowerCase()
                .includes
                (searchField.toLowerCase())
            )
        })
        return !robots.length ?
        <h1 className="title">Loading</h1> :
         (
            <div>
                <SearchBox 
                    searchChange={onSearchChange} 
                />
                <Scroll>
                    <CardList 
                        robots={filteredRobots}
                    />
                </Scroll>
            </div>
        )
}
}

export default App;