import React from "react";
import { signInGoogle } from "../../../../core/services/backend/google-sign-in";
import useAuthState from "../../../../state/hooks/useAuthState";
import { useNavigate } from "react-router-dom";
import useAccountState from "../../../../state/hooks/useAccountState";
import { accountService } from "../../../../core/services/AccountService";
import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

const GoogleSignInButton = () => {

  const { setToken } = useAuthState()
  const { setAccount } = useAccountState()
  const navigate = useNavigate();

  const handleSignIn = async () => {
    // Aquí puedes agregar la lógica necesaria para iniciar sesión con Google
    console.log("Iniciando sesión con Google...");
    // const result = await signInGoogle()
    // const email = result.user.email
    // const token = await result.user.getIdToken()
    const email = 'benjamin.sepulveda@witi.cl'
    const token = 'some-wea-key'
    let account = await accountService.findByEmail(email)
    if (!account) {
      account = {
        id: email,
        email: email,
        plan: 'free'
      }
      await accountService.createAccount(account)
    }

    setAccount(account)
    setToken(token)
    navigate("/home/dashboard")
    
  };

  return (
    <Button
      onClick={handleSignIn}
      type="submit"
      fullWidth
      variant="contained"
      color="secondary"
      endIcon={<GoogleIcon/>}
    >
    Iniciar sesión con Google
    </Button>
  );
};

export default GoogleSignInButton;
