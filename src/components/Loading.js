import React from 'react'
import {
	Grid,
	CircularProgress,
} from '@material-ui/core';

export default function Loading () {

    return (
        <Grid container justify="center" style={{paddingTop: 32}}>
            <CircularProgress />
        </Grid>
    )
}
