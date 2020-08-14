import React from 'react'
import { useHistory } from "react-router-dom";

export default function Home() {

	const history = useHistory()

	return (
		<div>
			<h1>About</h1>
			<button onClick={() => history.push('/')}>Home</button>
			<br/>
			<img src="https://placedog.net/500" />
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
	)
}