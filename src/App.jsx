import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Context:
import {AuthProvider} from './Context/AuthContext';

//Styles:
import './App.sass';

//Routes:
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import Home from './Routes/Home/Home';
import SingUp from './Routes/Auth/SignUp';
import LogIn from './Routes/Auth/LogIn';

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<section className="App">
					<Switch>
						<Route 
							path = '/sign-up' 
							component = {SingUp}
						/>
						
						<Route
							path='/log-in'
							component = {LogIn}
						/>

						<PrivateRoute
							exact path = '/'
							component = {Home}
						/>
					</Switch>
				</section>		
			</Router>
		</AuthProvider>  
	);
};

export default App;