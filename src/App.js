import React, { Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import {
	BrowserRouter as Router,
	Route,
  } from "react-router-dom"
import { appState } from './redux/app'
import { userState } from './redux/user'
//components
import Dialog from './components/Dialog'
//routes
const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./routes/About'))
const Login = lazy(() => import('./routes/Login'))
//loading component
import Loading from '@material-ui/core/CircularProgress';
//bring in both states here
//can also use connect in route components when data is specific to those routes
export default connect(
	(state) => ({
		appState: appState(state),
		userState: userState(state),
	})
)(function App(props) {

	const {
		appState: { dialog, loading },
		userState: { isLoggedIn }
	} = props

	return (
		<>
			{ loading && <Loading />}
			<Dialog {...dialog} />
			{
				isLoggedIn ?
				<Suspense fallback={<Loading />}>
					<Router>
						<Route exact path="/" >
							<Home {...props} path="/" />
						</Route>
						<Route path="/about" >
							<About {...props} path="/about" />
						</Route>
						<Route path="/login" >
							<Login {...props} path="/login" />
						</Route>
					</Router>
				</Suspense>
				:
				<Suspense fallback={<Loading />}>
					<Login {...props} path="/login" />
				</Suspense>
			}
		</>
	)
})