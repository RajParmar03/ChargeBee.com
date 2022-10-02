import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios"
import LogoSlider from "./LogoSlider";
import SliderMenu from "./SliderMenu";

function TopSlider(){
    const [Data, setData] = useState([])
    
    useEffect(()=>{
        axios.get('https://json-server-chargebee.herokuapp.com/data')
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])

    console.log(Data.HomeSlide)

    return (
        <div>
            <Carousel width={'100%'}  autoPlay infiniteLoop showArrows={false} showThumbs={false}	>
            {Data.HomeSlide && Data.HomeSlide.map((slide) => {
                return( 
                <div>
                    <Flex justifyContent={'space-between'} m='auto' p={'30px'} w={'90%'} >
                        <Box w={'40%'} textAlign={'left'} fontSize={'30px'} mt={'50px'} fontWeight={'700'} lineHeight={'35px'}>
                            <h1>{slide.title}</h1>
                            <Text mt={'20px'} fontSize={'15px'} lineHeight={'20px'} fontWeight={'100'}>
                                Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.
                            </Text>
                            <Flex mt={'20px'} justifyContent={'space-around'}>
                                <Button bg='#5C00B5' color={'white'} variant='solid'>Get Demo  → </Button>
                                <Button bg='white' color={'black'} variant='outline'>Sign Up for free  → </Button>
                            </Flex>
                        </Box>
                        <Box w={"300px"}>
                            <div style={{"height": "300px","width": "250px","borderRadius":"30px",'background':'white'}}>
                                <Image src={slide.image} borderRadius={'30px'} style={{"width": "250px",}}  h="300px" />
                                <Text fontWeight={500}>{slide.name}</Text>
                                <Text>{slide.position}</Text>
                            </div>
                        
                        </Box>
                        
                    </Flex>
                    
                </div>
                    );
            })}

            </Carousel>
            <LogoSlider />

            <Stack w="50%" m={'auto'}>
                <Text m={'auto'} fontSize={'25px'} fontWeight={'extrabold'}>Streamline Revenue Operations</Text>
                <Text pl={'70px'} pr={'70px'} fontSize={'12px'} lineHeight={'15px'} color={'blackAlpha.600'} textAlign={'center'} m={'auto'}>
                    Chargebee automates the lead-to-ledger workflow across your revenue stack, so you can dream, deploy, and enjoy the breeze.
                    While the MRR just keeps rolling.
                </Text>
            </Stack>
            <SliderMenu data={Data.SliderMenu} />
        </div>
    )
}

export default TopSlider