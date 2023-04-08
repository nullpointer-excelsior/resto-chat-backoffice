import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import Copyright from "../../shared/components/Copyright";
import GoogleSignInButton from "./components/GoogleSignInButton";


const styles = {
     image: {
        backgroundImage: 'url(../../images/login-bg.jpg)',
        backgroundRepeat: 'no-repeat',
        // backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
     }
}

export default function LoginPage() {


    return (
        <Grid container component="main" sx={{
            height: '100vh',
        }}>
            <CssBaseline />
            {/* Bacground image */}
            <Grid item xs={false} sm={3} md={8} sx={styles.image} />
            {/* Login panel */}
            <Grid sx={{ 'padding': 3}} item xs={12} sm={9} md={4} component={Paper} elevation={6} square>
                
                <div>

                    <Box display="flex" flexDirection="column" alignItems="center" sx={{ marginY: 8}}>
                        <Avatar src="../../images/bender-img-2.jpeg" sx={{  width: 200, height: 200, marginY: 4  }}>
                            {/* <LockOutlinedIcon /> */}
                        </Avatar>
                        <Typography component="h1" variant="h5" >
                            Resto chat Login
                        </Typography>
                    </Box>
                    

                    <Box mt={5}>
                        <GoogleSignInButton></GoogleSignInButton>
                    </Box>

                    <Box mt={5}>
                        <Copyright />
                    </Box>
                    
                </div>
            </Grid>
        </Grid>


    )
}


function LoginForm() {
    return (
        <form noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mc-email"
                label="Email Address"
                name="mc-email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="mc-password"
                label="Password"
                type="password"
                id="mc-password"
            />
            
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />

            <Button type="submit" fullWidth variant="contained" color="primary">
                Sign In
            </Button>
            
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
            </Grid>
        </form>
    )
}