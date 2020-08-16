import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//context:
import {AuthProvider} from './Context/AuthContext';

//routes:
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import Home from './Routes/Home/Home';
import SingUp from './Routes/SignUp/SignUp';
import LogIn from './Routes/LogIn/LogIn';

const App = () => {
	return (
		<AuthProvider>
			<Router>
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
			</Router>
		</AuthProvider>  
	);
};

export default App;