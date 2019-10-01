import React, { Component } from 'react';
import Counter from '../../components/Counter/Counter';

class MainContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return <Counter />;
	}
}

export default MainContainer;
