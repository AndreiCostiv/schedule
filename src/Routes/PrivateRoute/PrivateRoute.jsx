import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom';

//context:
import {AuthContext} from '../../Context/AuthContext';

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
			{...rest}
			render={routeProps =>
				currentUser ? (
					<RouteComponent {...routeProps} />
				) : (
					<Redirect to={'/log-in'} />
				)
			}
		/>
    );
};

export default PrivateRoute;
