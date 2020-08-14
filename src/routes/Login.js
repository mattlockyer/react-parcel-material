import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { mount, login } from '../redux/user'

/* @jsx jsx Styles */
import { jsx, css } from '@emotion/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const buttonCSS = (theme) => css`
	margin-left: ${theme.margins[4]};
	background-color: #FF00DD;
	&:hover {
		background-color: #DD00BB;
	}
`

export default function Login(props) {

	const { appState: { loading }, userState } = props

	const [name, setName] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		console.log('mount')
		dispatch(mount(true))
	}, [])

	if (userState.resuming) {
		return <div>
			<h1>Resuming {userState.name}</h1>
		</div>
	}

	if (loading) return null

	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
		>
			<TextField value={name} onChange={(e) => setName(e.target.value)} />
			<Button css={buttonCSS} onClick={() => dispatch(login(name))}>Sign In</Button>
		</Grid>
	)
}