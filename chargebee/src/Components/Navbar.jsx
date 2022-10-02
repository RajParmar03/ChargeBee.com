import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import { logOut } from "../Reducer/actionCreators";




function Navbar({invert}){

    const {state,dispatch} = useContext(AppContext)

    function LogOut(){
        dispatch(logOut())
    }

    return (
        <Flex width={'90%'}
              m={'auto'}
              justifyContent={'space-between'}
              alignItems={'center'}
              textAlign={'center'}
              alignContent={'center'}>
            <Flex justifyContent={'space-evenly'} w={'60%'} alignItems={'center'}
              textAlign={'center'}
              alignContent={'center'} fontSize={'12px'}>
                <Flex >
                    <Link to={'/'}>
                    <img style={{"filter": `invert(${invert})`}}
                    width={"100px"} 
                    src="https://www.insightpartners.com//assets/media/2018/03/Chargebee.png" 
                    alt="Logo" />
                    </Link>
                </Flex>
                <Flex justifyContent={'space-evenly'} w={'60%'}>
                <p>Product</p>
                <Link to={'/pricing'}><p>Pricing</p></Link>
                <p>Solution</p>
                <p>Customers</p>
                <p>Resources</p>
                <p>Partners</p>
                </Flex>
            </Flex>    
            <Flex 
              w={'250px'}
              m={'auto'}
              justifyContent={'space-between'}
              alignItems={'center'}
              textAlign={'center'}
              alignContent={'center'}>
                <Flex  fontSize={'12px'}>
                <img width={'15px'} src='https://webstatic.chargebee.com/assets/web/519/images/globe2.svg' alt="Earth"/>
                <p style={{ 'paddingLeft':'5px','paddingRight': '5px'}}>English</p>
                </Flex>
                <Flex  fontSize={'12px'}>
                <img width={'15px'}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Orange_lock.svg/1200px-Orange_lock.svg.png' 
                alt="Lock"/>
                {state.isAuth ? <p onClick={()=>LogOut()} style={{ 'paddingLeft':'5px','cursor':'pointer'}}>Log out</p> : <Link to={'/login'}><p style={{ 'paddingLeft':'5px'}}>Log in</p></Link> }
                
               
                </Flex>
                <Flex style={{ 'paddingLeft':'5px','paddingRight': '5px'}} >
                    <Button borderRadius={'1px'} alignContent={'center'} alignItems={'center'} p={'5px'} height={'30px'} color='white' bgColor='#FF6900' variant='solid'>Get a Demo &gt; </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Navbar