import { Box, Button, Flex,Image, Input, Spacer, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import  axios  from "axios"
import { useContext } from "react"
import { AppContext } from "../Context/AppContextProvider"
import { loginFailure, loginRequest, loginSuccess } from "../Reducer/actionCreators"
import styles from './Login.module.css';


function Login(){
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const navigate = useNavigate(); 
    const {state,dispatch} = useContext(AppContext)

    function LoginAuth(e){
        e.preventDefault()
        dispatch(loginRequest());
       
        axios
        .post('https://reqres.in/api/login',{
            "email": Email,
            "password": Password
        })
        .then((res)=>{
            dispatch(loginSuccess(res.data.token)
            )
           navigate('/')
        })
        .catch((err)=>{
            dispatch(loginFailure())
        })
          console.log(state)
    }

    
    return (
        <Box bgColor={'#EAEAF4'} h={'auto'} p={'10px'}>
            <Flex width={'90%'}
              m={'auto'}
              justifyContent={'space-between'}
              alignItems={'center'}
              textAlign={'center'}
              alignContent={'center'}
              
              >
               
                    <Flex >
                        <Link to={'/'}>
                        <img 
                        width={"100px"} 
                        src="https://ml.globenewswire.com/Resource/Download/921260e3-aadd-4bad-82cc-90613f2b1e99?size=2" 
                        alt="Logo" />
                        </Link>
                 
                    </Flex>    
                <Flex 
                    justifyContent={'end'}
                   >
                    <Flex  fontSize={'15px'}>
                    <p style={{'color':'gray'}}><i>Don't have an account?</i></p>
                    </Flex>
                    <Flex ml={'5px'} fontSize={'15px'}>
                    <Link to={'/signup'}><h1>Sign Up → </h1></Link>
                    </Flex>
                </Flex>
        </Flex>
            <Flex justifyContent={'space-between'} borderRadius={'15px'} h={'auto'} w={'70%'} bgColor={'white'} p={'50px'} m={'20px auto'}>
                <Box w={'50%'} textAlign="left">
                <Image w={'50px'} h={'50px'} p={'5px'} borderRadius={'20px'} src="https://d2jxbtsa1l6d79.cloudfront.net/static/app-static-assets/core/core-2.2.9/images/brand/cn-logo-white.svg" bgColor={'#6200EA'} />
                <Stack fontSize={'12px'} letterSpacing={'3px'} mt={'10px'} color={'gray.600'}><p>ANNOUNCING SUMMER 2022 PRODUCT RELEASE</p></Stack>
                <Stack mt={'5px'} lineHeight={'15px'}><h1>Monetize Effectively to Tackle Market Turbulence</h1></Stack>
                <Flex mt={'20px'} justifyContent={'space-between'}>
                    <Image  h={'130px'} src="https://d190vb4jo83j4z.cloudfront.net/Login_Page_Banner_Aug_22.png" />
                    <Stack ml={'15px'} fontSize={'12px'}>
                    <Text >
                    Chargebee's Summer 2022 Release brings you better monetization capabilities that help you seize revenue opportunities by improving customer lifetime value, managing cashflows better, and achieving topline growth.
                    </Text>
                    <Text color={'blue'}>See what's new across our products -&gt;</Text>
                    </Stack>
                </Flex>
                </Box>
               <Box >
                    {state.isLoading ? <h1>Loading...</h1> : state.isError ? <Text color={'red'}>Please Enter Correct Email</Text> : ""}  
                    <Input w={'250px'} value={Email} onChange={(e)=>setEmail(e.target.value)} type={'email'}/>
                    <Spacer h={'10px'} />
                 
                    <Input w={'250px'}  value={Password} onChange={(e)=>setPassword(e.target.value)} type={'password'} />
                    <Spacer h={'10px'} />
                    <Flex mb={'20px'} justifyContent={'space-between'} alignContent={'center'} alignItems={'center'}>
                    <Button pl={'20px'} pr={'20px'} onClick={(e)=>LoginAuth(e)} bgColor='#FF6900' color={'white'} variant='solid'>Sign in</Button>
                    <Text color={'gray'}>Forgot password?</Text>
                    </Flex>
                    <Flex  alignItems={'center'} textAlign={'center'} justifyContent={'space-evenly'} alignContent={'center'}>
                    <Text w={'90%'} h='1px' bg='gray.300' />
                    <Text m={'5px'} color='gray.300'>or</Text>
                    <Text w={'90%'} h='1px' bg='gray.300' />
                    </Flex>    
                    <button className={styles.login}>Sign In with Google</button>
                    <Stack>
                        <Text mt={'15px'} fontSize={'12px'} color={'blue'}>Sign in with Single Sign-On</Text>
                    </Stack>
               </Box>
            </Flex>
    
        </Box>
    )
}

export default Login