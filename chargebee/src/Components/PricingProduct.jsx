import { Box, Button, Flex, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { useState } from "react"
import axios from "axios"


function PricingProduct (){

    const Init = () => {
        axios.get(`https://json-server-chargebee.herokuapp.com/Annual`)
        .then((res)=>setData(res.data))
    }

    const [data,setData] = useState(Init)

  

    function GetDataPricing(duration){
        axios.get(`https://json-server-chargebee.herokuapp.com/${duration}`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    }
    console.log(data)
    return (
        <div>
            <Flex>
                <Box textAlign={'left'} w={'80%'} m={'auto'}>
                    <Box p={'30px 30px'}>
                    <Text fontSize={'45px'} fontWeight={'bold'}>Find a plan that's right for you</Text>
                    <Flex alignContent={'center'} alignItems={'center'}>
                        <Text>Or simply leverage the expertise of our consultation team.</Text>
                        <Button h={'15px'} fontSize={'10px'} ml={'5px'} colorScheme='white' variant='outline'>TALK TO US -&gt;</Button>
                    </Flex>
                    </Box>
                    <Box>
                    <Tabs variant='soft-rounded'>
                        <Flex alignItems={'center'} justifyContent={'space-evenly'}  w={'100%'} m={'auto'} p={'30px 30px'} > 
                            <Tabs h={'20px'} variant='soft-rounded'>
                            <TabList borderRadius={'20px'} h={'20px'} color={'white'}  bgColor={'#8B5DC9'}>
                                <Tab onClick={()=>GetDataPricing('Annual')}  _selected={{ color: '#8B5DC9', bg: 'white' }} fontWeight={'bold'} fontSize={'10px'}>ANNUAL</Tab>
                                <Tab onClick={()=>GetDataPricing('Monthly')} _selected={{ color: '#8B5DC9', bg: 'white' }} fontWeight={'bold'} fontSize={'10px'}>MONTHLY</Tab>
                            </TabList>
                            </Tabs>
                            <Spacer />
                            <TabList borderRadius={'20px'} ml={'40px'} bgColor={'#8B5DC9'} h={'20px'}>
                                <Tab _selected={{ color: '#8B5DC9', bg: 'white' }} fontWeight={'bold'} fontSize={'10px'}>USD</Tab>
                                <Tab _selected={{ color: '#8B5DC9', bg: 'white' }} fontWeight={'bold'} fontSize={'10px'}>EUR</Tab>
                                <Tab _selected={{ color: '#8B5DC9', bg: 'white' }} fontWeight={'bold'} fontSize={'10px'}>GBP</Tab>
                                <Tab _selected={{ color: '#8B5DC9', bg: 'white' }} fontWeight={'bold'} fontSize={'10px'}>AUD</Tab>
                                <Tab _selected={{ color: '#8B5DC9', bg: 'white' }} fontWeight={'bold'} fontSize={'10px'}>CAD</Tab>
                                <Tab _selected={{ color: '#8B5DC9', bg: 'white' }} fontWeight={'bold'} fontSize={'10px'}>INR</Tab>
                            </TabList>
                        </Flex>
                        <Flex alignItems={'center'} justifyContent={'space-evenly'}  w={'100%'} m={'auto'} p={'30px 30px'}>
                            <Box w={'23%'} >
                                <Text fontSize={'25px'}>Launch</Text>
                                <br />
                                <Text fontSize={'13px'} lineHeight={'15px'}>
                                    For early-stage startups that want to spend more time developing and less on manual operations.
                                </Text>
                            </Box>
                            <Box w={'23%'}  >
                                <Text  fontSize={'25px'}>Rise</Text>
                                <br />
                                <Text fontSize={'13px'} lineHeight={'15px'}>
                                    For agile startups that want to grow their revenue with quick experiments and data-driven decision making.    
                                </Text>
                            </Box>
                            <Box w={'23%'} >
                                <Text  fontSize={'25px'}>Scale</Text>
                                <br />
                                <Text fontSize={'13px'} lineHeight={'15px'}>
                                    For fast-growth scaleups that want to grow by maximizing efficiencies in their revenue operations.
                                </Text>
                            </Box>
                            <Box w={'23%'} >
                                <Text  fontSize={'25px'}>Enterprise</Text>
                                <br />
                                <Text fontSize={'13px'} lineHeight={'15px'}>
                                
                                For large businesses looking for enterprise-class compliance while diversifying revenue streams.
                                </Text>
                            </Box>
                        </Flex>
                        <TabPanels>
                            <TabPanel>
                            { data &&
                                (<Flex bg={'white'} alignItems={'center'} justifyContent={'space-evenly'} color={'black'} w={'100%'} m={'auto'} p={'30px 30px'}>
                                    <Box w={'23%'} h={'200px'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.USD.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.USD.launch.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}>  for your first {data.USD.launch.revenue}  in revenue What happens when I hit {data.USD.launch.revenue}?</Text>
                                        <br />
                                        <Button color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Get started for free →</Button>
                                        
                                    </Box>
                                    <Box w={'23%'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.USD.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.USD.rise.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> 
                                            includes {data.USD.rise.revenue} revenue 0.6% of overage revenue 
                                        </Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Schedule a demo  →</Button>
                                    </Box>
                                    <Box w={'23%'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.USD.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.USD.scale.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> includes {data.USD.scale.revenue} revenue 0.75% of overage revenue</Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Schedule a demo  →</Button>
                                    </Box>
                                    <Box mt={'15px'} w={'23%'}>
                            
                                        <Text fontSize={'25px'} fontWeight={'bold'}> Custom </Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> Get a quote tailored to your requirements.</Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Talk to sales  →</Button>
                                    </Box>
                                </Flex>)
                            }    
                            </TabPanel>
                            <TabPanel>
                            { data &&
                                (<Flex bg={'white'} alignItems={'center'} justifyContent={'space-evenly'} color={'black'} w={'100%'} m={'auto'} p={'30px 30px'}>
                                    <Box w={'23%'} h={'200px'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.EUR.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.EUR.launch.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}>  for your first {data.EUR.launch.revenue}  in revenue What happens when I hit {data.EUR.launch.revenue}?</Text>
                                        <br />
                                        <Button color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Get started for free →</Button>
                                    </Box>
                                    <Box w={'23%'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.EUR.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.EUR.rise.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> 
                                            includes {data.EUR.rise.revenue} revenue 0.6% of overage revenue 
                                        </Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Schedule a demo  →</Button>
                                    </Box>
                                    <Box w={'23%'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.EUR.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.EUR.scale.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> includes {data.EUR.scale.revenue} revenue 0.75% of overage revenue</Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Schedule a demo  →</Button>
                                    </Box>
                                    <Box mt={'15px'} w={'23%'}>
                            
                                        <Text fontSize={'25px'} fontWeight={'bold'}> Custom </Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> Get a quote tailored to your requirements.</Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Talk to sales  →</Button>
                                    </Box>
                                </Flex>)
                            }    
                            </TabPanel>
                            <TabPanel>
                            { data &&
                                (<Flex bg={'white'} alignItems={'center'} justifyContent={'space-evenly'} color={'black'} w={'100%'} m={'auto'} p={'30px 30px'}>
                                    <Box w={'23%'} h={'200px'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.GBP.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.GBP.launch.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}>  for your first {data.GBP.launch.revenue}  in revenue What happens when I hit {data.GBP.launch.revenue}?</Text>
                                        <br />
                                        <Button color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Get started for free →</Button>
                                    </Box>
                                    <Box w={'23%'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.GBP.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.GBP.rise.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> 
                                            includes {data.GBP.rise.revenue} revenue 0.6% of overage revenue 
                                        </Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Schedule a demo  →</Button>
                                    </Box>
                                    <Box w={'23%'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.GBP.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.GBP.scale.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> includes {data.GBP.scale.revenue} revenue 0.75% of overage revenue</Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Schedule a demo  →</Button>
                                    </Box>
                                    <Box mt={'15px'} w={'23%'}>
                            
                                        <Text fontSize={'25px'} fontWeight={'bold'}> Custom </Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> Get a quote tailored to your requirements.</Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Talk to sales  →</Button>
                                    </Box>
                                </Flex>)
                            }    
                            </TabPanel>
                            <TabPanel>
                            { data &&
                                (<Flex bg={'white'} alignItems={'center'} justifyContent={'space-evenly'} color={'black'} w={'100%'} m={'auto'} p={'30px 30px'}>
                                    <Box w={'23%'} h={'200px'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.AUD.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.AUD.launch.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}>  for your first {data.AUD.launch.revenue}  in revenue What happens when I hit {data.AUD.launch.revenue}?</Text>
                                        <br />
                                        <Button color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Get started for free →</Button>
                                    </Box>
                                    <Box w={'23%'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.AUD.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.AUD.rise.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> 
                                            includes {data.AUD.rise.revenue} revenue 0.6% of overage revenue 
                                        </Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Schedule a demo  →</Button>
                                    </Box>
                                    <Box w={'23%'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.AUD.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.AUD.scale.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> includes {data.AUD.scale.revenue} revenue 0.75% of overage revenue</Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Schedule a demo  →</Button>
                                    </Box>
                                    <Box mt={'15px'} w={'23%'}>
                            
                                        <Text fontSize={'25px'} fontWeight={'bold'}> Custom </Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> Get a quote tailored to your requirements.</Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Talk to sales  →</Button>
                                    </Box>
                                </Flex>)
                            }    
                            </TabPanel>
                            <TabPanel>
                            { data &&
                                (<Flex bg={'white'} alignItems={'center'} justifyContent={'space-evenly'} color={'black'} w={'100%'} m={'auto'} p={'30px 30px'}>
                                    <Box w={'23%'} h={'200px'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.CAD.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.CAD.launch.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}>  for your first {data.CAD.launch.revenue}  in revenue What happens when I hit {data.CAD.launch.revenue}?</Text>
                                        <br />
                                        <Button color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Get started for free →</Button>
                                    </Box>
                                    <Box w={'23%'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.CAD.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.CAD.rise.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> 
                                            includes {data.CAD.rise.revenue} revenue 0.6% of overage revenue 
                                        </Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Schedule a demo  →</Button>
                                    </Box>
                                    <Box w={'23%'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.CAD.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.CAD.scale.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> includes {data.CAD.scale.revenue} revenue 0.75% of overage revenue</Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Schedule a demo  →</Button>
                                    </Box>
                                    <Box mt={'15px'} w={'23%'}>
                            
                                        <Text fontSize={'25px'} fontWeight={'bold'}> Custom </Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> Get a quote tailored to your requirements.</Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Talk to sales  →</Button>
                                    </Box>
                                </Flex>)
                            }    
                            </TabPanel>
                            <TabPanel>
                            { data &&
                                (<Flex bg={'white'} alignItems={'center'} justifyContent={'space-evenly'} color={'black'} w={'100%'} m={'auto'} p={'30px 30px'}>
                                    <Box w={'23%'} h={'200px'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.INR.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.INR.launch.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}>  for your first {data.INR.launch.revenue}  in revenue What happens when I hit {data.INR.launch.revenue}?</Text>
                                        <br />
                                        <Button color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Get started for free →</Button>
                                    </Box>
                                    <Box w={'23%'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.INR.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.INR.rise.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> 
                                            includes {data.INR.rise.revenue} revenue 0.6% of overage revenue 
                                        </Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Schedule a demo  →</Button>
                                    </Box>
                                    <Box w={'23%'}>
                                        <Text fontSize={'12px'} fontWeight={'bold'} color={'#8B5DC9'}> {data.INR.CURR}</Text>
                                        <Text fontSize={'25px'} fontWeight={'bold'}> {data.INR.scale.price} /mo</Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> includes {data.INR.scale.revenue} revenue 0.75% of overage revenue</Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Schedule a demo  →</Button>
                                    </Box>
                                    <Box mt={'15px'} w={'23%'}>
                            
                                        <Text fontSize={'25px'} fontWeight={'bold'}> Custom </Text>
                                        <br />
                                        <Text fontSize={'12px'} lineHeight={'15px'} color={'gray.700'}> Get a quote tailored to your requirements.</Text>
                                        <br />
                                        <Button  color={"white"} borderRadius={'5px'} fontSize={'12px'} bg='#8B5DC9' >Talk to sales  →</Button>
                                    </Box>
                                </Flex>)
                            }    
                            </TabPanel>
                        </TabPanels>
                        </Tabs>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default PricingProduct