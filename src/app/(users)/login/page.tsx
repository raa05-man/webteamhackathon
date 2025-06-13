"use client" ;

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import {info} from './info';
import { useRouter } from 'next/navigation';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignIn() {
  const [numError, setNumError] = React.useState(false);
  const [numErrorMessage, setNumErrorMessage] = React.useState('');
  const [contactError, setContactError] = React.useState(false);
  const [contactErrorMessage, setContactErrorMessage] = React.useState('');
  const [opt , setOpt] = React.useState(false) ;
  const [optMessage , setOptMessage] = React.useState('') ;
  const [open, setOpen] = React.useState(false);

    const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
   
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (numError || contactError) {
      event.preventDefault();
      return;
    }
  };

  const validateInputs = () => {
    const num = document.querySelector('#num') as HTMLInputElement ;
    const contact = document.querySelector('#contact') as HTMLInputElement;
    const val = document.querySelector('#opt') as HTMLInputElement;

  

    let isValid = true;

    if(val.value === 'Default'){
      setOpt(true) ;
      setOptMessage('Please make a choice') ;
      isValid = false ;
    }
    else{
      setOpt(false) ;
       setOptMessage('') ;
    }

    for(let i = 0 ; i<info.length ; i++)
    {
      if((num.value === info[i].flat)&&(contact.value === info[i].contact)){
       setNumError(false);
       setContactError(false);
      setNumErrorMessage('');
      setContactErrorMessage('');
      //  REDIRECT TO RESIDENT HOME PAGE
      router.push('/home') ;
     

     
      break ;
      }
      else if(i == info.length-1){
        setNumError(true) ;
        setNumErrorMessage('Please enter a valid Flat no./Id.');
        setContactError(true);
        setContactErrorMessage('Please enter a valid number.');
         router.replace('/login');
      }
        
    }

    return isValid;
  };

  return (
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' , textDecoration:'underline'}}
          >
            Log in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <br />
            <FormControl variant="outlined" fullWidth>
            <select id='opt'>
              <option value="Default">Choose</option>
              <option value="Resident">Resident</option>
              <option value="Manager">Manager</option>
              <option value="Worker">Worker</option>
            </select>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="text">Flat No./Id</FormLabel>
              <TextField
                error={numError}
                helperText={numErrorMessage}
                id="num"
                type="text"
                name="num"
                placeholder="Enter your Flat No./Id"
                autoFocus
                required
                fullWidth
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="contact">Contact</FormLabel>
              <TextField
                error={contactError}
                helperText={contactErrorMessage}
                name="contact"
                placeholder="Contact No."
                type="text"
                id="contact"
                autoFocus
                required
                fullWidth
                variant="outlined"
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Log In
            </Button>
           
          </Box>
         
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            
            <Typography sx={{ textAlign: 'center' }}>
              Don&apos;t have an Id?{' '}
              <Link
                href="/signup"
                variant="body2"
                sx={{ alignSelf: 'center' }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
  );
}
