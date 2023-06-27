import { Box, Grid } from "@mui/material"
import { useState } from "react"



export const Home = ({nombre,apellido}) => {





return (
    <Box>
        <Grid container >
            <Grid item>
            <h2>{nombre}</h2>
            <h2>{apellido}</h2>
            </Grid>
        </Grid>
    </Box>
)
}

