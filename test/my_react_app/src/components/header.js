import * as React from 'react';
import { AppBar, Box, Paper, Toolbar, Typography } from '@mui/material';


export default function ButtonAppBar(props) {
    return (
        <Box>
            <AppBar position="static" style={{ backgroundColor: "#b28704", height: "150px",width:"100%", justifyContent: "center" }}>
                <Toolbar>
                    <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} style={{ fontFamily: "cursive" }}>
                        INBAR
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
