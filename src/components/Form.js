import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { mount, login } from '../redux/user'

/* @jsx jsx Styles */
import { jsx, css } from '@emotion/core';
import {
	Grid,
	TextField,
	Button,
} from '@material-ui/core';

const gridCss = (theme) => css`
	${theme.card}
	margin-top: ${ theme.margins[6] };
	text-align: center;
	> div:not(:last-child) {
		margin-bottom: ${ theme.margins[4] };
	}
	button {
		margin: 0 ${ theme.margins[2] };
	}
`

export default function Form(props) {

    const defaults = props.fields.map(({name}) => ({ [name]: '' })).reduce((a, c) => ({ ...a, ...c }), {})
	const [values, setValues] = useState(defaults)

	return (
		<Grid container justify="center">
			<Grid item xs={12} style={{maxWidth: 300}}>
				<Grid container justify="center" css={gridCss}>
                    {
                        props.fields.map(({ type, name, placeholder }) => 
                            <Grid key={name} item xs={12}>
                                <TextField 
                                    fullWidth
                                    type={type}
                                    placeholder={placeholder}
                                    value={values[name]}
                                    onChange={(e) => setValues({ ...values, [name]: e.target.value })}
                                />
                            </Grid>
                        )
                    }
                    <Grid item xs={12}>
                        {
                            props.buttons.map(({ variant, action, label, onEnter }) => 
                                <Button
                                    key={label}
                                    variant={variant || "outlined"}
                                    onClick={() => action(values)}
                                    onKeyDown={({ key }) => {
                                        if (onEnter && key === 'Enter') onEnter(values)
                                    }}
                                >
                                    {label}
                                </Button>
                            )
                        }
                    </Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}