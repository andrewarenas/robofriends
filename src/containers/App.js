import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListaTarjeta from '../components/ListaTarjeta';
import CajaBusqueda from '../components/CajaBusqueda';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'; 

import { setCajaBusqueda, requestRobots } from '../actions'; 

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setCajaBusqueda(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}


	render() {
		const { searchField, onSearchChange,robots, isPending } = this.props; 
		const searchRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
			<h1>Loading...</h1> :
			(
				<div className="tc">
					<h1 className="f1">RoboFriends</h1>
					<CajaBusqueda searchChange = { onSearchChange } />
					<Scroll>
						<ErrorBoundry>
							<ListaTarjeta robots={searchRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);