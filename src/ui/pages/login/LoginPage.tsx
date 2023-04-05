import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import Copyright from "../../shared/components/Copyright";
import GoogleSignInButton from "./components/GoogleSignInButton";


// const useStyles = makeStyles((theme: any) => ({
//     root: {
//         height: '100vh',
//     },
//     image: {
//         backgroundImage: 'url(../../images/login-bg.jpg)',
//         backgroundRepeat: 'no-repeat',
//         backgroundColor:
//             theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//     },
//     paper: {
//         margin: theme.spacing(8, 4),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     signin: {
//         margin: theme.spacing(3, 0, 2),
//     },
//     signinGoogle: {
//         margin: theme.spacing(0, 0, 2),
//     },
// }));


const styles = {
     image: {
        backgroundImage: 'url(../../images/login-bg.jpg)',
        backgroundRepeat: 'no-repeat',
        // backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
     }
}

function LoginPage() {


    return (
        <Grid container component="main" sx={{
            height: '100vh',
        }}>
            <CssBaseline />
            <Grid item xs={false} sm={3} md={8} sx={styles.image} />
            <Grid sx={{ 'padding': 3}} item xs={12} sm={9} md={4} component={Paper} elevation={6} square>
                <div >
                    <Avatar>
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Menu Caller Sign in
                    </Typography>
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
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            
                        >
                            Sign In
                        </Button>
                        {/* <GoogleLoginButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.signinGoogle}
                        /> */}
                        
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                    <GoogleSignInButton></GoogleSignInButton>
                </div>
            </Grid>
        </Grid>


    )
}

export default LoginPage