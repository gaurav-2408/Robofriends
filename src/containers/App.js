import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots.js';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';

class App extends Component
{
	constructor()
	{
		super();
		this.state = {
			robots: [], 
			searchfield:''
		}
	}


	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
		})
		.then(users=>{
			this.setState({robots:users});
		});
		
	}

	onSearch = (event)=>
	{
		this.setState({ searchfield: event.target.value});
	}
	render()
	{
		
		const filteredRobots=this.state.robots.filter(robot=>{
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		});
		if(this.state.robots.length===0)
		{
			return <h1>loading</h1>
		}
		else
		{
			return (
			<div className='tc'>
				<h1>Robofriends</h1>
				<Searchbox searchChange={this.onSearch}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
	
			);
		}

	}
	 
}
export default App;