import { Button } from "@mui/joy";
import Container from "@mui/joy/Container";
import Typography from "@mui/joy/Typography";
import Input from "@mui/joy/Input";
import Box from "@mui/joy/Box";
import type { NextPage } from "next";
import Image from "next/image";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { useState } from "react";
import { supabase } from "common/utils/supabaseClient"

const SignInPage: NextPage = () => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signIn({ email, password })
      if (error) throw error
      alert('Done')
    } catch (error: any) {
      console.error(error.error_description || error.message)
    }
  }

  return (
    <Container
      component="main"
      sx={{ my: 12, textAlign: "center" }}
      maxWidth="sm"
    >
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <Image
          src="/diver_down_flag.svg"
          style={{ borderRadius: 4 }}
          width={54}
          height={36}
          layout="fixed"
          alt="Diver down flag"
        />
        <Typography level="h2" component="div">
          Diveholic
        </Typography>
      </Box>

      <Typography textColor="neutral.400" level="h6" component="p" mt={2}>
        Dive log built for the modern age
      </Typography>

      <Box component="form" display="flex" flexDirection="column" mt={4} gap={2}>
        <Input variant="soft" size="lg" placeholder="Email" type="email" onChange={handleEmailChange} value={email}></Input>
        <Input variant="soft" size="lg" placeholder="Password" type="password" onChange={handlePasswordChange} value={password}></Input>
      </Box>

      <Button
        variant="soft"
        size="lg"
        sx={{ mt: 4, width: "100%" }}
        startIcon={<LoginRoundedIcon />}
        onClick={(e) => {
          e.preventDefault()
          handleLogin(email, password)
        }}
      >
        Sign in
      </Button>

      <Typography mt={8}>Don't have an account?</Typography>

      <Button variant="plain" size="sm" sx={{ mt: 2 }}>
        Sign up
      </Button>
    </Container >
  );
};

export default SignInPage;
