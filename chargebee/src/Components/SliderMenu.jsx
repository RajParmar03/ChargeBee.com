import { Box, Flex, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"


function SliderMenu({data}){

    return (
        <div>
            <Tabs>
            <Flex justifyContent={"space-evenly"} w={'90%'} m={'auto'}>
                <TabList>
                    
                    <Tab>
                        Subscription Automation
                    </Tab>
                    <Tab>
                        Billing Experiments
                    </Tab>
                    <Tab>
                        Revenue Intelligence
                    </Tab>
                    <Tab>
                        Extensible Platform
                    </Tab>
                    <Tab>
                        Enterprise-Grade Security
                    </Tab>
                    
                </TabList>
                </Flex>
                <TabPanels  w={'80%'} m="auto">
                  { data && data.map((item)=>{
                        return (
                            <TabPanel>
                                <Flex w={"80%"} m={'auto'} justifyContent={'space-between'} textAlign={"left"} p={'20px'}>
                                    <Box w={'40%'} m={"auto"}>
                                        <Text fontSize={'20px'} lineHeight={'20px'} fontWeight={'extrabold'}  mb={'20px'}>{item.title}</Text>
                                        <Text fontSize={'15px'} lineHeight={'15px'} fontWeight={'light'} color={'gray.500'}  mb={'20px'}>{item.desc}</Text>
                                        <Stack ml={'20px'} color={'gray.500'} fontSize={'15px'} lineHeight={'20px'}><ul>{item.tag.map((p)=><li>{p}</li>)}</ul></Stack>
                                    </Box>
                                    <Box w={'50%'}>
                                        <Image src={item.image} />
                                    </Box>
                                </Flex>
                            </TabPanel>
                        )
                    })}
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default SliderMenu