import * as React from 'react';
import {useState} from 'react';
// import {useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


export default function Login() {

    const [userData,setData]=useState({username:'',password:''})
    const [errorData, setError]=useState({errorUsername:false, errorPassword:false, errorUserMessage:'Incorrect Username',errorPassMessage:'Incorrect Password'})
    const userHandler=(e)=>{
        setData(prev=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
       
    }

    const onSubmitHandler= async (e)=>{
        e.preventDefault();
        const setting = {
            method:'POST',
            body: JSON.stringify(userData),
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json',

            }
        };
        if(userData.username==='')
            setError(prev=>{
                return {
                    ...prev,
                    errorUserMessage:"Username required *",
                    errorUsername:true
                }
            })
        if(userData.password==='')
            setError(prev=>{
                return {
                    ...prev,
                    errorPassword:true,
                    errorPassMessage:"Password cannot be empty"
                }
            })
        // console.log(import.meta.env.VITE_SOME_KEY)
        const res= await fetch(import.meta.env.VITE_API_URL+"/api/User/login",setting)
        const data= await res.json()
        console.log(data)
        if(data==='Username not found'){
            setError(prev=>{
                return {
                    ...prev,
                    errorUsername:true
                }
            })
        }else if(data ==='Wrong password'){
            setError(prev=>{
                return {
                    ...prev,
                    errorUsername:false,
                    errorPassword:true
                }
            })
        }else{
            setError(prev=>{
                return {
                    ...prev,
                    errorUsername:false,
                    errorPassword:false
                }
            })
        }
    }
    
    return (
        <Grid
            className='login-page'
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
            
        >

            <Grid item xs={3}>

                <Card className='login-card' sx={{ maxWidth: 345,height:300,alignItems:'center' }} align='center' >

                        <CardContent align='center' >
                        <Typography gutterBottom variant="h4" component="div" color="primary" align='center'>
                            Login
                        </Typography>
                        <TextField label="Username" onChange={userHandler} name="username" margin='normal' variant="outlined" error={errorData.errorUsername} helperText={errorData.errorUsername && errorData.errorUserMessage} />

                        <TextField 
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            margin="normal"
                            name="password"
                           onChange={userHandler}
                            autoComplete="current-password"
                            error={errorData.errorPassword}
                            helperText={errorData.errorPassword && errorData.errorPassMessage}
                        />
                        
                         <div align='center' style={{marginTop:'10px'}} >
                            <Button variant="contained" onClick={onSubmitHandler}>Login</Button>
                            {/* <Button variant="contained">Sign In</Button> */}

                        </div>
                       
                        </CardContent>
                       
                        

                        
                        {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography> */}
                    
                   
                </Card>

            </Grid>

        </Grid>
    );
}