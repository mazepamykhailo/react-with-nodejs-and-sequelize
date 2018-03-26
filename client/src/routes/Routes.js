import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/home/HomePage';
import SignInPage from '../components/auth/SignInPage';
import SignUpPage from '../components/auth/SignUpPage';
import BandsListPage from '../components/bands/BandsListPage';
import BandFormPage from '../components/bands/BandFormPage';
import AlbumsListPage from '../components/bands/AlbumsListPage';
//import AlbumsFormPage from '../components/albums/AlbumsPage';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/bands" component={BandsListPage} />
				<Route path="/bands/new" component={BandFormPage} />
				<Route exact path="/band/:id" component={BandFormPage} />
				<Route path="/band/:id/albums/" component={AlbumsListPage} />
				<Route path="/sign-in" component={SignInPage} />
				<Route path="/sign-up" component={SignUpPage} />
			</Switch>
		)
	}
}

export default Routes;
