import React, { Fragment } from 'react';
import './App.scss';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

// 컨테이너 모듈
import Counter from './components/Counter/Counter';
import MainContainer from './container/MainContainer/MainContainer';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { store, history } = this.props;
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<RoutesComponent />
				</ConnectedRouter>
			</Provider>
		);
	}
}

const RoutesComponent = () => (
	<Fragment>
		<Route exact path="/" component={MainContainer} />
	</Fragment>
);

export default hot(module)(App);
