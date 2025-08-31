import {AppBar, Typography, Toolbar, Box} from '@mui/material';
function AppNav() {
    return (
        <>
            <Box sx={{ flexGrow: 1, marginBottom: 15}}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                            QUIZZ
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default AppNav;